var app =angular.module('MyApp',['ngMaterial']);
app.controller('AppCtrl', function() {

  this.myDate = new Date();
console.log("welcome",this.myDate);
  this.minDate = new Date(
    this.myDate.getFullYear()- 60,
    this.myDate.getMonth() ,
    this.myDate.getDate()
  );

  this.maxDate = new Date(
    this.myDate.getFullYear()-18,
    this.myDate.getMonth() ,
    this.myDate.getDate()
  );
});
