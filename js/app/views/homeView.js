define(['jquery','backbone','handlebar'],function($,Backbone,Handlebar){
    var homeView = Backbone.View.extend({
        el: "#master_container",
        initialize: function(){
            this.render();
        },
        events:{
           'click #skillywillyhome' : 'navigateTo'
        },
        render: function(){
            var tmpl_string;
            var self = this;
            
            $.ajax({
                url: "template/home.tmpl",
                method: 'GET',
                async: false,
                success: function(data) {
                    tmpl_string = data;
                    
                    //console.log(data);
                
                    var template = Handlebar.compile(tmpl_string);
                    self.$el.html(template);
                }
            });
        },
        navigateTo: function(){ 
        }
    });
    
    return homeView;
});