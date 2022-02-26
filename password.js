console.log("Welcome to the password validator tool.");
let password = prompt("What would you like your password to be?");

if (`${password.length}` >= 10) {
    console.log("Your password was accepted!")
} else {
    console.log("Uh oh, your password is not long enough, try again.")
}


