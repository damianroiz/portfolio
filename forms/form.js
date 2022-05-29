function Validate() {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let message = document.querySelector("#message");
    let sendButton = document.querySelector("#send");
  
    buttonEnviar.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (
        name.value == "" ||
        subject.value == "" ||
        email.value == "" ||
        message.value == ""
      ) {
        ops();
      } else {
        sendmail(name.value, subject.value, email.value, message.value);
        success();
      }
    });
  }
  Validate();
  
  function clearForm() {
    document.getElementById("form").reset();
  }
  function sendmail(name, subject, email, message) {
    emailjs.send("service_xsk24xo", "template_bn1xudg", {
      name, 
      subject,
      email,
      message,
    });
  }
  
  function success() {
    swal({
      title: "Great!",
      text: "I will contact you back asap!",
      icon: "success",
      button: "Ok!",
    });
    clearForm();
  }
  
  function error() {
    swal({
      title: "Error!",
      text: "There has been an error!",
      icon: "error",
      button: "Ok!",
    });
  }
  
  function ops() {
    swal({
      title: "Oops!",
      text: "Something went wrong!",
      icon: "error",
      button: "Ok!",
    });
  }


