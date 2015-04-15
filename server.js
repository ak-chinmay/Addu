    //Server module of Ad server ClairV

    var express=require('express');
    var app = express();
    var crud=require('./DAL/model.crud.js');
    var notifications=crud.notifications;

    var http = require('http').Server(app);
    var io = require('socket.io')(http);
    app.use('/repos',express.static(__dirname + '/lib'));
    app.use('/clientUI',express.static(__dirname + '/client'));



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
        {name:'Vodafone',emailid:'vodafone@vodafone.com',message:'Vodafone test ad Message'},
        {name:'Idea',emailid:'idea@idea.com',message:'Ads from Idea'},
        {name:'Airtel',emailid:'airtel@airtel.com',message:'Airtel test ad Message'}];


    app.get('/', function(req, res){

    res.sendFile(__dirname + '/admin.html');

    });


    //Inserting into DB
    app.post('/notify/save', function(req, res){
        console.log(req.body);
     var note=new crud.notifications(req.data);
        note.save(function(err){
        if(err)
        {
        console.log('Error: '+err);
        }
        });

   res.end(req+'');
    //  res.sendFile(__dirname + '/index.html');
    });






    //Initial Connection
    io.on('connection', function(socket,url){



        flag=false;
        console.log("connected to "+socket.id+" with url ");

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
          if(!flag){
              io.to(socket.id).emit('ErrorRes',getErrorMessage('Authentication failed'));
          }


    });



    });

    http.listen(3001, function(){
      console.log('listening on *:3001');
    });
