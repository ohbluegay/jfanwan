$('.nav_bar').click(function() {
	var target = $(this).attr('url');
	if(!target)
	  return
	window.location.href = target;
})