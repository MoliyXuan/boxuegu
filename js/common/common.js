define(['jquery'],function ($) {
	$('.navs a').on('click',function () {
		$(this).next().slideToggle();
	});

	$.ajax({
		url: '/v6/login',
		type: 'post',
		data: {
			tc_name:'hhhhh',
			tc_pass:'ooooo'
		},
		success: function () {
			console.log('成了');
		},
		error: function () {
			console.log('败了');
		}
	})
})