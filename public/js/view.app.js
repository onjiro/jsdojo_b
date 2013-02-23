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
        
        changeButtonLabel : function(){
            $('#start-pomodoro').html('中断！');
        },
        startPomodoro : function(){
            this.changeButtonLabel();
        }
        
    });
})();

