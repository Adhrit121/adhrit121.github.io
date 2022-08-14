import emailjs from '@emailjs/browser';
function funi() {


  const btn = document.getElementById('button');
  btn.value = 'Sending...';
  const Your_name = document.getElementById('Your_name').value;
  const message = document.getElementById('message').value;
  const Your_email = document.getElementById('Your_email').value;
  const serviceID = 'default_service';
  const templateID = 'template_39znrxn';
  const PublicKey = 'R7uar-a8o4NmnCJXJ';
  var tempparam={
  Your_name: Your_name,
  Your_email: Your_email,
  message: message
  };
  emailjs.send(serviceID, templateID, tempparam, PublicKey)
}
export default funi;