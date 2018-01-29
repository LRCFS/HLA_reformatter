#! /usr/env perl

=head1 NAME

hla_clean.pl - clean up HLA alignments for use in other programs

=cut


use strict;
use warnings;
use Tie::IxHash;
use Getopt::Long qw(:config auto_version);
use Pod::Usage;

our $version = "0.1";
my $file;
my $out = "out.fasta";
my $VERBOSE = 1;
my $DEBUG = 0;
my $help;
my $man;

GetOptions (
   'in=s'      => \$file,
   'out=s'     => \$out,
   'verbose!'  => \$VERBOSE,
   'debug!'    => \$DEBUG,
   'man'       => \$man,
   'help|?'    => \$help,
) or pod2usage();

pod2usage(-verbose => 2) if ($man);
pod2usage(-verbose => 1) if ($help);
pod2usage(-msg => 'Please supply a valid filename.') unless ($file && -e $file);

open(my $FH, "<", $file) or die "ERROR - can't open file '$file': $!";

my %h;
tie(%h, 'Tie::IxHash');
while(<$FH>) {
  # remove line endings
  chomp;
  # skip header lines
  next if (/^ AA Codon/);
  # split columns on space (merge multiple spaces)
  my @F = split(/\s+/);
  # skip lines with no sequence info
  next if (scalar @F < 2);
  # line starts with a space so first array entry is empty, remove it
  shift(@F);
  # keep next array entry as sequence name
  my $name = shift(@F);
  #print "$name\n";
  # merge remaining sequence entries into single string thereby removing spaces
  my $seq = join("", @F);
  # create a hash of sequence entries
  if (exists($h{$name})) {
    # append sequence to existing entries
    $h{$name} = $h{$name}.$seq
  } else {
    # create new sequence if it doesn't exist.
    $h{$name} = $seq
  }
}
close($FH);

open(my $OUT, ">", $out) or die;
foreach my $k (keys %h) {
  print $OUT ">$k\n$h{$k}\n"

}
close($OUT);

printf "Found %d entries and output them to '$out'\n", scalar keys %h;

=head1 SYNOPSIS

hla_clean.pl --in <file> [--out <file>] [--verbose|--no-verbose] [--debug|--no-debug] [--man] [--help]

=head1 DESCRIPTION

The IPD-IMGT/HLA website generates alignments only available via cut and paste from the website,
which is plainly nuts. The script reformats

=head1 DEPENDENCIES

This script is dependent on the ensembl perl API and requires the path to be set in PERL5LIB e.g.
   export PERL5LIB=/opt/ensembl-api/72/ensembl/modules:$PERL5LIB

=head1 OPTIONS

=over 5

=item B<--in>

Input file.

=item B<--out>

Output filename. [default: "out.fasta"]

=item B<--verbose|--no-verbose>

Toggle verbosity. [default:none]

=item B<--debug|--no-debug>

Toggle debugging output. [default:none]

=item B<--help>

Brief help.

=item B<--man>

Full manpage of program.

=back

=head1 AUTHOR

Chris Cole <c.cole@dundee.ac.uk>

=cut
