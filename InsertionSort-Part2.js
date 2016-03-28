function processData(input) {
    var i;
    var j;
    input = input.split("\n")[1].split(" ");
    input.map(function(x) { return parseInt(x, 10); });

    for (var j = 1; j < input.length; j++) {
         var key = input[j];
         var i = j - 1;
         while (i >= 0 && key < input[i])     {
             input[i+1] = input[i];
             i -= 1;
         }
         input[i+1] = key;
        console.log(input.join(" "))
     }
} 
