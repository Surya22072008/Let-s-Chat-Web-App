
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBAuhtjEsZ-KB5uvtxfZ7PHt4YWCoGnQ8w",
      authDomain: "chatapp-81c86.firebaseapp.com",
      projectId: "chatapp-81c86",
      storageBucket: "chatapp-81c86.appspot.com",
      messagingSenderId: "703933445933",
      appId: "1:703933445933:web:e307a1dbcef12e3388c5a4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
