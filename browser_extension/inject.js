console.log("HLA Reformatter Inject File Loaded v3");

$("<div id='hlaReformatterReady'><h3>HLA FASTA Reformatter Extentsion</h3><p>This page has now fully loaded. Click the button below to download the data in a FASTA format.</p><p><button id='btnInjectedHlaReformatter'>Download FASTA Data</button><div id='loadingText' style='display: none'>FASTA file being generated. Please wait...</div><div class='loader' style='display: none'></div></p></div>'").insertAfter( "#breadcrumb" );


$('#btnInjectedHlaReformatter').click(function(){
	$.ajax({
		beforeSend: function(result){
			$("#loadingText").css("display", "inline-block");
			$(".loader").css("display", "inline-block");
			$("#btnInjectedHlaReformatter").css("display", "none");
		},
		success: function(result){
			hlaCleanMain();
		},
		complete: function(result){
			$("#loadingText").css("display", "none");
			$(".loader").css("display", "none");
			$("#btnInjectedHlaReformatter").css("display", "block");
		}
	});
});