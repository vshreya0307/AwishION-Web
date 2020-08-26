var firebaseConfig = {
    apiKey: "AIzaSyCe6E7sKe80X7XilKnNFq5qpN8sULGLGpo",
    authDomain: "addproject-f5738.firebaseapp.com",
    databaseURL: "https://addproject-f5738.firebaseio.com",
    projectId: "addproject-f5738",
    storageBucket: "addproject-f5738.appspot.com",
    messagingSenderId: "688978608237",
    appId: "1:688978608237:web:de82725b762b446b9e3f64"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  const submitBtn = document.querySelector("#submit");
  let email = document.querySelector("#fname");
  let options = document.querySelector("#area");
  let others = document.querySelector("#lname");
  let description = document.querySelector("#des");

  const db1 = firestore.collection("helpData");

  submitBtn.addEventListener('click', function(){
    let emailInput = email.value;
    let optionsInput = options.value;
    let othersInput = others.value;
    let descriptionInput = description.value;
if(validation()){
    db1.doc().set({
        email: emailInput,
        options:  optionsInput,
        others:  othersInput,
        description:  descriptionInput        
    }).then(function(){
        console.log("Data Saved")
    }).catch(function(error){
        console.log(error);
    });}
    else
    console.log("error")
    
    
});


function validation(){
  var email = document.querySelector("#fname");
  var options = document.querySelector("#area");
  
  var description = document.querySelector("#des");

  if(email.value == ""){
    document.getElementById('ffname').innerHTML = "* Please enter your Email ID "
     return false;
 }
else if(options.value == ""){
     document.getElementById('areas').innerHTML = "* Please select a option "
     return false;
 }
 else if(description.value == ""){
     document.getElementById('dis').innerHTML = "* please fill the descriptions "
     return false;
 }
else{
 alert("Data Added Successfully")
 return true ;}
 
}