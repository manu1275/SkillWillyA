define(['backbone','handlebar'],function(Backbone,Handlebar){
    var ssLoginView = Backbone.View.extend({
        el: "#master_container",
        initialize: function(){
            this.render();
        },
        events:{
           'click #login_btn' : 'navigateTo'
        },
        render: function(){
            var tmpl_string;
            var self = this;
            
            $.ajax({
                url: "template/sslogin.tmpl",
                method: 'GET',
                async: false,
                success: function(data) {
                    tmpl_string = data;
                    
                    var template = Handlebar.compile(tmpl_string);
                    self.$el.html(template);
                }
            });
        },
        navigateTo: function(){
        }
    });
    
    return ssLoginView;
});