function validateEmail(e) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test(e.value)) {
    document.querySelector("#emailInput").style.color = "red";
  } else {
    document.querySelector("#emailInput").style.color = "";
  }
}
