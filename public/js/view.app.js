AppView = (function() {
    return Backbone.View.extend({
        events: {
            "click #start-pomodoro" : "startPomodoro"
        },
        initialize: function() {
            this.currentPomodoro = new CountdownView({
                model: new Pomodoro({
                    remainSeconds: this.model.pomounit,
                }),
                el: $('#current_time'),
            });
        },
        startPomodoro : function(){
        }
        
    });
})();

