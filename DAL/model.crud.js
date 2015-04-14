var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var notification = mongoose.model('notifications', { 
    
    c_id: String,
    c_name: String,
    c_message: String,
    c_contact: String,
    c_dtime: Number,
    c_domain:String,
    c_active:Boolean
    
});

module.exports.notifications=notification;

/*module.exports.insert=function(){

    

}*/

