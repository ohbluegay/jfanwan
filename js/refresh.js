var myScroll;
function loaded() {
	pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    //pullUpEl = document.getElementById('pullUp');
    //pullUpOffset = pullUpEl.offsetHeight;

	var onceFlag = false;
	var direct = 0;
	var downFlag = false;
    myScroll = new iScroll('wrapper', {
        useTransition: true,
        fadeScrollbar: true,
        fixedScrollbar: true,
        vScrollbar: false,
        topOffset: pullDownOffset,
        hScroll: false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = "<span class='pullDownIcon1'></span>下拉刷新";
            } 
            /*else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
            }*/
        },
        onScrollStart: function () {
            direct = this.y;
        },
        onScrollMove: function () {
        	downFlag = (this.y - direct) > 50;
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = "<span class='pullDownIcon1'></span>下拉刷新";
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = "<span class='pullDownIcon1'></span>下拉刷新";
                this.minScrollY = -pullDownOffset;
            } 
//          else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
//              pullUpEl.className = 'flip';
//              if (isDisplayPullUp()) {
//                  pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
//              }
//              this.maxScrollY = this.maxScrollY;
//          } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip') ) {
//              pullUpEl.className = '';
//              if (isDisplayPullUp()) {
//                  pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
//              }
//              this.maxScrollY = pullUpOffset;
//          }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
            	pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = "<span class='pullDownIcon'></span>下拉刷新";
                pullDownAction();
            } 
            /*else if (pullUpEl.className.match('flip') && !downFlag) {
            	pullUpEl.className = 'loading';
            	pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
            	pullUpAction();
            }*/
        }
    });

    setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
    document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
};
function isDisplayPullUp() {
    // 屏幕高度 - 滚动Div面高度 - 上拉Div在滚动Div位置
    return ($(window).height() - $("#wrapper").offset().top - $("#pullUp").position().top) < 0;
}

