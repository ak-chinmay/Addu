var app = angular.module('ad-serv', []);



app.controller('saveCtrl',function($scope,$http){
    
    console.log('in ctrl');
$scope.saveNote={};

$scope.saveNote.submitForm=function(){
    
  console.log("--> Submitting form");
       var dataObject = {
          c_id: 'abc',
          c_name : $scope.saveNote.c_name,
          c_message:  $scope.saveNote.c_message,
          c_contact: $scope.saveNote.c_contact,
          c_dtime: $scope.saveNote.c_dtime,
          c_domain:$scope.saveNote.c_domain,
          c_active:$scope.saveNote.c_active
       };
       var saveRequest=$http.post("http://localhost:3001/notify/save", {msg:"hi there"}, {});
       saveRequest.success(function(data,status,header,config){
         console.log(data);

       });

}





});

