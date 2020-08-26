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
  var db = firebase.firestore().collection("addproData");
  
  const submit = document.querySelector("#likeBtn");
  let like = document.querySelector("#like");

  //const db = firestore.collection("addproData");

  

   var storage    = firebase.storage();
  var storageRef = storage.ref();
  var listRef = storageRef.child('Photos/');
  var listRef1 = storageRef.child('files/')
   const feed = document.querySelector("#feed");
 

 db.get()
       .then(querySnapshot => {
         querySnapshot.docs.forEach(doc => {
          listRef.child(doc.data().image).getDownloadURL().then(function(url1)
          {
            listRef1.child(doc.data().files).getDownloadURL().then(function(url)
          {
           
            feed.innerHTML += "<dl class='feed'><dt>Project Name: " + doc.data().name + "</dt><dt>Tech Stack: " + doc.data().skills + "</dt><dt>Project Links:<a href='"+ doc.data().links +"'>"+ doc.data().links +"</a></dt><dt>Description: " + doc.data().description + "</dt><dt><img id='myImgId' class='proimage' src='"+url1+"'></dt><dt><a href='"+url+"' target='_blank'>VIEW PDF</a></dt><dt><button id='likeBtn' onclick='likePost('"+doc.id+"')'><i id='like' class='fa fa-thumbs-up' aria-hidden='true'></i></button><input type='number' id='myNumber'></dt>";
          }).catch(function(error) {
            
            console.log(error);
          });


          }).catch(function(error) {
            
            console.log(error);
          });

       });
     });

    

  function likePost(id){
    document.getElementById("myNumber").stepUp();

    //let likeInput = like.value;

    db.doc(id).set({
      likee: "1"
  }).then(function(){
      console.log("like Saved")
  }).catch(function(error){
      console.log(error);
  });
  }
  