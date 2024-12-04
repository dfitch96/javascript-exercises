const fibonacci = function(countArg) {

    let count = 0;
    if(typeof count !== 'number'){
        count = parseInt(countArg);
    } else{
        count = countArg;
    }

    if(count == 0){
        return 0;
    } 
    if(count <= 0){
        return "OOPS";
    }

    let first = 1;
    let second = 1;


    for(let i = 2; i < count; i++){
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;




};

// Do not edit below this line
module.exports = fibonacci;
