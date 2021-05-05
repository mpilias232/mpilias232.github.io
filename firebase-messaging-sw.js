importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');


const config = {
    apiKey: "AIzaSyAUqOhdFbfRiCRqSzxKpYeTppBGsHfAAug",
    authDomain: "admin-a4a00.firebaseapp.com",
    databaseURL: "https://admin-a4a00-default-rtdb.firebaseio.com",
    projectId: "admin-a4a00",
    storageBucket: "admin-a4a00.appspot.com",
    messagingSenderId: "328849622350",
    appId: "1:328849622350:web:cf2cd21a20f108e7aeca1f"
  
  };
  
  firebase.initializeApp(config);
  
  // Retrieve firebase messaging
  const messaging = firebase.messaging();

