
// Initialize User Object Array
var user_array = []; 

// Class containing User information, initialized as guest
class user_pass_data { 
	constructor(username = "Guest", password = "password", member_level = 0) {
        this.username= username;
		this.password= password;
		this.member_level= member_level;
	}
    get username() {
        return this._username;
    }
    set username(value) {
        var j = 0;
        while(j < user_array.length) {
            if (user_array[j].username == value) {
                console.log("Username taken!");
                value = window.prompt("Username taken! Input a new username.","Username");
                j = 0;
            }
            j += 1;
        }
        this._username = value;
    }
};
// Create Accounts and populate array
var group_accounts = ['Tyson','SoccerRules',2,'alyssalovespuppies','alyssa',2,'audrey','potato',2,'nick','A',1,'terry','deep-fried',2,'grey','withane',2,'puppyhater6969','daniel',2,'garrett','FUCKJAVASCRIPT',2];
var i;
for (i=0; i < group_accounts.length; i+=3) {
    var user = new user_pass_data(group_accounts[i],group_accounts[i+1],group_accounts[i+2]);
    user_array.push(user);
}

