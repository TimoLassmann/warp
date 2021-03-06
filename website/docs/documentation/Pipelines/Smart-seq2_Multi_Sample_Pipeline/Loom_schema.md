# What's in the Smart-seq2 Multi Sample Pipeline Loom File?

The Loom file is an HDF5 file generated using [Loompy v.3.0.6](http://loompy.org/). The Multi Sample Loom is an aggregate of the output Loom files from the [Smart-seq2 Single Sample pipeline](../smartseq2_single_sample/). It contains global attributes, including the information about the batch (`plateid`; [Table 1](#table-1-global-attributes)). The main matrix contains the calculated TPMs from the [RSEM software](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-323) and there is an additional layer containing RSEM expected_counts (named "estimated_counts" in the Loom). The Loom additionally contains multiple metrics for both individual cells (the columns of the matrix; [Table 2](#table-2-column-attributes-cell-metrics)) and individual genes (the rows of the matrix; [Table 3](#table-3-row-attributes-gene-metrics)). The tables below document these metrics, list which tools generate them, and define them. This Loom file is the default matrix output of the Smart-seq2 Multi Sample pipeline.

:::tip NOTE
Loom files generated by the Smart-seq2 Multi Sample are different from the final Loom file distributed on the [Human Cell Atlas Data Portal](https://data.humancellatlas.org/explore/projects), which removes some of the metadata detailed in this document and contains additional metadata relating to each individual project.
:::

## Table 1. Global Attributes

The global attributes in the Loom apply to the whole file, not any specific part. There are three global attributes for the Multi Sample Smart-seq2 Loom.

| Attribute | Details |
| :-- | :-- |
| LOOM_SPEC_VERSION | String with the loom file spec version |
| CreationDate | Date Loom file was generated |
| batch_id | The plateid listed in the pipeline configuration file |
| batch_name | Optional string to describe the batch |


## Table 2. Column Attributes (Cell Metrics)

| Cell Metrics | Program |Details |
|:---|:---:|:---|
| `ACCUMULATION_LEVEL` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `ALIGNED_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `AT_DROPOUT` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `Aligned 0 time` | [HISAT2](https://ccb.jhu.edu/software/hisat2/manual.shtml) | Number and percent reads aligned 0 times |
| `Aligned 1 time` | [HISAT2](https://ccb.jhu.edu/software/hisat2/manual.shtml) | Number and percent reads aligned 1 time |
| `Aligned >1 times` | [HISAT2](https://ccb.jhu.edu/software/hisat2/manual.shtml) | Number and percent reads aligned more than 1 time |
| `BAD_CYCLES.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `CODING_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `CORRECT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `ESTIMATED_LIBRARY_SIZE` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `GC_DROPOUT` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `GC_NC_0_19` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `GC_NC_20_39` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `GC_NC_40_59` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `GC_NC_60_79` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `GC_NC_80_100` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `IGNORED_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `INCORRECT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `INTERGENIC_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `INTRONIC_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `MEAN_READ_LENGTH.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `MEDIAN_3PRIME_BIAS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `MEDIAN_5PRIME_BIAS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `MEDIAN_5PRIME_TO_3PRIME_BIAS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `MEDIAN_CV_COVERAGE` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `NUM_R1_TRANSCRIPT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `NUM_R2_TRANSCRIPT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `NUM_UNEXPLAINED_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `Overall alignment rate` | [HISAT2](https://ccb.jhu.edu/software/hisat2/manual.shtml) | Overall percent of reads that aligned |
| `PCT_ADAPTER.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_CHIMERAS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_CODING_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_CORRECT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_INTERGENIC_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_INTRONIC_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_MRNA_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_PF_READS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_PF_READS_ALIGNED.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_PF_READS_IMPROPER_PAIRS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_R1_TRANSCRIPT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_R2_TRANSCRIPT_STRAND_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_READS_ALIGNED_IN_PAIRS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_RIBOSOMAL_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_USABLE_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PCT_UTR_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PERCENT_DUPLICATION` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_ALIGNED_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_ALIGNED_BASES.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_HQ_ALIGNED_BASES.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_HQ_ALIGNED_Q20_BASES.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_HQ_ALIGNED_READS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_HQ_ERROR_RATE.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_HQ_MEDIAN_MISMATCHES.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_INDEL_RATE.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_MISMATCH_RATE.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_NOISE_READS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_READS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_READS_ALIGNED.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `PF_READS_IMPROPER_PAIRS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `READS_ALIGNED_IN_PAIRS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `READS_USED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `READ_PAIRS_EXAMINED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `READ_PAIR_DUPLICATES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `READ_PAIR_OPTICAL_DUPLICATES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `RIBOSOMAL_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `SECONDARY_OR_SUPPLEMENTARY_RDS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `STRAND_BALANCE.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `TOTAL_CLUSTERS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `TOTAL_READS.UNPAIRED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `Total reads` | [HISAT2](https://ccb.jhu.edu/software/hisat2/manual.shtml) | Total number of aligned reads |
| `UNMAPPED_READS` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `UNPAIRED_READS_EXAMINED` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `UNPAIRED_READ_DUPLICATES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `UTR_BASES` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `WINDOW_SIZE` | [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) | See [Picard](https://broadinstitute.github.io/picard/picard-metric-definitions.html) documentation |
| `alignable reads` | [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of alignable reads |
| `cell_names` | ---| The unique identifier for each cell; read from the input_id |
| `filtered reads` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of filtered reads due to too many alignments |
| `multiple mapped` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of reads aligned to multiple genes |
| `strand` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The RSEM read_type; describes if data is single- or paired-end |
| `total alignments` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The RSEM nHits; the number of total alignments |
| `total reads` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of total alignable reads |
| `unalignable reads` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of  reads unalignable |
| `uncertain reads` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of  reads aligned to multiple locations |
| `unique aligned` |  [RSEM cnt file](https://github.com/deweylab/RSEM/blob/master/cnt_file_description.txt) | The number of reads uniquely alignable to one gene |


## Table 3. Row Attributes (Gene Metrics)

| Gene Metrics                  | Program            |Details                 |
|-------------------------------|--------------------|------------------------|
|`ensembl_ids` | [GENCODE GTF](https://www.gencodegenes.org/) | The gene_id listed in the GENCODE GTF |
|`gene_names` | [GENCODE GTF](https://www.gencodegenes.org/) | The unique gene_name provided in the GENCODE GTF |
