// Your web app's Firebase configuration
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



       db5.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            db5.doc(doc.id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
            
            // doc.data() is never undefined for query doc snapshots

        });
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
    
       //access the db5 collection
       
    
      
      
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

(document.getElementById("ep")).innerHTML= '<img class="profile_image"  src="'+url+'" >';

      // document.getElementById("feed").src = url;
     }).catch(function(error) {
   console.log(error);
     });
    // All the items under listRef.
    console.log(itemRef);
  });
}).catch(function(error) {
    console.log(error);
  
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

(document.getElementById("ep")).innerHTML= '<img class="profile_image"  src="'+url+'" >';

      // document.getElementById("feed").src = url;
     }).catch(function(error) {
   console.log(error);
     });
    // All the items under listRef.
    console.log(itemRef);
  });
}).catch(function(error) {
    console.log(error);
  
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

(document.getElementById("profile")).innerHTML= '<img class="profile"  src="'+url+'" >';

      // document.getElementById("feed").src = url;
     }).catch(function(error) {
   console.log(error);
     });
    // All the items under listRef.
    console.log(itemRef);
  });
}).catch(function(error) {
    console.log(error);
  
   });


 fileButton = document.querySelector("#fileButton")
  fileButton.addEventListener('change',function(e){
    for(let i=0; i<e.target.files.length; i++){
        let imageFile = e.target.files[i];
        let storageRef = firebase.storage().ref("Images/"+imageFile.name);
        let task = storageRef.put(imageFile);
        task.on('state_changed',function progress(snapshot){
            let percentage = snapshot.bytesTransferred/ snapshot.totalBytes *100;
            console.log("Upload is"+ percentage + "%done");
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED :
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING :
                      console.log("Upload is Running");
                      break;
                
            }
        })
    }

});

