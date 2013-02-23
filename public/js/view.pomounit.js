PomoUnit = (function() {
    return Backbone.View.extend({
        events: {
            "click #save_pomounit" : "savePomoUnit"
        },
        
        savePomoUnit : function(){
            this.model.renewPomoUnit($('#input_pomounit').val());
        }
        
    });
})();
