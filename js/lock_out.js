function loadjscssfile(filename, filetype) {

	if(filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if(filetype == "css") {

		var fileref = document.createElement('link');
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if(typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}

}
//loadjscssfile("do.js", "js");
loadjscssfile("css/loading.css", "css");
var loadArr = [];
loadArr.push("<div id='loading'>");
loadArr.push("<div id='loading-center'>");
loadArr.push("<div id='loading-center-absolute'>");
loadArr.push("<div class='object' id='object_one'></div>");
loadArr.push("<div class='object' id='object_two'></div>");
loadArr.push("<div class='object' id='object_three'></div>");
loadArr.push("<div class='object' id='object_four'></div>");
loadArr.push("</div>");
loadArr.push("</div>");
loadArr.push("</div>");
function lockPage(){
	$('body').append(loadArr.join(""));
	$("#loading").fadeIn();
}
function unlockPage(){
	$("#loading").fadeOut(500);
	$("#loading").remove();
}
