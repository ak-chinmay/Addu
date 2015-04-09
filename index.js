var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/lib'));


users=[
    {name:'ABC',emailid:'abc@gmail.com'},
    {name:'PQR',emailid:'pqr@yahoo.com'}];


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
    console.log("connected to "+socket.id);
    
    
  socket.on('Req', function(data){
                   
      users.forEach(function(u){
               
               if(u.emailid==data.emailid)
          {
            
      console.log("Hello "+u.name+" your message is "+data.message);
      resp={name:''+u.name,message:''+data.message};
      io.to(socket.id).emit('Resp', resp);
      
      
          }
      
      
  });
});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
