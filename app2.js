/*
Um ensaio de como gostaria de imprimir o preço de algum produto
*/

var Money = function(price) {
    this.value = price;
}

Money.prototype.addTax = function(taxrate) {
    this.value = this.value + (this.value * taxrate) / 100;
    return this;
};

Money.prototype.show = function() {
    console.log("R$ " + this.value.toFixed(2));
    return this;
};

(new Money(200)).show();
(new Money(400)).addTax(12).show();


console.log(Number("2.12333").toFixed(2))



// Examples of use BankAccount

// var ba = new BankAccount(10000);

// var balance = ba.credit(200).debit(100).balance();


var BankAccount = function(initialbalance) {
    this.balance = initialbalance;
}

BankAccount.prototype.debit = function(debitvalue) {
    this.balance = this.balance - debitvalue;
    return this;
};

BankAccount.prototype.credit = function(creditvalue) {
    this.balance = this.balance + creditvalue;
    return this;
};

BankAccount.prototype.getBalance = function() {
    return new Money(this.balance);
};

var ba = new BankAccount(10000);

var balance = ba.credit(200).debit(100).getBalance();

balance.show();