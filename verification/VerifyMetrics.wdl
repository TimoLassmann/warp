version 1.0

workflow VerifyMetrics {

  input {
    Array[File] test_metrics
    Array[File] truth_metrics
  }

  call CompareTwoNumbers as CompareNumberOfMetricFiles {
    input:
      test_num = length(test_metrics),
      truth_num = length(truth_metrics),
      comparison_type_msg = "Number of Metric Files"
  }

  scatter (idx in range(CompareNumberOfMetricFiles.minimum_num)) {
    call CompareMetricFiles {
      input:
        file1 = test_metrics[idx],
        file2 = truth_metrics[idx],
        output_file = "metric_~{idx}.txt",
        metrics_to_ignore = []
    }
  }

  call SummarizeResults {
    input:
      compare_two_numbers_exit_code = CompareNumberOfMetricFiles.exit_code,
      compare_two_humbers_results_file = CompareNumberOfMetricFiles.error_report_file,
      metric_exit_codes = CompareMetricFiles.exit_code,
      metric_report_files = CompareMetricFiles.report_file
  }

  output {
    File report_file = SummarizeResults.error_report_file
    Array[Int] metric_comparison_exit_codes = CompareMetricFiles.exit_code
    Array[File] metric_comparison_report_files = CompareMetricFiles.report_file
  }
  meta {
    allowNestedInputs: true
  }
}

task SummarizeResults {
  input {
    Int compare_two_numbers_exit_code
    File compare_two_humbers_results_file
    Array[Int] metric_exit_codes
    Array[File] metric_report_files
  }

  command <<<
    cat ~{compare_two_humbers_results_file}
    exit_code=~{compare_two_numbers_exit_code}
    if [ "$exit_code" -ne "0" ]; then
      exit $exit_code
    fi

    mapfile -t files < ~{write_lines(metric_report_files)}
    mapfile -t exit_codes < ~{write_lines(metric_exit_codes)}

    for ((i=0;i<${#files[@]};++i)); do
      echo "------------"
      cat ${files[$i]}
      if [ "${exit_codes[$i]}" -ne "0" ]; then
        exit_code=${exit_codes[$i]}
      fi
    done
    exit $exit_code
  >>>
  runtime {
    docker: "gcr.io/gcp-runtimes/ubuntu_16_0_4:latest"
    disks: "local-disk 50 HDD"
    memory: "2 GiB"
    preemptible: 3
  }
  output {
    File error_report_file = stdout()
  }
}

task CompareTwoNumbers {
  input {
    Int test_num
    Int truth_num
    String? comparison_type_msg = "Two Numbers"
  }

  command {
    echo "Results of Comparison of ~{comparison_type_msg}"
    if [ ~{test_num} -ne ~{truth_num} ]; then
      echo -e "Fail\t~{comparison_type_msg} differ ~{test_num} (Test) vs. ~{truth_num} (Truth)."
      echo $((~{test_num}<~{truth_num} ? ~{test_num} : ~{truth_num})) > mininum_num.txt
      exit_code=1
    else
      echo "Pass"
      echo ~{test_num} > minimum_num.txt
      exit_code=0
    fi
    echo $exit_code>return_code.txt
    exit $exit_code
  }

  runtime {
    docker: "gcr.io/gcp-runtimes/ubuntu_16_0_4:latest"
    disks: "local-disk 10 HDD"
    memory: "3.5 GiB"
    preemptible: 3
  }
  output {
    Int exit_code = read_int("return_code.txt")
    Int minimum_num = read_int("minimum_num.txt")
    File error_report_file = stdout()
  }
}

task CompareMetricFiles {
  input {
    File file1
    File file2
    String output_file
    Array[String] metrics_to_ignore
  }

  command <<<
    java -Xmx3g -Dpicard.useLegacyParser=false  -jar /usr/picard/picard.jar \
      CompareMetrics \
      --INPUT ~{file1} \
      --INPUT ~{file2} \
      --OUTPUT ~{output_file} \
      ~{true="--METRICS_TO_IGNORE" false="" length(metrics_to_ignore) > 0} ~{default="" sep=" --METRICS_TO_IGNORE " metrics_to_ignore}
    echo $?>return_code.txt
    exit 0
  >>>

  runtime {
    docker: "us.gcr.io/broad-gotc-prod/picard-cloud:2.23.8"
    disks: "local-disk 10 HDD"
    memory: "3.5 GiB"
    preemptible: 3
  }
  output {
    Int exit_code = read_int("return_code.txt")
    File report_file = output_file
  }
}