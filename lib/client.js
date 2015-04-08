var socket = io();

//Form submit event
$('document').ready(function(){
    socket.emit('Req', {emailid:'abc@gmail.com'});
 /*   $('#m').val('');
    return false;*/
});





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
            from: "top",
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
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>' 
    });





});

