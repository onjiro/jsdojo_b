CountdownView = (function(){
    return Backbone.View.extend({
        
        initialize:function(){
            this.renewTimerHtml('25:00');
        },
        
       // timerHtml : '<span id="current_time">00:11</span>',
        renewTimerHtml : function(currentTime){
            this.$el.empty();
            this.$el.append('<span id="current_time">'+currentTime+'</span>');
        }
        
        
    });
})();
