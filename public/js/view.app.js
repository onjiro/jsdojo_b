AppView = (function() {
    return Backbone.View.extend({
        events: {
            "click #start-pomodoro" : "startPomodoro"
        },
        
        startPomodoro : function(){
            new CountdownView({
                model: new Pomodoro({
                    remainSeconds: this.model.pomounit,
                }),
                el: $('#current_time'),
            });
        }
        
    });
})();

