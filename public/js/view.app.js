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

$(function(){
    
    var appview = new AppView({el:document});
    
});
