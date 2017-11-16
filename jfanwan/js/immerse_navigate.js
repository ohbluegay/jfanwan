function plusReady(){
	plus.navigator.setStatusBarBackground("#FFC000");
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener("plusready".plusReady,false);
}
