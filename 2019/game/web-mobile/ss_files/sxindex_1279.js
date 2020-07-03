//点击外链询问离开
var cklink = 1;
function extLink(act){
    if( act == false ){
        cklink = 0;
    }else{
        cklink = 1;
    }
}

$(document).on('click','a',function(){
    if( cklink == 0 ) return;
    if ( $(this).hasClass('ncolink') ) return;
    var o = $(this);
    var href = o.attr('href');
    var host = getHost(href);
    var ckhost = host.indexOf('www.shanxi.gov.cn');
    var ckhost2 = host.indexOf('www.shanxigov.cn');
    var ckhost3 = host.indexOf('www.gov.cn');
    var ckhost4 = host.indexOf('szxx.shanxi.gov.cn');
    var ckhost5 = host.indexOf('www.sxzwfw.gov.cn');
    var ckhost6 = host.indexOf('prec.sxzwfw.gov.cn');

    if( ckhost >= 0 || ckhost2 >= 0 || ckhost3>=0 || ckhost4>=0 || ckhost5>=0 || ckhost6>=0) ckhost = 1;

    if( host != 'null' && ckhost <= 0 && typeof(href)!='undefined' && o.data('ask')!='1'){
        o.removeAttr('href');
        var jx = true;
        var w = '480px';
        var h = '170px';
        if(window.screen.width < 768) { w = '90%'; h = '170px';}
        var cf = layer.confirm('<div style="margin-top:30px; font-size:16px;">您访问的链接即将离开“山西省人民政府门户网站” 是否继续？</div>', {
            btn:[ '继续访问', '放弃' ],
            title: false,
            shade: 0.7,
            area: [w, h],
            cancel: function(index){ o.attr('href',href); }
        }, function() {
            o.attr('href',href);
            o.attr('target','_blank');
            o.data('ask','1');
            layer.close(cf);
            o[0].click();
        }, function() {
            o.attr('href',href);
        });
    }
});
//截取URL域名部份
var getHost = function(url) {
    var host = "null";
    if (typeof url == "undefined" || null == url) url = window.location.href;
    var regex = /.*\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if (typeof match != "undefined" && null != match) host = match[1];
    return host;
};

function closewindow(){  
    if (navigator.userAgent.indexOf("Firefox")!=-1||navigator.userAgent.indexOf("Chrome")!=-1) {  
        window.location.href="about:blank";  
        window.close();  
    } else {  
        window.opener = null;  
        window.open("", "_self");  
        window.close();  
    }  
}  
//(function(){
//	var host={"hostname":location.host,"right":"gov.cn","publicip2":"218.26.228.190","chinesedomain":"山西省政府.政务","chinesedomain2":"山西省人民政府.政务"};
//	if(host.hostname.indexOf(host.right)>-1||host.hostname.indexOf(host.publicip2)>-1||host.hostname.indexOf(host.chinesedomain)>-1||host.hostname.indexOf(host.chinesedomain2)>-1){
//		//todo
//	}else{
//		alert("您打开的网站非官方网站");
//		closewindow();
//	}
//})

();