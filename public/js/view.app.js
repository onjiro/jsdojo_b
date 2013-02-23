AppView = (function() {
    return Backbone.View.extend({
        events: {
            "click #start-pomodoro" : "startPomodoro"
        },
        
        startPomodoro : function(){
            alert('test0');
            new Pomodoro({remainSeconds:25 * 60 * 1000});
            alert('test01');
            new CountdownView({el:$('#time')});
            alert('test02');
        }
        
    });
})();


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



$(function(){
    
    var appview = new AppView({el:document});
    
});
