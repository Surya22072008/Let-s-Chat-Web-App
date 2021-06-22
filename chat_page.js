//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA9HIgjBP2eG-4Vz5_ziOwHS7NN0OMYLAE",
      authDomain: "let-s-chat-web-app-78b84.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-78b84-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-78b84",
      storageBucket: "let-s-chat-web-app-78b84.appspot.com",
      messagingSenderId: "25342280750",
      appId: "1:25342280750:web:0f01cf4dd292e78fdf4bbf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
