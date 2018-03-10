 var matchApp =angular.module('matchApp', ['ngRoute']); 

//controller decleration

// var obj={};
var list=[];
var store=[];
var storage=[];
var mystore=[];
var myIndex;



 matchApp.controller('mainController',function($http,$scope){
  $scope.pageHeading="Angular 1 Assignment";
  $scope.subHeading="below are the list of matches played";
  $scope.names=["filter by year","filter by team1 ","filter by score"];
 //                console.log($scope.pageHeading);
  //  this.pageHeading="Assignment on angular";
 console.log("controller is working ========>>>>>>");

$http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json').then (function(response){
  // obj['first']=response.data;

$scope.list=response.data.rounds;
storage=$scope.list;
localStorage.setItem("storage",JSON.stringify(storage))
console.log($scope.list,'=====>>');
mystore=JSON.parse(localStorage.getItem("storage"));
//console.log(mystore,'======>>>>>from local')
$scope.getIndex=function(matchIndex){
  alert("you selected:"+matchIndex);
  $scope.myIndex=matchIndex;
console.log(matchIndex,'=====....')
}
return $scope.list;


}).catch(function(err){
  console.log('Error:',err);
  throw err;
})
 $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json').then(function(response){

$scope.store=response.data.rounds;

console.log($scope.store,'secound response========>>>>>')

// console.log(obj,'======>>>>'  )

return store;
 }).catch(function(err){
   console.log('Error:',err);
   throw err;
})
 
  });


  matchApp.controller('secondaryController',function($scope){

   //                console.log($scope.pageHeading);
    //  this.pageHeading="Assignment on angular";
   console.log("secondary controller is working ========>>>>>>");
   myIndex=$scope.list[matchIndex];
  
   
    });
  







