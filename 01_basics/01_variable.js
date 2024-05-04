const accountID = 78945623
let accountEmail = "apsar@gmail.com"
var accountPassword = 78937863
accountCity = "Hyderabad"
let accountState;

//writing console log for every variable is so haptic so console.table prints all the variable in tabel form //

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])

/*changing  the values for the variables so we can get an idea that which variables can resign value and which cannot*/

accountID = 23
console.log(accountID) 
//constant variable doesnt  changes so it throughs error/ and stop  executing further lines of code in that block. //

accountEmail = "Beeing.apsar@gmail.com"
accountPassword = 0102030405
accountCity = "vijayawada"

console.table([accountEmail,accountPassword,accountCity])


/*Here's a summary of your code execution:

accountID cannot be reassigned because it's declared as const.
accountEmail can be reassigned because it's declared as let.
accountPassword can also be reassigned because it's declared as var.
accountCity is implicitly declared (without var, let, or const), which creates a global variable. It can also be reassigned. */




