document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

let error=document.getElementById("error")

if(name=="" || email=="" || message==""){

error.innerText="All fields required"

return
}


if(!email.includes("@")){

error.innerText="Invalid email"

return
}

error.innerText="Form submitted successfully"


// ⭐ this line will clear form
document.getElementById("contactForm").reset()

})