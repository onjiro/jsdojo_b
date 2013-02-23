AppView = (function() {
    return Backbone.View.extend({
        events: {
            "click #start-pomodoro" : "startPomodoro"
        },
        
        startPomodoro : function(){
            new CountdownView({
                model: new Pomodoro({
                    remainSeconds: 25 * 60 * 1000,
                }),
                el: $('#current_time'),
            });
        }
        
    });
})();

