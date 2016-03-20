requirejs.config({
	paths:{
		jquery:'lib/jquery-2.2.1.min',
		underscore:'lib/underscore-min',
        backbone:'lib/backbone-min',
        handlebar:'lib/handlebars-v4.0.5',
		router: 'app/routers/appRouter',
        home: 'app/views/homeView',
        sslogin: 'app/views/ssLoginView',
        userlogin: 'app/views/userLoginView'
	},
	shim:{
		"backbone":{
			dep:['jquery','underscore'],
            exports: 'Backbone'
		}
	}
});

require(['backbone','router'],function(Backbone,Router){	
    var router = new Router();         
    Backbone.history.start();
}); 