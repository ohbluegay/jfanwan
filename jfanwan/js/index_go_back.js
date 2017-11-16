var ua = navigator.userAgent.toLowerCase();
function tips(msg) {
	layer.open({
		content: msg,
		skin: 'msg',
		time: 2 //2秒后自动关闭
	});
}
//webview定位
var subpage_style = {
	top: '0px',
	hardwareAccelerated: true
};
var topBar = 0;
$('.fixed_bar,.bar').css('height', topBar);
$('.wrap').css('top', topBar + 'px');
$('.top1').css('margin-top', topBar + 'px');
$('.top2').css('margin-top', topBar + 40 + 'px');
/**mui.init();
mui.plusReady(function() {
		var topBar = 25;
		$('.fixed_bar,.bar').css('height', topBar);
		$('.wrap').css('top', topBar + 'px');
		$('.top1').css('margin-top', topBar + 'px');
		$('.top2').css('margin-top', topBar + 40 + 'px');

		// 监听返回按键事件
		var i = false;
		plus.key.removeEventListener("backbutton", function() {});
		plus.key.addEventListener("backbutton", function() {
			if(mui.getPreviewImage && mui.getPreviewImage().isShown() == true) {
				mui.getPreviewImage().close();
			} else {
				if(i) {
					plus.runtime.quit();
					i = false;
				} else {
					mui.toast("再按一次退出");
					i = true;
					setTimeout(function() {
						i = false;
					}, 1500)
				}

			}
		})
	})**/
	/*子页面*/
function switch_child(url) {
	window.location.href = url
}

function formatLimit(time, type) {
	var formatTime;
	if(type == 0) {
		formatTime = time + '天';
	} else {
		formatTime = time + '个月';
	}
	return formatTime;
}

/*输入框内容是否可见*/
$('.eye').click(function() {
	if($(this).hasClass('icon_show')) {
		$(this).removeClass('icon_show').addClass('icon_hide').prev('input').attr('type', 'password');
	} else {
		$(this).removeClass('icon_hide').addClass('icon_show').prev('input').attr('type', 'text');
	}
})

function goHref(target){
	window.location.href = target
}
