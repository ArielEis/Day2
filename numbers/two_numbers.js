/**
 * Created by ariel on 16/01/2017.
 */
const prompt = require('prompt');
prompt.start();

prompt.get(['num1',
            'num2'], function (err, result) {
    if(err || !result || !result.num1 || !result.num2){
        console.error('We had an error !!', err || 'no values were inserted');
        return;
    }

    var num1 = Number(result.num1);
    var num2 = Number(result.num2);

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



