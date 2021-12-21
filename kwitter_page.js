//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDy5bZ6tT2f4Olt5RF8hDJ48arhYPfYrn0",
      authDomain: "kwitter-project-ee10f.firebaseapp.com",
      databaseURL: "https://kwitter-project-ee10f-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-ee10f",
      storageBucket: "kwitter-project-ee10f.appspot.com",
      messagingSenderId: "643301369563",
      appId: "1:643301369563:web:a0ce6ed36ddcb4c5ad8efe"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

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

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}