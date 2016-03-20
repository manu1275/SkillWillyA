define(['backbone','home','sslogin','userlogin'],function(Backbone,homeView,ssLoginView,userLoginView){
    var appRouter = Backbone.Router.extend({
       routes:{
           '': 'homePage',
           'sslogin': 'ssLoginPage',
           'userlogin': 'userLoginPage'   
       },
       homePage: function(){
            var showHome = new homeView();
       },
       ssLoginPage: function () {
            var showSSLogin = new ssLoginView();
       },  
       userLoginPage: function () {
            var showUserLogin = new userLoginView();
       }
    });
    
    return appRouter;
});