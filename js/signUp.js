let signUpform = document.querySelector('#signUpform');
let signUpArray = [];
let signUpInfo = {};

signUpform.addEventListener('submit', (e) => {

     signUpInfo = {
          email: e.target.emailAddressInput.value,
          password: e.target.passwordInput.value,
          passwordConfirm: e.target.passwordConfirmInput.value,
          errmessage: '',
          validStatus: true
     };

     validationForm(signUpInfo);
     if (signUpInfo.validStatus = false) {

          console.log(false);

     }else{

          signUpArray.push(signUpInfo);

          for (let i = 0; i <= signUpArray.length; i++) {
     
               let info = JSON.stringify(signUpArray);
               localStorage.setItem("user" , info);
               
          }
     
     }

     e.preventDefault();
})

function validationForm(signInfo) {

     if(signInfo.email == ""){

          signInfo.errmessage = "Please Fill the Email Address"
          signInfo.validStatus = false

     }else if (signInfo.password == "") {

          signInfo.errmessage = "Please Enter your Password"
          signInfo.validStatus = false

     }else if (signInfo.passwordConfirm == "") {

          signInfo.errmessage = "Please Confirm your Password"
          signInfo.validStatus = false

     }else if (signInfo.password.length < 8) {

          signInfo.errmessage = `Your Password should be longer than 8 Digits <br/> you write ${signInfo.password.length} digits`
          signInfo.validStatus = false

     }else if (signInfo.passwordConfirm != signInfo.password) {

          signInfo.errmessage = "Password Confirm & Password have Different"
          signInfo.validStatus = false

     }else{

          document.querySelector('#successfulBoxContainer').classList.add('show-box');
          signInfo.validStatus = true
          
     }

     let errorBoxContainer = document.querySelector('#errorBoxContainer');
     errorBoxContainer.classList.add('show-box');
     let htwo = errorBoxContainer.querySelector('h2');
     htwo.innerHTML = "";
     htwo.innerHTML = signInfo.errmessage;

}
document.querySelector('#shower').addEventListener('click', (e)=>{

     document.querySelector('#successfulBoxContainer').classList.remove('show-box');
     let errorBoxContainer = document.querySelector('#errorBoxContainer');
     errorBoxContainer.classList.remove('show-box');

});