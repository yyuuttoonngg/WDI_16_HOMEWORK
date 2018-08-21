class BankAccount{
    constructor(balance,type){
        this.number = balance
        this.accoutType = type
        this.history =[];
    }
    showbalance(){
        const log = this.accoutType + ' balance is ' + this.number
        this.history.push(`check balance of ${log}`)
        return log     
    }
    deposit(amount){
        this.number += amount
        let log = 'deposit '+ amount + ' to ' + this.accoutType + ' balance is ' + this.number
        this.history.push(log)
        return log
    }
    withdraw(amount){
        this.number -= amount
        let log = 'withdraw ' + amount + ' from ' + this.accoutType + ' balance is ' + this.number
        this.history.push(log)
        return log
    }
    checkhistory(){
        return this.history
    }
}

module.exports =  BankAccount
