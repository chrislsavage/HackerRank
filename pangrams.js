function processData(input) {
    input = input.toLowerCase().split(" ").join("").split("");
    var arr = [];
    var length = 0;

    for (var i = 0; i < input.length; i++) {
        if (arr.indexOf(input[i]) === -1)
            arr.push(input[i]);
        }
    if (arr.length === 26) {
                console.log("pangram");
            } else {
                console.log("not pangram");
            }
} 
