const BankAccount = require('./bank')

const a = new BankAccount(34,'savings')

console.log(a.showbalance())
console.log(a.deposit(10))
console.log(a.withdraw(15))
console.log(a.checkhistory())