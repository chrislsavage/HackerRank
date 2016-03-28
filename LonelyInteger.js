function processData(input) {
   input = input.split("\n")[1].split(" ");
    var numCounter = {}
    input.forEach(function(n) {
        if(numCounter[n]) {
        numCounter[n]+= 1
        } else {
            numCounter[n] = 1
        }
    });

    for(key in numCounter) {
        if (numCounter.hasOwnProperty(key)) {
        if (numCounter[key] === 1)
            console.log(key)
        }
    }
} 
