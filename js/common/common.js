define(['jquery','jqueryCookie'],function ($,undefined) {
	$(document).ajaxStart(function() {
		$('.overlay').show();
	}).ajaxStop(function() {
		$('.overlay').hide();
	});
	;
	

	$('.navs a').on('click',function () {
		$(this).next().slideToggle();
	});

	//侧边栏导航定位
	var pathname = window.location.pathname;
	$('.navs a').removeClass('active').filter('[href="'+ pathname +'"]').addClass('active').parents('ul').show();

	$('#logout').on('click',function () {
		$.post('/v6/logout',function (data) {
			if (data.code == 200) {
				location.href = '/html/home/login.html';
			}
		})
	});

	//获取本地cookie用户信息，同时做兼容处理
	var userinfo = null;
	try {
		userinfo = JSON.parse($.cookie('userinfo'));
	} catch(e) {
		userinfo = {};
	}

	//讲信息展示在侧边栏
	$('.aside .profile h4').html(userinfo.tc_name ? userinfo.tc_name : '无名氏');
	$('.aside .profile img').attr('src',userinfo.tc_avatar ? userinfo.tc_avatar : '/img/default.png');
})