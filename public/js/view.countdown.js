CountdownView = (function(){
    return Backbone.View.extend({
        template: _.template('<%= time / 1000 / 60 %>:<%= ("0" + time / 1000 % 60).substring(0, 2) %>'),
        initialize:function(){
            this.renewTimerHtml(this.model.get('remainSeconds'));
        },
        renewTimerHtml : function(currentTime){
            this.$el.text(this.template({time: currentTime}));
        }
        
        
    });
})();
