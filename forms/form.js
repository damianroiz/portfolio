function Validate() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  let sendButton = document.getElementById("send");

  sendButton.addEventListener("click", (e) => {
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
  emailjs.send("service_rrj4uzv", "template_bdwrwdr", {
    name,
    subject,
    email,
    message,
  });
  clearForm();
  success();
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
