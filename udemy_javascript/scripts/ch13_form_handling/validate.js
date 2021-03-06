// form validation

// DOM nodes
var form = {
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2")
};

// form submit
// For browsers that understand HTML5 it won't be called until
// the form is actually valid
form.register.addEventListener( "submit", CheckForm );

// check email field when its changed, inline anonymous function
form.email.addEventListener( "change", function(e) {
	if (e.target.value == "") alert("You forgot the email!");
} );

// stop space character
form.pass1.addEventListener( "keypress", NoSpaces );
form.pass2.addEventListener( "keypress", NoSpaces );

// stop spaces being entered
function NoSpaces(e) {
	if (e.charCode == 32) e.preventDefault();
}

// form submit validation
var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

// Always run when a submit occurs
// Won't be run on Chrome, Safari, Opera or Firefox until
// the data is actually valid.
function CheckForm(e) {

	var msg = "";

	// check email
	if (!reEmail.test(form.email.value)) {
		msg += "\nyour email address";
	}

	// check passwords aren't empty and match each other
	if (form.pass1.value == "" || form.pass1.value != form.pass2.value) {
		msg += "\nyour passwords";
	}

	// complete message
	if (msg != "") {
		msg = "Please check:"+msg;
	}
	else {
		msg = "Form is valid!\nSubmitting...";
	}

	alert(msg);

	e.preventDefault();

}