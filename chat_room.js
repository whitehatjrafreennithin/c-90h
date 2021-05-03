


  function logout(){
    window.location = "index.html";

}

welcome_user_name = localStorage.getItem("user_name");

document.getElementById("welcome_user_name").innerHTML ="Welcome " + welcome_user_name + "!";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();