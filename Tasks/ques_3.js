// 3. Login Status
// Check the login status of a user. A user is considered logged in if:
// - isLoggedIn is true.
// - Their session is active (sessionActive is true).
// Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.
 
var isLoggedIn=true;
var session=true;
console.log((isLoggedIn && session)?"Welcome back":"Please log In Again");