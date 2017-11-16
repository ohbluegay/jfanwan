var logoin,logoOut,stayTime;
window.onload = function(){
	logoin=new Date();  
}
window.onunload = function(){
	logoOut=new Date(); 
	stayTime = (logoin - logoOut)/1000;
}
var reUrl = document.referrer;