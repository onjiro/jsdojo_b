AppView = (function() {
    return Backbone.View.extend({
        
        events: {
            "click #start-pomodoro" : "startPomodoro"
        },
        
        startPomodoro : function(){
            alert('test!');
        }
        
    });
})();

$(function(){
    
    var appview = new AppView({el:document});
    
});
