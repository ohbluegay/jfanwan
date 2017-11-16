



//webview定位
var ua = navigator.userAgent.toLowerCase();
var subpage_style = {
	top: '0px',
	hardwareAccelerated: true
};
/*子页面*/
function switch_child(url) {
	window.location.href = url
}
function goHref(url){
	window.location.href = url
}
/**mui.init();
mui.plusReady(function() {
	var topBar = 25;
	$('.fixed_bar,.bar').css('height', topBar);
	$('.wrap').css('top', topBar + 'px');
	$('.top1').css('margin-top', topBar + 'px');
	$('.top2').css('margin-top', topBar + 40 + 'px');
	plus.key.removeEventListener("backbutton", function() {});
	plus.key.addEventListener("backbutton", function() {
		window.history.go(-1)
	})
})**/
var topBar = 0;
$('.fixed_bar,.bar').css('height', topBar);
$('.wrap').css('top', topBar + 'px');
$('.top1').css('margin-top', topBar + 'px');
$('.top2').css('margin-top', topBar + 40 + 'px');
$('.back').click(function() {
	window.history.go(-1)
})

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
/*判断是否有ips账号*/
function ifIps() {
	$.ajax({
		type: "post",
		url: "http://www.jfwlicai.com/mobile/isSetIpsAcct.php",
		data: { 'user_id': localStorage.getItem('user_id') },
		async: true,
		dataType: 'json',
		success: function(data) {
			toStart(data.status)
		},
		error: function(e) {
			mui.toast('网络错误')
		}
	});
}
/*判断用户的ips状态*/
function toStart(status) {
	if(status == -1) {
		mui.toast('没有该用户')
		setTimeout(function(){
			window.history.go(-1)
		},1500)
	}
	if(status == 0) {
		layer.open({
			content: '您未在环迅申请过资金托管帐户，是否申请？',
			btn: ['申请', '取消'],
			yes: function(index) {
				layer.close(index);
				$.ajax({
					type: "post",
					url: "http://www.jfwlicai.com/mobile/ipsNewAcctCreate.php",
					data: {
						'user_id': localStorage.getItem('user_id')
					},
					async: true,
					dataType: 'json',
					success: function(data) {
						if(data.status == 1) {
							var pt = {
								'type':'unRegister',
								"data": data.data
							};
							/*在这里调用安卓或iOS的方法去注册*/							
							if(/iphone|ipad|ipod/.test(ua)) {
							   console.log(data.data)
							   JFWModel.registerWithParameters(JSON.stringify(data.data))
							}
							if(/android/.test(ua)) {
							   console.log(pt)
							   window.OOXX.postMessage(JSON.stringify(pt));
							}
						} else {
							mui.toast(data.msg)
						}
					},
					error: function(e) {
						mui.toast('网络错误')
					}
				});
			},
			no: function(){
				window.history.go(-1)
			}
		});
	}
	if(status == 1) {

	}
}
/*ips账户登录*/
function ipsLogin() {
	$.ajax({
		type: 'post',
		url: 'https://api.jfwlicai.com/mobile/ipsLogin.php',
		data: {
			'user_id': localStorage.getItem('user_id')
		},
		dataType: 'json',
		success: function(data) {
			if(data.status == 1) {
				var result = data.data;
				$('#ipsLogin').attr('action',result.action);
				$('#ips_userName').val(result.userName);
				$('#ips_merchantId').val(result.merchantId)
				layer.open({
					content: '您未在环迅绑定银行卡，是否前往绑定？',
					btn: ['前往', '取消'],
					yes: function(index) {
					    layer.close(index);
					    $('#ipsLogin').submit();
					}
				});
			} else {
				mui.toast(data.msg)
			}
		},
		error: function(e) {
			mui.toast('网络错误')
		}
	})
}