# HLA Reformatter

The EMBL Immuno Polymorphism Database has a useful alignment tool https://www.ebi.ac.uk/ipd/imgt/hla/align.html,
but generates output in a format which isn't very portable.

Use the script herein to turn it into a more useful FASTA file.

## hla_clean.pl

This script has the following perl library pre-requisits:

    Getopt::Long
    Pod::Usage
    Tie::IxHash

The first should be available in a standard installation of perl and Tie::IxHash can
be found on CPAN.

Get help with running the script by:

    hla_clean.pl --man

## Quickstart

Run the command as such:

    perl hla_clean.pl --in hla_align.txt --out out.fasta


