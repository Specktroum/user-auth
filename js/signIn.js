let signInForm = document.querySelector('#signInForm');
let usersEnteredInfo = {};

signInForm.addEventListener('submit' , (e) => {

     usersEnteredInfo = {

          UserEmail: e.target.emailInput.value,
          UserPassword: e.target.passwordInput.value

     };

     let usersData = localStorage.getItem("user");
     let usersDataJsFormat = JSON.parse(usersData);

     usersDataJsFormat.forEach((item , index) => {

          for (let key in item) {

               let value = item[key]; 
               if (usersEnteredInfo.UserPassword == value) {
                    
               }
          }

     });

     e.preventDefault();
});