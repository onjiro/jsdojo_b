AppModel = (function() {
    return Backbone.Model.extend({
        pomounit:25*60*1000,
        
        renewPomoUnit: function(time){
            if(time > 0){
                this.pomounit = time * 60 * 1000;
            } else {
                alert('時間の単位を正しく入力して下さい。');
            }
        }
        
    });
})();


$(function(){
    
    var appmodel = new AppModel({el:document});
    
});

