// DOM
var btn_reg = document.getElementById('signupbtn');
var btn_login = document.getElementById('signin')


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHjEDjhtRwwHD_5Q6ACWv_ebl-PjCl7pA",
    authDomain: "fir-learn-67.firebaseapp.com",
    databaseURL: "https://fir-learn-67.firebaseio.com",
    projectId: "fir-learn-67",
    storageBucket: "fir-learn-67.appspot.com",
    messagingSenderId: "1019974102734"
  };
  firebase.initializeApp(config);
  var auth = firebase.auth();

// form submit function - Sign Up
btn_reg.addEventListener('click', function(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;

// Create a new account
    auth.createUserWithEmailAndPassword(email, password).then(function(){
      auth.onAuthStateChanged(function(user){
        if(user){
          user.updateProfile({
            displayName: name
          });
          document.querySelector('.main').innerHTML = `<div class='after'>
            <h2>Welcome, ${name}</h2>
            <p>Welcome to your account. This is a simple app usign <b>Firebase Authentication</b>. Your account has been saved!</p>
          </div>`;
        }

      });

    }).catch(function(e){
      alert(e.message);
    });

});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



// form submit function - Log In
btn_login.addEventListener('click', function(){
  var email = document.getElementById('your_email').value;
  var password = document.getElementById('your_pass').value;

  auth.signInWithEmailAndPassword(email, password).then(function(){
    auth.onAuthStateChanged(function(user){
      document.querySelector('.main').innerHTML = `<div class='after'>
        <h2>Welcome, ${user.displayName}</h2>
        <p>Welcome to your account. This is a simple app usign <b>Firebase Authentication</b>. Your account has been saved!</p>
      </div>`;
    })
  }).catch(function(e){
    alert(e.message);
  })


});
