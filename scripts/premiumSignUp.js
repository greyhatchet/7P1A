// function to sign up new users and push object onto user array

function premiumSignUp() {
	var new_user = document.getElementById('username').value;
	var new_password = document.getElementById('password').value;
	if (new_user != "" && new_password != "") {
		var user = new user_pass_data (new_user,new_password,2);
		user_array.push(user);
		redirectTo('./premium_website.html')
	}
	else {
		alert('Invalid sign in!')
	}
	};	