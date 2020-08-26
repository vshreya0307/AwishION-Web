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
  let projectName = document.querySelector("#pname");
  let Techstack = document.querySelector("#skills");
  let projectLinks = document.querySelector("#links");
  let description = document.querySelector("#description");
  let imageFile = document.querySelector("#fileButton");
  let pptFile = document.querySelector("#pptButton");
 
  const db = firestore.collection("addproData");
 

  submitBtn.addEventListener('click', function(){
      let projectNameInput = projectName.value;
      let TechstackInput = Techstack.value;
      let projectLinksInput = projectLinks.value;
      let descriptionInput = description.value;
      let imageFilename = imageFile.files[0].name;
      addimage(imageFile.files[0]);
      let pptFilename = pptFile.files[0].name;
      addppt(pptFile.files[0]);
 

      

      //access the db collection
      db.doc().set({
          name: projectNameInput,
          skills:  TechstackInput,
          links:  projectLinksInput,
          description:  descriptionInput,
          image: imageFilename,
          files: pptFilename
      }).then(function(){
          console.log("Data Saved")
      }).catch(function(error){
          console.log(error);
      });
      
  });



  function addimage(imageFile){
     // for(let i=0; i<e.target.files.length; i++){
       //   let imageFile = e.target.files[i];
          let storageRef = firebase.storage().ref("Photos/"+imageFile.name);
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
      //}

  };


  function addppt(pptFile){
    //for(let i=0; i<e.target.files.length; i++){
       // let pptFile = e.target.files[i];
        let storageRef = firebase.storage().ref("files/"+pptFile.name);
        let task = storageRef.put(pptFile);
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
    };




function validation(){
    var projectName = document.getElementById("pname").value;
    var Techstack = document.getElementById("skills").value;
    var projectLinks = document.getElementById("links").value;
    var description = document.getElementById("description").value;
    var photo = document.getElementById("fileButton").value
    var ppt = document.getElementById("pptButton").value
   
    if(projectName == ""){
       document.getElementById('ppname').innerHTML = "* please fill the project name "
        return false;
    }

    if(Techstack == ""){
        document.getElementById('techstack').innerHTML = "* please fill the tech stack "
        return false;
    }
    
    if(projectLinks == ""){
        document.getElementById('link').innerHTML = "* please fill the links "
        return false;
    }
    
    if(description == ""){
        document.getElementById('dis').innerHTML = "* please fill the descriptions "
        return false;
    }
    
    if(photo == ""){
        document.getElementById('image').innerHTML = "* please add images "
        return false;
    }

    if(ppt == ""){
        document.getElementById('file').innerHTML = "* please add files"
        return false;
    }

    alert("Data Added Successfully")
    return true ;


}






