$(function() {

    // 不跨域
    $.get('/get', function(ret, status, jqXhr) {
        console.log('不跨域..');
        console.log(ret);
    });

    // cors 跨域
    $.ajax({
        url: 'http://localhost:1234/cors',
        xhrFields: {
            withCredentials: true,
            'Access-Control-Request-Method': 'GET'
        },
        success: function(ret) {
            console.log( '跨域请求..' )
            console.log( ret );
        }
    });

    // img 发送跨域请求
    // 只能发送get请求，不需要处理返回结果
    var img =  new Image;
    img.onload = function() {
        console.log('img loaded');
    };
    img.src = 'http://localhost:1234/img?a=1&b=2';

    // jsonp 跨域
    $.ajax({
        url: 'http://localhost:1234/jsonp',
        dataType: 'jsonp',
        jsonpCallback: 'cb',
        success: function(ret) {
            console.log('jsonp请求')
            console.log( ret );
        }
    });
});
