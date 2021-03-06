 var bank_account_balance = 0;
 var TAX_RATE = 15;
 var PHONE_PRICE = 700;
 var ACESSORY_PRICE = 10;
 var SPENDING_THRESHOLD = 900;

 function calculateTax(price) {
     return (price * TAX_RATE) / 100;
 }

 function formattingMoney(price) {
     return "R$ " + price.toFixed(2);
 }

 function isNumeric(balance){     
     return !Number.isNaN(balance) && isFinite(balance);
 }

 function showBalance() {
     console.log( "Your balance is " + formattingMoney(bank_account_balance) );
 }

 function hasBalance(price){
     return calcPrice(price) <= bank_account_balance;
 }

 function buyAPhone(){
     if(hasBalance(PHONE_PRICE)){
         bank_account_balance = bank_account_balance - calcPrice(PHONE_PRICE);
         console.log("Buying -> Cellphone costs:" + formattingMoney(calcPrice(PHONE_PRICE)));
         buyAcessory(calcPrice(PHONE_PRICE));
     } else {
         console.log( "Sorry you don't have money. Phone costs:" + formattingMoney(calcPrice(PHONE_PRICE)));
     }
     showBalance();
 }

 function buyAcessory(phonePrice){
     var TOTAL = phonePrice;
     var loopAgain = true;     
     while (loopAgain) {
        var buy = prompt( "Buy acessory?:" );
        if(buy === "y"){
            if(TOTAL + calcPrice(ACESSORY_PRICE) <= SPENDING_THRESHOLD ){
                if(hasBalance(ACESSORY_PRICE)){
                    bank_account_balance = bank_account_balance - calcPrice(ACESSORY_PRICE);
                    console.log("Buying -> Acessory costs:" + formattingMoney(calcPrice(ACESSORY_PRICE)));
                    TOTAL = TOTAL + calcPrice(ACESSORY_PRICE);                    
                } else {
                    console.log( "Sorry you don't have money. Acessory costs:" + formattingMoney(calcPrice(ACESSORY_PRICE)));
                }
            } else {
                console.log( "Sorry you reach the spending threshold of ("+formattingMoney(SPENDING_THRESHOLD)+")");
            }
        } else {
            break;
        }
        showBalance();
     }
 }

 function calcPrice(price) {
     return price + calculateTax(price);
 }

do {
  bank_account_balance = parseFloat(prompt( "Please set a valid balance:" ));
} while (!isNumeric(bank_account_balance));

showBalance();

var loopAgain = true;
while (loopAgain) {
    var cmd = prompt( "Please tell me what you wanna do?:" );
    switch(cmd){
        case "q":
            console.log( "quiting");
            loopAgain = false;
            break;
        case "b":
            buyAPhone();
            break;
        default:
            showBalance();
            break;
    }
}

console.log( "End");