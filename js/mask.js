var bg = "<div class='bg'><div>";
$('body').append(bg);
var height = window.screen.availHeight
$('.bg').css('height', height);
var mask = {
	show: function() {
		$('.bg').show();
		document.documentElement.style.overflow = 'hidden';
	},
	hide: function() {
		$('.bg').hide();
		document.documentElement.style.overflow = 'auto';
	}
}
jQuery.fn.extend({
  slideRightShow: function() {
    return this.each(function() {
        $(this).show('slide', {direction: 'right'}, 1000);
    });
  },
  slideLeftHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, 1000);
    });
  },
  slideRightHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, 1000);
    });
  },
  slideLeftShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, 1000);
    });
  }
});