Pomodoro = (function() {
    return Backbone.Model.extend({
        dufaults:{
            status:'notstarted',
            remainSeconds: 25 * 60 * 1000,
        },
        start: function() {
            this.trigger('start', {
                model: this,
            });
            this.set('status', 'started');
        },
    });
})();
