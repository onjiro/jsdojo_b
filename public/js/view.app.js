AppView = (function() {
    return Backbone.View.extend({
        events: {
            "click #start-pomodoro" : "startPomodoro"
        },
        
        startPomodoro : function(){
            new Pomodoro({remainSeconds:25 * 60 * 1000});
            new CountdownView({el:$('#time')});
        }
        
    });
})();

$(function(){
    
    var appview = new AppView({el:document});
    
});
