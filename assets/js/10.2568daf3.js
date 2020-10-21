(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{369:function(t,e,a){t.exports=a.p+"assets/img/scATAC_diagram.c52c8893.png"},397:function(t,e,a){"use strict";a.r(e);var r=a(25),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("Pipeline Version")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Date Updated")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Documentation Author")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Questions or Feedback")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("scATAC 1.1.0 "),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("August 24th 2020")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"mailto:ekiernan@broadinstitute.org"}},[t._v("Elizabeth Kiernan")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Please file GitHub issues in skylab or contact "),r("a",{attrs:{href:"mailto:kdegatano@broadinstitute.org"}},[t._v("Kylee Degatano")])])])])]),t._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#introduction"}},[t._v("Introduction")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#quick-start-table"}},[t._v("Quick Start Table")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#set-up"}},[t._v("Set-up")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#workflow-installation-and-requirements"}},[t._v("Workflow Installation and Requirements")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#pipeline-inputs"}},[t._v("Pipeline Inputs")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#input-file-preparation"}},[t._v("Input File Preparation")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#r1-and-r2-fastq-preparation"}},[t._v("R1 and R2 FASTQ Preparation")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#input_reference-preparation"}},[t._v("Input_reference Preparation")])])])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#workflow-tasks-and-tools"}},[t._v("Workflow Tasks and Tools")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#task-summary"}},[t._v("Task Summary")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#alignpairedend"}},[t._v("AlignPairedEnd")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#snappre"}},[t._v("SnapPre")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#filtering-parameters"}},[t._v("Filtering Parameters")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#snap-qc-metrics"}},[t._v("Snap QC Metrics")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#snapcellbybin"}},[t._v("SnapCellByBin")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#makecompliantbam"}},[t._v("MakeCompliantBAM")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#breakoutsnap"}},[t._v("BreakoutSnap")])])])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#outputs"}},[t._v("Outputs")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#running-on-terra"}},[t._v("Running on Terra")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#versioning"}},[t._v("Versioning")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#pipeline-improvements"}},[t._v("Pipeline Improvements")])])]),t._v(" "),r("p",[r("img",{attrs:{src:a(369),alt:"scATAC_diagram"}})]),t._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),r("p",[t._v("The scATAC Pipeline was developed by the Broad DSP Pipelines team to process single cell/nucleus ATAC-seq datasets. The pipeline is based on the "),r("a",{attrs:{href:"https://github.com/r3fang/SnapATAC",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapATAC pipeline"),r("OutboundLink")],1),t._v(" described by "),r("a",{attrs:{href:"https://www.biorxiv.org/content/10.1101/615179v2.full",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fang et al. (2019)"),r("OutboundLink")],1),t._v(". Overall, the pipeline uses the python module "),r("a",{attrs:{href:"https://github.com/r3fang/SnapTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapTools"),r("OutboundLink")],1),t._v(" to align and process paired reads in the form of FASTQ files. It produces an hdf5-structured Snap file that includes a cell-by-bin count matrix. In addition to the Snap file, the final outputs include a GA4GH compliant aligned BAM and QC metrics.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("Want to use the scATAC Pipeline for your publication?")]),t._v(" "),r("p",[t._v("Check out the "),r("RouterLink",{attrs:{to:"/documentation/Pipelines/Single_Cell_ATAC_Seq_Pipeline/scatac.methods.html"}},[t._v("scATAC Publication Methods")]),t._v(" to get started!")],1)]),t._v(" "),r("h3",{attrs:{id:"quick-start-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-start-table"}},[t._v("#")]),t._v(" Quick Start Table")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pipeline Features")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Source")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Assay Type")]),t._v(" "),r("td",[t._v("Single nucleus ATAC-seq")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.biorxiv.org/content/biorxiv/early/2019/05/13/615179.full.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Preprint here "),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Overall Workflow")]),t._v(" "),r("td",[t._v("Generates Snap file with cell x bin matrix")]),t._v(" "),r("td",[t._v("Code available from "),r("a",{attrs:{href:"scATAC.wdl"}},[t._v("GitHub")])])]),t._v(" "),r("tr",[r("td",[t._v("Workflow Language")]),t._v(" "),r("td",[t._v("WDL 1.0")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/openwdl/wdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("openWDL"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Aligner")]),t._v(" "),r("td",[t._v("BWA")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://pubmed.ncbi.nlm.nih.gov/19451168/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Li H. and Durbin R., 2009"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Data Input File Format")]),t._v(" "),r("td",[t._v("File format in which sequencing data is provided")]),t._v(" "),r("td",[t._v("Paired-end FASTQs with cell barcodes appended to read names (read barcode demultiplexing section "),r("a",{attrs:{href:"https://github.com/r3fang/SnapATAC/wiki/FAQs#whatissnap",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("tr",[r("td",[t._v("Data Output File Format")]),t._v(" "),r("td",[t._v("File formats in which scATAC output is provided")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://samtools.github.io/hts-specs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BAM"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/r3fang/SnapATAC/wiki/FAQs#whatissnap",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snap"),r("OutboundLink")],1)])])])]),t._v(" "),r("h2",{attrs:{id:"set-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[t._v("#")]),t._v(" Set-up")]),t._v(" "),r("h3",{attrs:{id:"workflow-installation-and-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-installation-and-requirements"}},[t._v("#")]),t._v(" Workflow Installation and Requirements")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"scATAC.wdl"}},[t._v("scATAC workflow")]),t._v(" is written in the Workflow Description Language WDL and can be downloaded by cloning the GitHub "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WARP repository"),r("OutboundLink")],1),t._v(". The workflow can be deployed using "),r("a",{attrs:{href:"https://cromwell.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cromwell"),r("OutboundLink")],1),t._v(", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms. For the latest workflow version and release notes, please see the scATAC "),r("RouterLink",{attrs:{to:"/documentation/Pipelines/Single_Cell_ATAC_Seq_Pipeline/scATAC.changelog.html"}},[t._v("changelog")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"pipeline-inputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-inputs"}},[t._v("#")]),t._v(" Pipeline Inputs")]),t._v(" "),r("p",[t._v("The pipeline inputs are detailed in the table below. You can test the workflow by using the "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/scATAC/example_inputs/human_example.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("human_example.json"),r("OutboundLink")],1),t._v(" example configuration file.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Input name")]),t._v(" "),r("th",[t._v("Input type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("input_fastq1")]),t._v(" "),r("td",[t._v("File")]),t._v(" "),r("td",[t._v("FASTQ file of the first reads (R1)")])]),t._v(" "),r("tr",[r("td",[t._v("input_fastq2")]),t._v(" "),r("td",[t._v("File")]),t._v(" "),r("td",[t._v("FASTQ file of the second reads (R2)")])]),t._v(" "),r("tr",[r("td",[t._v("input_reference")]),t._v(" "),r("td",[t._v("File")]),t._v(" "),r("td",[t._v("Reference bundle that is generated with bwa-mk-index-wdl found "),r("a",{attrs:{href:"https://github.com/HumanCellAtlas/skylab/blob/master/library/accessory_workflows/build_bwa_reference/bwa-mk-index.wdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("genome_name")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Name of the genomic reference (name that precedes the “.tar” in the input_reference)")])]),t._v(" "),r("tr",[r("td",[t._v("output_bam")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Name for the output BAM")])]),t._v(" "),r("tr",[r("td",[t._v("bin_size_list")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("List of bin sizes used to generate cell-by-bin matrices; default is 10000 bp")])])])]),t._v(" "),r("h3",{attrs:{id:"input-file-preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-file-preparation"}},[t._v("#")]),t._v(" Input File Preparation")]),t._v(" "),r("h4",{attrs:{id:"r1-and-r2-fastq-preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#r1-and-r2-fastq-preparation"}},[t._v("#")]),t._v(" R1 and R2 FASTQ Preparation")]),t._v(" "),r("p",[t._v("The scATAC workflow requires paired reads in the form FASTQ files with the cell barcodes appended to the readnames. A description of the barcode demultiplexing can be found on the SnapATAC documentation (see barcode demultiplexing section "),r("a",{attrs:{href:"https://github.com/r3fang/SnapATAC/wiki/FAQs#CEMBA_snap",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v("). The full cell barcode must form the first part of the read name (for both R1 and R2 files) and be separated from the rest of the line by a colon. You can find an example python code to perform demultiplexing in the "),r("a",{attrs:{href:"https://github.com/r3fang/SnapTools/blob/master/snaptools/dex_fastq.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapTools documentation here"),r("OutboundLink")],1),t._v(". The codeblock below demonstrates the correct format.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("@CAGTTGCACGTATAGAACAAGGATAGGATAAC:7001113:915:HJ535BCX2:1:1106:1139:1926 1:N:0:0\nACCCTCCGTGTGCCAGGAGATACCATGAATATGCCATAGAACCTGTCTCT\n+\nDDDDDIIIIIIIIIIIIIIHHIIIIIIIIIIIIIIIIIIIIIIIIIIIII\n")])])]),r("h4",{attrs:{id:"input-reference-preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-reference-preparation"}},[t._v("#")]),t._v(" Input_reference Preparation")]),t._v(" "),r("p",[t._v("The input_reference is a BWA compatible reference bundle in TAR file format. You can create this BWA reference using the accessory workflow  "),r("a",{attrs:{href:"https://github.com/HumanCellAtlas/skylab/blob/master/library/accessory_workflows/build_bwa_reference/bwa-mk-index.wdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h1",{attrs:{id:"workflow-tasks-and-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-tasks-and-tools"}},[t._v("#")]),t._v(" Workflow Tasks and Tools")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/scATAC/scATAC.wdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("scATAC workflow"),r("OutboundLink")],1),t._v(" is divided into multiple tasks which are described in the table below. The table also links to the Docker Image for each task and to the documentation or code for the relevant software tool parameters.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Task")]),t._v(" "),r("th",[t._v("Task Description")]),t._v(" "),r("th",[t._v("Tool Docker Image")]),t._v(" "),r("th",[t._v("Parameter Descriptions or Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("AlignPairedEnd")]),t._v(" "),r("td",[t._v("Align the modified FASTQ files to the genome")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/dockers/skylab/snaptools/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("snaptools:0.0.1"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/r3fang/SnapTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapTools documentation"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("SnapPre")]),t._v(" "),r("td",[t._v("Initial generation of snap file")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/dockers/skylab/snaptools/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("snaptools:0.0.1"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/r3fang/SnapTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapTools documentation"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("SnapCellByBin")]),t._v(" "),r("td",[t._v("Binning of data by genomic bins")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/dockers/skylab/snaptools/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("snaptools:0.0.1"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/r3fang/SnapTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapTools documentation"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("MakeCompliantBAM")]),t._v(" "),r("td",[t._v("Generation of a GA4GH compliant BAM")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/dockers/skylab/snaptools/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("snaptools:0.0.1"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/dockers/skylab/snaptools/makeCompliantBAM.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("BreakoutSnap")]),t._v(" "),r("td",[t._v("Extraction of tables from snap file into text format (for testing and user availability)")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/HumanCellAtlas/skylab/tree/master/docker/snap-breakout",target:"_blank",rel:"noopener noreferrer"}},[t._v("snap-breakout:0.0.1"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/tree/master/dockers/skylab/snap-breakout/breakoutSnap.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code"),r("OutboundLink")],1)])])])]),t._v(" "),r("h3",{attrs:{id:"task-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#task-summary"}},[t._v("#")]),t._v(" Task Summary")]),t._v(" "),r("h4",{attrs:{id:"alignpairedend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alignpairedend"}},[t._v("#")]),t._v(" AlignPairedEnd")]),t._v(" "),r("p",[t._v("The AlignPairedEnd task takes the barcode demultiplexed FASTQ files and aligns reads to the genome using the BWA aligner. It uses the SnapTools min_cov parameter to set the minimum number of barcodes a fragment requires to be included in the final output. This parameter is set to 0. The final task output is an aligned BAM file.")]),t._v(" "),r("h4",{attrs:{id:"snappre"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snappre"}},[t._v("#")]),t._v(" SnapPre")]),t._v(" "),r("p",[t._v("The SnapPre task uses SnapTools to perform preprocessing and filtering on the aligned BAM. The task outputs are a Snap file and QC metrics. The table below details the filtering parameters for the task.")]),t._v(" "),r("h5",{attrs:{id:"filtering-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-parameters"}},[t._v("#")]),t._v(" Filtering Parameters")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Value")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("--min-mapq")]),t._v(" "),r("td",[t._v("Fragments with mappability less than value will be filtered")]),t._v(" "),r("td",[t._v("30")])]),t._v(" "),r("tr",[r("td",[t._v("--min-flen")]),t._v(" "),r("td",[t._v("Fragments of length shorter than min_flen will be filtered")]),t._v(" "),r("td",[t._v("0")])]),t._v(" "),r("tr",[r("td",[t._v("--max-flen")]),t._v(" "),r("td",[t._v("Fragments of length bigger than min_flen will be filtered")]),t._v(" "),r("td",[t._v("1000")])]),t._v(" "),r("tr",[r("td",[t._v("--keep-chrm")]),t._v(" "),r("td",[t._v("Boolean variable indicates whether to keep reads mapped to chrM")]),t._v(" "),r("td",[t._v("TRUE")])]),t._v(" "),r("tr",[r("td",[t._v("--keep-single")]),t._v(" "),r("td",[t._v("Boolean variable indicates whether to keep single-end reads")]),t._v(" "),r("td",[t._v("TRUE")])]),t._v(" "),r("tr",[r("td",[t._v("--keep-secondary")]),t._v(" "),r("td",[t._v("Boolean variable indicates whether to keep secondary alignments")]),t._v(" "),r("td",[t._v("FALSE")])]),t._v(" "),r("tr",[r("td",[t._v("--max-num")]),t._v(" "),r("td",[t._v("Max number of barcodes to be stored. Based on the coverage, top max_barcode barcodes are selected and stored")]),t._v(" "),r("td",[t._v("1000000")])]),t._v(" "),r("tr",[r("td",[t._v("--min-cov")]),t._v(" "),r("td",[t._v("Fragments with less than min-cov number of barcodes will be filtered")]),t._v(" "),r("td",[t._v("100")])])])]),t._v(" "),r("h4",{attrs:{id:"snapcellbybin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snapcellbybin"}},[t._v("#")]),t._v(" SnapCellByBin")]),t._v(" "),r("p",[t._v("The SnapCellByBin task uses the Snap file to create cell-by-bin count matrices in which a “1” represents a bin with an accessible region of the genome and a “0” represents an inaccessible region. The bin_size_list sets the bin size to 10,000 bp by default but can be changed by specifying the value in the inputs to the workflow.")]),t._v(" "),r("h4",{attrs:{id:"makecompliantbam"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#makecompliantbam"}},[t._v("#")]),t._v(" MakeCompliantBAM")]),t._v(" "),r("p",[t._v("The MakeCompliantBAM task uses a "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/dockers/skylab/snaptools/makeCompliantBAM.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom python script (here)"),r("OutboundLink")],1),t._v(" to make a GA4GH compliant BAM by moving the cellular barcodes in the read names to the CB tag.")]),t._v(" "),r("h4",{attrs:{id:"breakoutsnap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breakoutsnap"}},[t._v("#")]),t._v(" BreakoutSnap")]),t._v(" "),r("p",[t._v("The BreakoutSnap task extracts data from the Snap file and exports it to individual CSVs. These CSV outputs are listed in the table in the Outputs section below. The code is available "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/tree/master/dockers/skylab/snap-breakout/breakoutSnap.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),r("p",[t._v("The main outputs of the scATAC workflow are the Snap file, Snap QC metrics, and the GA4GH compliant BAM file. All files with the prefix “breakout” are CSV files containing individual pieces of data from the Snap. The sessions for the Snap file are described in the "),r("a",{attrs:{href:"https://github.com/r3fang/SnapTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnapTools documentation"),r("OutboundLink")],1),t._v(". Additionally, you can read detailed information on the "),r("a",{attrs:{href:"https://github.com/r3fang/SnapTools/blob/master/docs/snap_format.docx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snap file fields for each session"),r("OutboundLink")],1),t._v(' (select "View Raw").')]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Output File Name")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("output_snap_qc")]),t._v(" "),r("td",[t._v("Quality control file corresponding to the snap file")])]),t._v(" "),r("tr",[r("td",[t._v("output_snap")]),t._v(" "),r("td",[t._v("Output snap file (in hdf5 container format)")])]),t._v(" "),r("tr",[r("td",[t._v("output_aligned_bam")]),t._v(" "),r("td",[t._v("Output BAM file, compliant with GA4GH standards")])]),t._v(" "),r("tr",[r("td",[t._v("breakout_barcodes")]),t._v(" "),r("td",[t._v("Text file containing the FM ('Fragment session') barcodeLen and barcodePos fields")])]),t._v(" "),r("tr",[r("td",[t._v("breakout_fragments")]),t._v(" "),r("td",[t._v("Text file containing the FM ('Fragments session') fragChrom, fragLen, and fragStart fields")])]),t._v(" "),r("tr",[r("td",[t._v("breakout_binCoordinates")]),t._v(" "),r("td",[t._v("Text file with the AM session ('Cell x bin accessibility' matrix) binChrom and binStart fields")])]),t._v(" "),r("tr",[r("td",[t._v("breakout_binCounts")]),t._v(" "),r("td",[t._v("Text file with the AM session ('Cell x bin accessibility' matrix) idx, idy, and count fields")])]),t._v(" "),r("tr",[r("td",[t._v("breakout_barcodesSection")]),t._v(" "),r("td",[t._v("Text file with the data from the BD session ('Barcode session' table)")])])])]),t._v(" "),r("h5",{attrs:{id:"snap-qc-metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snap-qc-metrics"}},[t._v("#")]),t._v(" Snap QC Metrics")]),t._v(" "),r("p",[t._v("The following table details the metrics available in the output_snap_qc file.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("QC Metric")]),t._v(" "),r("th",[t._v("Abbreviation")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Total number of unique barcodes")]),t._v(" "),r("td",[t._v("No abbreviation")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of fragments")]),t._v(" "),r("td",[t._v("TN")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of uniquely mapped")]),t._v(" "),r("td",[t._v("UM")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of single ends")]),t._v(" "),r("td",[t._v("SE")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of secondary alignments")]),t._v(" "),r("td",[t._v("SA")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of paired ends")]),t._v(" "),r("td",[t._v("PE")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of proper paired")]),t._v(" "),r("td",[t._v("PP")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of proper frag len")]),t._v(" "),r("td",[t._v("PL")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of usable fragments")]),t._v(" "),r("td",[t._v("US")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of unique fragments")]),t._v(" "),r("td",[t._v("UQ")])]),t._v(" "),r("tr",[r("td",[t._v("Total number of chrM fragments")]),t._v(" "),r("td",[t._v("CM")])])])]),t._v(" "),r("h2",{attrs:{id:"running-on-terra"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-on-terra"}},[t._v("#")]),t._v(" Running on Terra")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://app.terra.bio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra"),r("OutboundLink")],1),t._v(' is a public, cloud-based platform for biomedical research. If you would like to try the scATAC workflow (previously named "snap-atac") in Terra, you can import the most recent version from '),r("a",{attrs:{href:"https://dockstore.org/workflows/github.com/broadinstitute/warp/scATAC:scATAC_v1.1.0?tab=info",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dockstore"),r("OutboundLink")],1),t._v(". Additionally, there is a public "),r("a",{attrs:{href:"https://app.terra.bio/#workspaces/brain-initiative-bcdc/scATAC",target:"_blank",rel:"noopener noreferrer"}},[t._v("scATAC workspace"),r("OutboundLink")],1),t._v(" preloaded with the scATAC workflow and downsampled data.")]),t._v(" "),r("h2",{attrs:{id:"versioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[t._v("#")]),t._v(" Versioning")]),t._v(" "),r("p",[t._v("All scATAC workflow releases are documented in the "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/scATAC/scATAC.changelog.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("scATAC changelog"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"pipeline-improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-improvements"}},[t._v("#")]),t._v(" Pipeline Improvements")]),t._v(" "),r("p",[t._v("Please help us make our tools better by contacting "),r("a",{attrs:{href:"mailto:kdegatano@broadinstitute.org"}},[t._v("Kylee Degatano")]),t._v(" for pipeline-related suggestions or questions.")])])}),[],!1,null,null,null);e.default=n.exports}}]);