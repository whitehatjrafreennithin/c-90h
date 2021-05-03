
var firebaseConfig = {
    apiKey: "AIzaSyCPXMYK3wdDFVZZzhmq8tCCAB9E0qFsINc",
    authDomain: "letscatchat.firebaseapp.com",
    databaseURL: "https://letscatchat-default-rtdb.firebaseio.com",
    projectId: "letscatchat",
    storageBucket: "letscatchat.appspot.com",
    messagingSenderId: "336051386403",
    appId: "1:336051386403:web:7d3409a149719a98df1996"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function addUser() {
    
        user_name = document.getElementById("user_name").value;
    
    
        firebase.database().ref("/").child(user_name).update({
            purpose: "adding user name"
        });
    
    user_name = document.getElementById("user_name").value; 
    localStorage.setItem("user_name", user_name);
    window.location = "chat_page.html";
     }