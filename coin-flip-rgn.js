
/**
 * flip is the only source of randomness. 
 * return True or False based on the condition
 */
function flip(){
    return Math.random() >= 0.5;
}

/**
 * This function generates a random number in the range [0,n)
 * @param {number} n 
 */
function randomNumber(n){
    try {
        if (n == undefined || isNaN(n)){
            throw "Error: Input not defined. Please provide a valid number"
        }
        else if (n <= 0){
            throw "Error: Input must be greater than 0"
        } 
        else if (n >= 1000000){
            throw "Error: Input must be less than 1,000,000"
        } 

        var limit = n.toString(2);
        var max_bits = limit.length;
        while (true){
            var rand = randomNumberInBinary(max_bits);
            // Rejecting the random numbers until a valid number is found
            if (rand < n){
                return rand;
            }
        }
        
    } catch (error) {
        return error
    }
    
}

/**
 * This functions return a number from a binary number constructed by 
 * flipping the coin using th flip function
 * @param {number} numbits 
 */
function randomNumberInBinary(numbits){
    var random = ""
    for(var i = 0 ; i < numbits ; i++){
        random += flip()? '1': '0';
    }
    return parseInt(random,2);
}


/**
 * Reading the input from commad line argument 
 */
var star_line = ''

for (var i = 0 ;i<80;i++){
    star_line+='*'
}

console.log("\n"+star_line)
console.log("\n\The Generated Random Number is: "+randomNumber(parseInt(process.argv[2])))
console.log("\n"+star_line+"\n")