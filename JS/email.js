function sendMail() {
  let parms = {
    firstname : document.getElementById("firstname"),
    email : document.getElementById("email"),
    subject : document.getElementById("subject"),
    feedback : document.getElementById("feedback"),
  };

  emailjs.send("service_7z7fes1", "template_1uwwhys", parms)
  .then(alert("Email Sent!!")).else("error")
}

    