/**
 * Created by ariel on 16/01/2017.
 */
const prompt = require('prompt');
prompt.start();

prompt.get(['num1',
            'num2'], function (err, result) {

    var num1 = result.num1;
    var num2 = result.num2;

    if (isNaN(num1) || isNaN(num2)){
        console.error("ERROR: you have not typed numbers")
        return;
    }else{
        if (num1===num2){
            console.log("both numbers are equal..!")
        } else{
            num1>num2? console.log("first number is bigger"):console.log("second number is bigger");
        }
    }

});



