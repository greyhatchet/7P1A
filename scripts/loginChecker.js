


function loginChecker() {
	var login_user = document.getElementById('username').value;
	var login_password = document.getElementById('password').value;

	for (z in user_array){
		if (user_array[z].username == login_user){
			if(user_array[z].password == login_password){
				if (user_array[z].member_level == 1) {
				redirectTo('./website.html');
				}
				else {
					redirectTo('./premium_website.html');
				}
			}
		}
	}
	alert('Incorrect Username or Password')
}

function redirectTo(filename) {
	link = document.getElementById('redirect')
	link.href=filename
	link.click()
}