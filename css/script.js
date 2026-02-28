/* =========================
REGISTER FORM VALIDATION
========================= */

const registerForm =
document.getElementById("registerForm");

if(registerForm)
{

registerForm.addEventListener("submit", function(e)
{

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let institution =
document.getElementById("institution").value;

let subject =
document.getElementById("subject").value;


/* NAME VALIDATION */
let namePattern =
/^[a-zA-Z\s']+$/;


/* EMAIL VALIDATION */
let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(!namePattern.test(name))
{
alert(
"Name can only contain letters and apostrophes"
);
return;
}


if(!emailPattern.test(email))
{
alert(
"Invalid email format"
);
return;
}


if(institution.length < 3)
{
alert(
"Institution must be at least 3 characters"
);
return;
}


if(subject.length < 3)
{
alert(
"Subject must be at least 3 characters"
);
return;
}


alert("Application submitted successfully 🎉");

});
}



/* =========================
YOU CAN ADD OTHER PAGE JS HERE
Example: contact form, animation, etc
========================= */