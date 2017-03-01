requirejs.config({
	baseUrl: '/',
	paths: {
		jquery: 'lib/jquery/jquery',
		jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
		bootstrap: 'lib/bootstrap/js/bootstrap',
		nprogress: 'lib/nprogress/nprogress',
		template: 'lib/artTemplate-3.0.1/template',

		index: 'js/index',
		userList: 'js/user/list',
		userProfile: 'js/user/profile',
		teacherAdd: 'js/teacher/add',
		teacherList: 'js/teacher/list',
		login: 'js/home/login',
		repass: 'js/home/repass',
		settings: 'js/home/settings',
		courseAdd: 'js/course/add',
		courseAddStep1: 'js/course/add_step1',
		courseAddStep2: 'js/course/add_step2',
		courseAddStep3: 'js/course/add_step3',
		courseCategory: 'js/course/category',
		courseCategoryAdd: 'js/course/category_add',
		courseList: 'js/course/list',
		courseTopic: 'js/course/topic',
		common: 'js/common/common'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	}
});
require(['nprogress'],function (nprogress) {
	nprogress.start();
	
});
require(['jquery','bootstrap']);

(function (window) {
	var pathname = window.location.pathname;


	require(['jquery','jqueryCookie'],function ($,undefined) {
		var sessID = $.cookie('PHPSESSID');

		//登录状态前端校验
		if (pathname == '/html/home/login.html' && sessID) {
			location.href = '/';
		}else if (pathname != '/html/home/login.html' && !sessID) {
			location.href = '/html/home/login.html';
		}

		//如果页面没有跳转，就加载对应的js
		switch (pathname) {
			case '/':
				require(['index']);
				break;
			case '/html/user/list.html':
				require(['userList']);
				break;
			case '/html/user/profile.html':
				require(['userProfile']);
				break;
			case '/html/teacher/add.html':
				require(['teacherAdd']);
				break;
			case '/html/teacher/list.html':
				require(['teacherList']);
				break;
			case '/html/home/login.html':
				require(['login']);
				break;
			case '/html/home/repass.html':
				require(['repass']);
				break;
			case '/html/home/settings.html':
				require(['settings']);
				break;
			case '/html/course/add.html':
				require(['courseAdd']);
				break;
			case '/html/course/add_step1.html':
				require(['courseAddStep1']);
				break;
			case '/html/course/add_step2.html':
				require(['courseAddStep2']);
				break;
			case '/html/course/add_step3.html':
				require(['courseAddStep3']);
				break;
			case '/html/course/category.html':
				require(['courseCategory']);
				break;
			case '/html/course/category_add.html':
				require(['courseCategoryAdd']);
				break;
			case '/html/course/list.html':
				require(['courseList']);
				break;
			case '/html/course/topic.html':
				require(['courseTopic']);
				break;
		}
	})

})(window);