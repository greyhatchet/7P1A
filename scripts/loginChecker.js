// Set two variables, username and password


function loginChecker() {
	var login_user = document.getElementById('username').value;
	var login_password = document.getElementById('password').value;

	for (z in user_array){
		if (user_array[z].username == login_user){
			if(user_array[z].password == login_password){
				alert('Great job hon')
				return true
			}
		}
	}
	return false
}