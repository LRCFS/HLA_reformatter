console.log("HLA Reformatter File Loaded");

$("<div id='hlaReformatterReady'><h3>HLA FASTA Reformatter Extension</h3><p>This page has now fully loaded. Click the button below to download the data in a FASTA format.</p><p><button id='btnInjectedHlaReformatter'>Download FASTA Data</button><div id='loadingText' style='display: none'>FASTA file being generated. Please wait...</div><div class='loader' style='display: none'></div></p></div>'").insertAfter("#breadcrumb");

$('#btnInjectedHlaReformatter').click(function(){
	$.ajax({
		beforeSend: function(result){
			$("#loadingText").css("display", "inline-block");
			$(".loader").css("display", "inline-block");
			$("#btnInjectedHlaReformatter").css("display", "none");
		},
		success: function(result){
			hlaReformatterMain();
		},
		complete: function(result){
			$("#loadingText").css("display", "none");
			$(".loader").css("display", "none");
			$("#btnInjectedHlaReformatter").css("display", "block");
		}
	});
});

function hlaReformatterMain() {
	//Get the code from the output on https://www.ebi.ac.uk/cgi-bin/ipd/imgt/hla/align.cgi
	var fullCode = $(".normal").html();
	if(fullCode == null){
		alert("Cannot find output from alignment on page.\n\nPlease ensure you are using the EMBL-EBI IPD-IMGT/HLA Sequence Alignment Tool found at:\n\nhttps://www.ebi.ac.uk/ipd/imgt/hla/align.html")
		return;
	}
	//Remove spaces and hyperlinks
	var codeNoSpaces = fullCode.replace(/&nbsp;|<\/?a(?:(?= )[^>]*)?>/gmi, " ");
	//put lines from code into an array
	var lines = codeNoSpaces.split("<br>");
	var hashTable = new Object();

	//for each line
	$.each(lines, function(n, elem) {
	  //remove white space
	  var line = $.trim(elem);

	  //If the line isn't a blank "AA Codon" header
	  if(line.indexOf("AA Codon") === -1){
		//split on spaces between colums (merging multiple space characters into one)
		var lineArray = line.split((/\s+/));
		//Check we're not dealing with an empty array
		if(lineArray.length > 2){
			//Pop off the lineName from the array
			var lineName = lineArray.shift();
			//Take the rest of the array and merge it into one variable
			var lineSeq = lineArray.join("");

			//Adding to hashtable. We'll check if the item exists
			if(hashTable.hasOwnProperty(lineName))
			{
				//If it does, then add it on
				hashTable[lineName] = hashTable[lineName] + lineSeq;
				//console.log("Adding to: '" + lineName + "' seq now: '" + hashTable[lineName] +"'")
			}
			else
			{
				//If it doesn't add as new item
				hashTable[lineName] = lineSeq;
				//console.log("New: '" + lineName + "' seq: '" + lineSeq +"'")
			}
		}
	  }
	});

	//Put everything together in appropriate format for output .fasta file
	var output = "";
	for (var k in hashTable) {
	    if (hashTable.hasOwnProperty(k)) {
	       output = output + ">" + k + "\n" + hashTable[k] + "\n";
	    }
	}

	createFileAndDownload(output);
}

//Helper function to take file contents and download in browser - file named after time and date (e.g. 01-01-2018_09-00-11.fasta)
function createFileAndDownload(fileContent) {
	//Create empty element for download to initate
	var element = document.createElement('a');

	//Create filename based on date and time
	var currentdate = new Date(); 
	var filename = ((currentdate.getDate() < 10)?"0":"") + currentdate.getDate() + "-" + (((currentdate.getMonth()+1) < 10)?"0":"") + (currentdate.getMonth()+1) + "-"  + currentdate.getFullYear() + "_" + ((currentdate.getHours() < 10)?"0":"") + currentdate.getHours() + "-" + ((currentdate.getMinutes() < 10)?"0":"") + currentdate.getMinutes() + "-" + ((currentdate.getSeconds() < 10)?"0":"") + currentdate.getSeconds();
	filename = filename + ".fasta";		

	//Set download attributes for file. Using blob object
	element.setAttribute('value', "Download");
	element.setAttribute('href', URL.createObjectURL(new Blob([fileContent], {type: "application/octet-stream"})));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	//click download link
	element.click();

	document.body.removeChild(element);
}
