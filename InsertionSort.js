function processData(input) {
    input = input.split('\n')
    var length = input[0] - 2;
    input = input[1].split(' ');
    var numToSort = input.pop();

    for(var i = length; i > -1; i-- ) {
        if (input[i] <= numToSort) {
            input[i + 1] = numToSort;
            console.log(input.join(" "));
            break;
        } else {
            input[i + 1] = input[i];
            console.log(input.join(" "));
        }
    }
} 
