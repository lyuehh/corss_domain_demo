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


    // resource
    window.addEventListener('load', function() {
        var resources = window.performance.getEntriesByType('resource');
        var json = JSON.stringify(resources);

        $.ajax({
            url: 'http://localhost:1234/postjson',
            xhrFields: {
                withCredentials: true,
                'Access-Control-Request-Method': 'POST'
            },
            type: 'POST',
            data: json,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(ret) {
                console.log( '跨域请求..' )
                console.log( ret );
            }
        })

        // console.log( resources )
        // console.log(JSON.stringify(resources, null ,2))
        var list = '';
        for(var obj in resources) {
            for(var properties in resources[obj]) {
                list += '<li>' + properties + ': <span class="value">' + resources[obj][properties] + '</span></li>';
            }
            list += '<br />';
            // console.log( list )
            // document.getElementById(resources[obj].initiatorType + '-list').innerHTML = list;
        }
        $('.resource').html(list);
    });
});
