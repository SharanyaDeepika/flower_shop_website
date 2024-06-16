const firebaseConfig = {
  apiKey: "AIzaSyCytuBbPTo-605cE9BALckz7AiFSXhpWP0",
  authDomain: "flower-shop-a04c8.firebaseapp.com",
  databaseURL: "https://flower-shop-a04c8-default-rtdb.firebaseio.com",
  projectId: "flower-shop-a04c8",
  storageBucket: "flower-shop-a04c8.appspot.com",
  messagingSenderId: "504280401951",
  appId: "1:504280401951:web:bfe89b7ac1e53e42172d2a",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var contactFormDB = firebase.database().ref("flowershop");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  //console.log(name, emailid, msgContent);

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
