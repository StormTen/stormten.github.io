var submitContact = function() {
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var commentArea = document.getElementById("commentArea");
  var isValid = true;


  if(!nameInput.value || nameInput.value == "You must have a name!"){
    nameInput.value = "You must have a name!";
    nameInput.style.border = "1px solid red";
    nameInput.style.background = '#EAA1CB';
    isValid = false;
  } else {

    nameInput.style.background = '#FFFFFF';
    nameInput.style.border = "1px solid black";
  }
  if(!emailInput.value || emailInput.value == "You must have an email!"){
    emailInput.value = "You must have an email!";
    emailInput.style.border = "1px solid red";
    emailInput.style.background = '#EAA1CB';
    isValid = false;
  } else {
    emailInput.style.background = '#FFFFFF';
    emailInput.style.border = "1px solid black";
  }
  if(!commentArea.value || commentArea.value == "You must have a comment!") {
    commentArea.value = "You must have a comment!";
    commentArea.style.border = "1px solid red";
    commentArea.style.background = '#EAA1CB';
    isValid = false;
  } else {
    commentArea.style.background = '#FFFFFF';
    commentArea.style.border = "1px solid black";
  }

  if(isValid){
    window.alert("Thank you for contacting us " + nameInput.value + "! We'll get back to you when we can.")
    nameInput.value = "";
    emailInput.value = "";
    commentArea.value = "";
  }

};
