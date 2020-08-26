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


   firebase.auth.Auth.Persistence.LOCAL;

   $("#login").click(function(){

   var email = $("#email").val();
   var password = $("#password").val();

   if(email != "" && password != "")
   {
     var result = firebase.auth().signInWithEmailAndPassword(email,password);


     result.catch(function(error)
     {
       var errorCode = error.code;
       var errorMessage = error.message;

       console.log(errorCode);
       console.log(errorMessage);
       window.alert("Message :" + errorMessage);
      });
     }
   else
   {
     window.alert("Please fill all the details");
   }
 });


 $("#Register").click(function(){

var email = $("#emailid").val();
var password = $("#password").val();
var Firstname = $("#fn").val();
var Lastname = $("#ln").val();
var cpassword = $("#cpassword").val();

 if(email != "" && password != "" && cpassword != "" && Firstname != "" && Lastname != "")
 {
  if(password == cpassword)
  {
    var result = firebase.auth().createUserWithEmailAndPassword(email,password);
     result.catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
 
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message :" + errorMessage);
     });
    }
     else
     {
      window.alert("Password do not match with Confirm password");
     }
   }
 else
 {
   window.alert("Please fill all the details");
 }
});



$("#submit").click(function()
{
  var auth = firebase.auth();
  var email= $("#email").val();


  if(email != "")
  {
    auth.sendPasswordResetEmail(email).then(function()
    {
      window.alert("Email has been sent to your Mail ID");
    })
    .catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
 
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message :" + errorMessage);
    });
 }
  else
  {
    window.alert("Please enter your Email ID");
  }
});

$("#edit").click(function(){
  var email = $("#email").val();
  var password = $("#password").val();
  var name = $("#fname").val();
  var profession = $("#prof").val();
  var cpassword = $("#cpassword").val();
  var number = $("#number").val();

  var rootRef = firebase.database().ref().child("userdetails");
  var userID = firebase.auth().currentUser.uid;
  var usersRef = rootRef.child(userID);

  if(email != "" && password != "" && cpassword != "" && name != "" && profession != "" && number != "")
  {
    if(password == cpassword)
    {
      var userData =
      {
        "email": email,
        "password":password,
        "name":name,
        "profession":profession,
        "confirmpassword": cpassword,
        "number": number,
      };

      userRef.set(userData, function(error)
      {
        if(error)
        {
          var errorCode = error.code;
          var errorMessage = error.message;
     
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message :" + errorMessage);
        }
        else
        {
          window.location.href = "editprofile.html";
        }
      });
    }
    else
    {
      window.alert("Password do not match with Confirm password");
    }
  }
  else
  {
    window.alert("Please fill all the details");
  }
});
