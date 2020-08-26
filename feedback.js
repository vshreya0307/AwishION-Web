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
let utility = document.querySelector("#utility");
let info = document.querySelector("#info");
let Experience = document.querySelector("#Experience");
let suggestions = document.querySelector("#suggestions");

const db3 = firestore.collection("feedback");

submitBtn.addEventListener('click', function(){
    let utilityInput =utility.value;
    let infoInput = info.value;
    let ExperienceInput = Experience.value;
    let suggestionsInput = suggestions.value;
    var rates = document.getElementsByClassName('star');
var rate_value;
for(var i = 0; i < rates.length; i++){
  if(rates[i].checked){
      rate_value = rates[i].value;
  }
}


    //access the db collection
    db3.add({
        utility:  utilityInput,
        information:  infoInput,
        experience:  ExperienceInput,
        suggestions:  suggestionsInput,
        starrating: rate_value,
    }).then(function(){
        console.log("Data Saved")
    }).catch(function(error){
        console.log(error);
    });
    
    
});


  var firestore = firebase.firestore();
var docRef = firestore.collection("userdetails");
var showat2 = document.querySelector("#pastComments2");
var loadbutton = document.querySelector("#loadButton");
var inputTextField = document.querySelector("#input");
loadbutton.addEventListener("click",function(){
   docRef.get()
   .then(snapshot => {
     snapshot.forEach(doc => {
       const myData = doc.data();
                       if(myData.name == inputTextField.value){
                          

              showat2.innerHTML += myData.name+"";
                 inputTextField.innerHTML = " <h2 >" + doc.data().name + "</a></h2>";
       }
       else{
         console.log("Data not found");
        }                  

     });
   }).catch(function(error){
   console.log("error: "+error);
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

(document.getElementById("profile")).innerHTML= '<img class="profile_image"  src="'+url+'" >';

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
 const db2 = firestore.collection("userdetails");
 const side = document.querySelector("#side");


db2.get().then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
    
side.innerHTML += "<div  class='side'><h4 > " + doc.data().name + "</h4>"
});
});



$(':radio').change(function() {
  console.log('star rating: ' + this.value);
});


var search = document.getElementsByClassName('bar');
var search_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
    }
}