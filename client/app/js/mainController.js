var app = angular.module('ad_serv', []);


app.controller('saveCtrl',['$scope','$http',function($scope,$http){
$scope.saveNote={};
  console.log('Client: '+$scope.saveNote.c_name);

$scope.saveNote.submitForm=function()
{
  console.log("--> Submitting form");
       var dataObject = {
          car  : $scope.myForm.car,
          c_id: 'abc',
          c_name : $scope.saveNote.c_name,
          c_message:  $scope.saveNote.c_message,
          c_contact: $scope.saveNote.c_contact,
          c_dtime: $scope.saveNote.c_dtime,
          c_domain:$scope.saveNote.c_domain,
          c_active:$scope.saveNote.c_active
       };
       var saveRequest=$http.post("http://localhost:3000/notify/save", dataObject, {});
       saveRequest.success(function(data,status,header,config){
         console.log(data);

       });

}





}]);
