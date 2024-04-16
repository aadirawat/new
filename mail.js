
const firebaseConfig = {
    apiKey: "AIzaSyCPSqledE2RvvRMBRN1m_WNHZdaAxEJptY",
    authDomain: "projectt1one.firebaseapp.com",
    databaseURL: "https://projectt1one-default-rtdb.firebaseio.com",
    projectId: "projectt1one",
    storageBucket: "projectt1one.appspot.com",
    messagingSenderId: "233024276359",
    appId: "1:233024276359:web:fd1369dfa9093667b3f522",
    measurementId: "G-SFVPLE8VKQ"
    //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
