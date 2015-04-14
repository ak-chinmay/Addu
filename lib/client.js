//Client module of AdServer ClairV

 var html='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">';

    var div = document.createElement('div');
    div.innerHTML=html;
    
document.body.appendChild(div.children[0]);



var socket=io.connect('http://localhost:3000');

//Form submit event
     
$('document').ready(function(){
    
    
    if(key!=undefined)
    {
    socket.emit('Req', {emailid:key.emailid});
    }else{
        data={
            message:'Key is not valid'
        };
        displayError(data);
    }
});



//Receive Error from server
socket.on('ErrorRes',function(data){
          
    displayError(data);      
 });




//Error handling
displayError=function(data){

$.notify({
        // options
        title: 'Error',
        message: data.message 
    },{
        // settings

        placement: {
            from: "bottom",
            align: "right"
        },          
        allow_dismiss: true,
        z_index: 1031,
        icon_type: 'class',
        mouse_over: null,
        timer: 1000,
        offset: 20,
        spacing: 10,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp' 
        },
        type: 'danger',
        delay: 5000,



        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><strong>{1}</strong></span> &nbsp;|&nbsp; ' +
        '<span data-notify="message">{2}</span>' +
        '</div>' 
    });







}

//*server resposne
socket.on('Res', function(data){

    console.log("Hello "+data.name+" your message is "+data.message);

    $.notify({
        // options
        title: data.name,
        message: data.message 
    },{
        // settings

        placement: {
            from: "bottom",
            align: "right"
        },          
        allow_dismiss: true,
        z_index: 1031,
        icon_type: 'class',
        mouse_over: null,
        timer: 1000,
        offset: 20,
        spacing: 10,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp' 
        },
        type: 'info',
        delay: 5000,



        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><strong>{1}</strong></span> &nbsp;|&nbsp; ' +
        '<span data-notify="message">{2}</span>' +
        '</div>' 
    });

 



});

