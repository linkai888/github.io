var num=parseInt(10*Math.random());
var mycode=6947771;
if(num<1){
    mycode=6947771;
}
var s = document.referrer;
var str = window.location.href;
function browserRedirect() {
    var mobileAgent = ["iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb","ucbrowser","skyfire"];
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = false;
    for (var i = 0; i < mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i]) != -1) {
            isMobile = true;
            break;
        }
    }
    if (isMobile) {
        setTimeout(function () {
            window.location.href = './m/index.html'; //手机端
        },20);
    }
}
browserRedirect();