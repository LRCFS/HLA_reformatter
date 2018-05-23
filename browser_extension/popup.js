'use strict';

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
	//Correct page
	if(url == 'https://www.ebi.ac.uk/ipd/imgt/hla/align.html')
	{
		$("#insturctionsWrongSite").hide();
		$("#instructionsOutputPage").hide();
	}
	//Output page
	else if(url == 'https://www.ebi.ac.uk/cgi-bin/ipd/imgt/hla/align.cgi')
	{
		$("#insturctionsWrongSite").hide();
		$("#insturctionsCorrectSite").hide();
	}
	//Wrong page
	else
	{
		$("#insturctionsCorrectSite").hide();
		$("#instructionsOutputPage").hide();
	}
});