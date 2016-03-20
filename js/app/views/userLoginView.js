define(['jquery','backbone','handlebar'],function($,Backbone,Handlebar){
    var userLoginView = Backbone.View.extend({
        el: "#master_container",
        initialize: function(){
            this.render();
        },
        /*events: function(){
           'click #skillywillyhome' : 'navigateTo'
        },*/
        render: function(){
            var tmpl_string;
            var self = this;
            
            $.ajax({
                url: "template/userlogin.tmpl",
                method: 'GET',
                async: false,
                success: function(data) {
                    tmpl_string = data;
                    
                    var template = Handlebar.compile(tmpl_string);
                    self.$el.html(template);
                }
            });
        },
        /*navigateTo: function(){
            
        }*/
    });
    
    return userLoginView;
});