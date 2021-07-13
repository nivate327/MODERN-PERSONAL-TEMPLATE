let email=document.getElementById("exampleInputEmail1");

let phone=document.getElementById("exampleInputPassword1");

let submit=document.getElementById("submit");


submit.addEventListener("click", ()=>
{
  console.log(email.value);
  alert(`Your Email ${email.value} and Phone Number is ${phone.value}`);
})



