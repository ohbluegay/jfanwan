var loadArr = [];
loadArr.push("<div class='load'>")
loadArr.push("<div class='spinner'>");
loadArr.push("<div class='rect1'></div>");
loadArr.push("<div class='rect2'></div>");
loadArr.push("<div class='rect3'></div>");
loadArr.push("<div class='rect4'></div>");
loadArr.push("<div class='rect5'></div>");
loadArr.push("</div>");
loadArr.push("</div>");
loadArr = loadArr.join("");
$('body').append(loadArr);
var height = document.documentElement.clientHeight;
var b_height = document.body.offsetHeight;
var load_height;
if(height > b_height){
	load_height = height;
}else{
	load_height = b_height;
}
$('.load').css('height',load_height-20);
function loadjscssfile(filename,filetype){

    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){
    
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
   if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    
}
loadjscssfile("../css/loading.css","css");
var load = {
	locked : function(){
		$('.load').css('display','block');
	},
	unlocked : function(){
		$('.load').css('display','none');
	}
}
