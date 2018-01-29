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

    perl hla_clean.pl --in example.txt --out out.fasta

## Bookmarklet

Optionally you can run some similar code from your browser by using our HLA Reformatter Bookmarklet.

To use this version you simply navigate to the EMBL Immuno Polymophism website and generate content in the "plan text" output.

You can then click the Bookmarklet in your browser where it will process the page and automatically download a file in .fasta format.

### To use

1. Copy the following code to your clipboard

<code>
javascript:(function()%7Bfunction callback()%7B(function(%24)%7Bvar jQuery%3D%24%3Bfunction callback()%7B%7Dvar s%3Ddocument.createElement("script")%3Bs.src%3D"https%3A%2F%2Fgitcdn.link%2Frepo%2FLRCFS%2FHLA_reformatter%2Fmaster%2FHLA_reformatter_bookmarklet_raw_code.js"%3Bif(s.addEventListener)%7Bs.addEventListener("load"%2Ccallback%2Cfalse)%7Delse if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()%7Dvar s%3Ddocument.createElement("script")%3Bs.src%3D"https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js"%3Bif(s.addEventListener)%7Bs.addEventListener("load"%2Ccallback%2Cfalse)%7Delse if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
</code>

2. Right click on your bookmarks bar and select "Add page..." or "New Bookmark...".

3. Clear the "name" feild and enter "HLA Reformatter"

4. In the URL or Location feild remove any existing text and paste in the code you copied above, then click save.

5. Navigate to https://www.ebi.ac.uk/ipd/imgt/hla/align.html and run a sequence, making sure to select output as "Plain text - ideal for cut & paste (fast)"

6. On the results page click the "HLA Reformatter" bookmark in your browser.

After a short period of time it should download your formatted data.
