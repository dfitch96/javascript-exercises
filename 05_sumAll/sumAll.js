const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return 'ERROR';
    }

    i = num1 < num2 ? num1 : num2;
    max = num1 < num2 ? num2 : num1;
    
    sum = 0;
    for(;i <= max ;i++){
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
