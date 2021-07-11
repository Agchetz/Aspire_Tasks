const { Console } = require("console");

function openSignup() {
  var clicked = document.getElementById("model");
  var click = document.getElementById("modell");
  clicked.style.visibility = "visible";
  click.style.visibility = "hidden";
}
function closeSignup() {
  var click = document.getElementById("model");
  click.style.visibility = "hidden";
//   console.log("hey");
//   location.replace("demoweb.html");
  
}
function openLogin() {
  var clicked = document.getElementById("modell");
  var click = document.getElementById("model");
  clicked.style.visibility = "visible";
  click.style.visibility = "hidden";
}
function closeLogin() {
  var click = document.getElementById("modell");
  click.style.visibility = "hidden";
}

function validateNumber(){
  var pNumber=document.getElementById("phoneNumber").value;
  var errorNum=document.getElementById('errorNum');
  if(pNumber=="" ){
    if(pNumber.length!=10)
  errorNum.innerHTML="! Enter your valid Phone Number";
  }
  else{
  errorNum.innerHTML="";
  }
  
}

function validateName(){
  var name=document.getElementById("userName").value;
  var errorName=document.getElementById('errorName');
  if(name==""){
  errorName.innerHTML="! Enter your Name";
  }
  else{
  errorName.innerHTML="";
  }
}

function validateEmail(){
  var email=document.getElementById("emailId").value;
  var errorEmail=document.getElementById('errorEmail');
  if(email==""){
  errorEmail.innerHTML="! Enter your Email";
  }
  else{
  errorEmail.innerHTML="";
  }
}

function validatePassword(){
  var pass=document.getElementById("passWord").value;
  var errorPass=document.getElementById('errorPass');
  if(pass==""){
  errorPass.innerHTML="! Enter your Password";
  }
  else{
  errorPass.innerHTML="";
  }
}

function validateSubmit(){
  var pNum=document.getElementById("phoneNumber").value;
  var name=document.getElementById("userName").value;
  var email=document.getElementById("emailId").value;
  var pass=document.getElementById("passWord").value;
  var p1=document.getElementById('errorNum');
  var p2=document.getElementById('errorName');
  var p3=document.getElementById('errorEmail');
  var p4=document.getElementById('errorPass');

    if(pNum != "" && name!="" && email!="" && pass!="" ){
      Console.log("closed");
    }
    else if(pNum != "" && name !="" ){
      errorEmail.innerHTML="! Enter your Email";
      errorName.innerHTML="! Enter your Name";
    }
    else if(email != "" && name !="" ){
      errorNum.innerHTML="! Enter your valid Phone Number";
      errorPass.innerHTML="! Enter your password";
    }
    else if(email != "" && pass !="" ){
      errorNum.innerHTML="! Enter your valid Phone Number";
      errorName.innerHTML="! Enter your Name";
    }
    else if(pNum !=""){
      errorName.innerHTML="! Enter your Name";
      errorEmail.innerHTML="! Enter your Email";
      errorPass.innerHTML="! Enter your password";
    }
    else if(name !=""){
      errorNum.innerHTML="! Enter your valid Phone Number";
      errorEmail.innerHTML="! Enter your Email";
      errorPass.innerHTML="! Enter your password";
    }
    else if(email !=""){
      errorNum.innerHTML="! Enter your valid Phone Number";
      errorName.innerHTML="! Enter your Name";
      errorPass.innerHTML="! Enter your password";
    }
    else if(pass !=""){
      errorNum.innerHTML="! Enter your valid Phone Number";
      errorName.innerHTML="! Enter your Name";
      errorEmail.innerHTML="! Enter your Email";
      
    }
    else if(pNum =="" || name =="" || email =="" || pass =="" ){
      errorNum.innerHTML="! Enter your valid Phone Number";
      errorName.innerHTML="! Enter your Name";
      errorEmail.innerHTML="! Enter your Email";
      errorPass.innerHTML="! Enter your password";
    }
}

function callButton(){
  var button =document.getElementById("button");
  button.style.visibility = "visible"
}
function removeButton(){
  var button = document.getElementById("button");
  button.style.visibility = "hidden"
}

function callButton1(){
  var button1 =document.getElementById("button1");
  button1.style.visibility = "visible"
}
function removeButton1(){
  var button1 = document.getElementById("button1");
  button1.style.visibility = "hidden"
}

function callButton2(){
  var button =document.getElementById("button2");
  button.style.visibility = "visible"
}
function removeButton2(){
  var button = document.getElementById("button2");
  button.style.visibility = "hidden"
}

function callButton3(){
  var button =document.getElementById("button3");
  button.style.visibility = "visible"
}
function removeButton3(){
  var button = document.getElementById("button3");
  button.style.visibility = "hidden"
}

function callButton4(){
  var button =document.getElementById("button4");
  button.style.visibility = "visible"
}
function removeButton4(){
  var button = document.getElementById("button4");
  button.style.visibility = "hidden"
}

function callButton5(){
  var button =document.getElementById("button5");
  button.style.visibility = "visible"
}
function removeButton5(){
  var button = document.getElementById("button5");
  button.style.visibility = "hidden"
}

function callButton6(){
  var button =document.getElementById("button6");
  button.style.visibility = "visible"
}
function removeButton6(){
  var button = document.getElementById("button6");
  button.style.visibility = "hidden"
}

function callButton7(){
  var button =document.getElementById("button7");
  button.style.visibility = "visible"
}
function removeButton7(){
  var button = document.getElementById("button7");
  button.style.visibility = "hidden"
}

function openLocationTab(){
  var close = document.getElementById("closeLocationIcon");
  close.style.visibility = "visible";
}
function closeLocation(){
  var close = document.getElementById("closeLocationIcon");
  close.style.visibility = "hidden";
}

// Google Maps JavaScript library
var searchInput = 'search_input';
 
$(document).ready(function () {
 var autocomplete;
 autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
  types: ['geocode'],
 });
  
 google.maps.event.addListener(autocomplete, 'place_changed', function () {
  var near_place = autocomplete.getPlace();
 });
});
// Google Maps JavaScript library

// geolocation
function geoFindMe() {
  const mapLink = document.querySelector("#map-link");

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  }

  function error() {
    console.log("error");
  }

  if (!navigator.geolocation) {
    console.log("not supported");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
document.querySelector("#find-me").addEventListener("click", geoFindMe);
// geolocation