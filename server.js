//Server module of Ad server ClairV

var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/lib'));


//Send Error message
function getErrorMessage(msg)
{
if(msg!=undefined)
{
    return data={
message:msg  };
}else{
return undefined;
}
    
  
}



//List of users
users=[
    {name:'Vodafone',emailid:'vodafone@vodafone.com',message:'Ads from Vodafone'},
    {name:'Idea',emailid:'idea@idea.com',message:'Ads from Idea'},
    {name:'Airtel',emailid:'airtel@airtel.com',message:'Ads from Airtel'}];


//Displating page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


//Initial Connection
io.on('connection', function(socket){
    
    flag=false;
    
    console.log("connected to "+socket.id);
    
  socket.on('Req', function(data){
      //*Biz logic
      users.forEach(function(u){

          if(u.emailid==data.emailid)
          {
 
    io.to(socket.id).emit('Res',u);
              flag=true;
          }
          
  });
      
      //Authentication Mechanism
      if(!flag)
      {
          
          io.to(socket.id).emit('ErrorRes',getErrorMessage('Authentication failed'));
      }
          
          
});
    
  
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
