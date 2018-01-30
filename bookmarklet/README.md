## Bookmarklet

You can run some similar code to the perl script from your browser by using our HLA Reformatter Bookmarklet.

To use this version you simply navigate to the EMBL Immuno Polymophism website and generate content in the "plan text" output.

You can then click the Bookmarklet in your browser where it will process the page and automatically download a file in .fasta format.

### To use

1. Copy the following code to your clipboard

<code>
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bfunction%20callback()%7Bmain()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcdn.rawgit.com%2FLRCFS%2FHLA_reformatter%2Fmaster%2Fbookmarklet%2Fhla_clean.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
</code>

2. Right click on your bookmarks bar and select "Add page..." or "New Bookmark...".

3. Clear the "name" feild and enter "HLA Reformatter"

4. In the URL or Location feild remove any existing text and paste in the code you copied above, then click save.

5. Navigate to https://www.ebi.ac.uk/ipd/imgt/hla/align.html and run a sequence, making sure to select output as "Plain text - ideal for cut & paste (fast)"

6. On the results page click the "HLA Reformatter" bookmark in your browser.

After a short period of time it should download your formatted data.

### How it works

The above JS code that you're adding to your bookmarks effectively does three things:

1. Loads jQuery
2. Loads the hla_clean.js file from github (https://github.com/LRCFS/HLA_reformatter/blob/master/bookmarklet/hla_clean.js)
3. Runs the main() function in hla_clean.js

The hla_clean.js does all the work, scraping the page for data and reformatting it into a usable .fasta file without any wrapped data.

To see it working, or check for errors, open the debug console while running the script from your browser.
