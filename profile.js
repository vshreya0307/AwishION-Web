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

  //DOM element
  const submitBtn = document.querySelector("#submit");
  let name = document.querySelector("#fname");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmpassword = document.querySelector("#cpassword");
  let profession= document.querySelector("#prof");
  let phone = document.querySelector("#number");
  let Hobbies = document.querySelector("#hobby");

  const db5 = firestore.collection("personalInfo");

  submitBtn.addEventListener('click', function(){
      let nameInput = name.value;
       let emailInput = email.value;
       let passwordInput = password.value;
       let confirmpasswordInput = confirmpassword.value;
       let professionInput = profession.value;
       let phoneInput = phone.value;
       let HobbiesInput = Hobbies.value;
       


 
       db5.doc().set({
           name: nameInput,
           email: emailInput,
           password: passwordInput,
           confirmpassword: confirmpasswordInput,
           profession: professionInput,
           skills: phoneInput,
           Hobbies:HobbiesInput,
          

       }).then(function(){
           console.log("Data Saved")
        }).catch(function(error){
           console.log(error);
      });
    
      
      
  });

  const data = document.querySelector("#data");
 

  db5.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        
        data.innerHTML += "<div class='col-xs-12 col-sm-8'><h2> " + doc.data().name + "</h2><p><strong>About:</strong>" + doc.data().profession + "</p><p><strong>Hobbies:</strong>" + doc.data().Hobbies + "</p><p><strong>Skills:</strong> " + doc.data().skills + "</dt></dl>"
    });
});

const side = document.querySelector("#side");
 

db5.get().then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
      
  side.innerHTML += "<div  class='side'><h4 > " + doc.data().name + "</h4>"
});
});







var storage    = firebase.storage();
var storageRef = storage.ref();
var listRef = storageRef.child('Images/');

listRef.listAll().then(function(res) {
  
//  add this line here:
  
  res.items.forEach(function(itemRef) {
   itemRef.getDownloadURL().then(function(url){
       console.log(url);
       var DOM_img = document.createElement("img");
DOM_img.src = url;

(document.getElementById("feed")).innerHTML= '<img class="img-circle img-responsive" src="'+url+'" >';

      // document.getElementById("feed").src = url;
     }).catch(function(error) {
   console.log(error);
     });
    // All the items under listRef.
    console.log(itemRef);
  });
}).catch(function(error) {
  
   });

   var storage    = firebase.storage();
var storageRef = storage.ref();
var listRef = storageRef.child('Images/');

listRef.listAll().then(function(res) {
  
//  add this line here:
  
  res.items.forEach(function(itemRef) {
   itemRef.getDownloadURL().then(function(url){
       console.log(url);
       var DOM_img = document.createElement("img");
DOM_img.src = url;

(document.getElementById("image")).innerHTML= '<img class="profile_image"  src="'+url+'" >';

      // document.getElementById("feed").src = url;
     }).catch(function(error) {
   console.log(error);
     });
    // All the items under listRef.
    console.log(itemRef);
  });
}).catch(function(error) {
  
   });