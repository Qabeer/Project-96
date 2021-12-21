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
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      
      function addRoom() {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }
      
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
             Room_names = childKey;
            //Start code
            console.log("Room_names - " + Room_names);
            row = "<div class = 'room_name' id = " + Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
            });});}
      getData();
      
      function redirectToRoomName(name) {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }
      
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }