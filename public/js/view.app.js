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
            this.currentPomodoro.on('change', function(){
                if(this.currentPomodoro.get('status') === 'notstarted'){
                    $('#start-pomodoro').html('スタート！');
                } else if (this.currentPomodoro.get('status') === 'started'){
                    $('#start-pomodoro').html('中断！');
                }
            }, this);
        },
        
        changeButtonLabel : function(){
            
        },
        startPomodoro : function(){
            
            this.changeButtonLabel();
        }
        
    });
})();

