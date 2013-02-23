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
            this.renewTimerHtml();
        },
        
        timerHtml : '<span id="current_time">00:11</span>',
        renewTimerHtml : function(){
            this.$el.empty();
            this.$el.append(this.timerHtml);
        }
        
        
    });
})();



$(function(){
    
    var appview = new AppView({el:document});
    
});
