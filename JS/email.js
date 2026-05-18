function sendMail() {
  const templateParams = {
    firstname : document.querySelector("#firstname").value,
    email     : document.querySelector("#email").value,
    subject   : document.querySelector("#subject").value,
    feedback  : document.querySelector("#feedback").value,
  };
  
  if (!templateParams.firstname || !templateParams.email || !templateParams.subject || !templateParams.feedback) {
    return false;
  }

  emailjs.send("service_7z7fes1", "template_1uwwhys", templateParams)
  .then(() => {
    alert("Email Sent!");
  })
}



    