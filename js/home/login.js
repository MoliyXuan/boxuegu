define(['jquery','jqueryCookie','common','nprogress'], function($,undefined,undefined,nprogress) {
	nprogress.done();
	//获取用户头像信息
	var userinfo = null;
	try {
		userinfo = JSON.parse($.cookie('userinfo'));
	} catch(e) {
		userinfo = {};
	}
	$('.login .avatar img').attr('src', userinfo.tc_avatar ? userinfo.tc_avatar : '/img/default.png');


	$('#form-login').on('submit',function () {
		$.ajax({
			url: '/v6/login',
			type: 'post',
			data: $(this).serialize(),
			success: function (data) {
				if (data.code == 200) {
					$.cookie('userinfo',JSON.stringify(data.result),{path:'/'})
					location.href = '/';
				}
			}
		})
		return false;
	})
});
