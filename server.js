var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/lib'));


//List of users
users=[
    {name:'ABC',emailid:'abc@gmail.com',message:'Ads from ABC'},
    {name:'PQR',emailid:'pqr@yahoo.com',message:'Ads from PQR'}];



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
    console.log("connected to "+socket.id);
  socket.on('Req', function(data){
      //*Biz logic
      users.forEach(function(u){

          if(u.emailid==data.emailid)
          {
 
    io.to(socket.id).emit('Res',u);
//           break;   
          }
          
  });
});
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
