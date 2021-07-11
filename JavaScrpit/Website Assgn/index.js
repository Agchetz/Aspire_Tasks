

  function fnameValidate(){
    let fnameData = document.getElementById("fname")
    let name = /^[a-zA-Z]{4,15}$/
    if(name.test(fnameData.value)==false){
     document.getElementById('firstname').innerHTML = "! Please enter valid name";
      return false;
    }
  }

  function lnameValidate(){
    let lnameData = document.getElementById("lname")
    let name = /^[a-zA-Z]{1,15}$/
    if(name.test(lnameData.value)==false){
      document.getElementById('lasttname').innerHTML = "! Please enter valid name";
      return false;
    }
  }

  function pnumValidate(){
    let pnumData = document.getElementById("phoneNum")
    let phone = /^[0-9]{10}$/;
    if(phone.test(pnumData.value)==false){
      document.getElementById('phone').innerHTML = "! please enter a valid phone number";
      return false;
    }
  }

  function emailValidate(){
    let emailData = document.getElementById("email")
    let email = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(email.test(emailData.value)==false){
      document.getElementById('useremail').innerHTML = "! please enter a valid email";
      return false;
    }
  }

  // function dobValidate(){
  //   let dobData = document.getElementById("dob")
  //   let dob = /^\d{2}-{2}-{4}$/;
  //   if(dob.test(dobData.value)==false){
  //     document.getElementById('dateofbirth').innerHTML = "! please enter a valid dob";
  //     return false;
  //   }
  // }

function createPassValidate(){
    let passData = document.getElementById("crePass")
    let password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if(password.test(passData.value)==false){
      document.getElementById('create').innerHTML = "! please enter a valid password, <br>Minimum eight characters, at least one letter, <br>one number and one special character";
      return false;
    }
  }

  function confirmPassValidate(){
    let passData = document.getElementById("conPass").value;
    let passData1 = document.getElementById("crePass").value;
    if(passData != passData1){
      document.getElementById('confirm').innerHTML = "! please enter same password ";
      return false;
    }
}

 function newpage(){
  
  let fnameData= document.getElementById("fname").value;
  let lnameData = document.getElementById("lname").value
  let emailData = document.getElementById("email").value
  let pnumData = document.getElementById("phoneNum").value
  let dobData = document.getElementById("dob").value
  
  let data={
    "fname":fnameData,
    "lname":lnameData,
    "email":emailData,
    "phone":pnumData,
    "dob":dobData
    }
localStorage.setItem("formDetails",JSON.stringify(data)
)

  return;
 }
  




