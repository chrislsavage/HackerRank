/*Input can have all negative numbers

Sample input:

6 = test cases
1 = numbers in array
1 = array
6 = numbers in array
-1 -2 -3 -4 -5 -6 = array etc.
2
1 -2
3
1 2 3
1
-10
6
1 -1 -1 -1 -1 5


Output = max incontiguous sum and contiguous sum

*/

function processData(input) {
    input = input.split("\n")
    var contiguousSum = 0;
    var incontigousSum = 0;
    var currentAnswer = 0
    for (var i = 1; i < input.length; i++) {
        if (i % 2 == 1){

        } else {
            var arr = input[i].split(" ")
            for (var j = 0; j < arr.length; j++) {
                arr[j] = parseInt(arr[j])
                if (arr[j] > 0) {
                contiguousSum += arr[j]
                }
                currentAnswer = Math.max(0, currentAnswer + arr[j])
                incontigousSum = Math.max(incontigousSum, currentAnswer)
            }
            if (contiguousSum == 0) {
                contiguousSum = Math.max(...arr)
                incontigousSum = contiguousSum
            }
            console.log(incontigousSum, contiguousSum)
        contiguousSum = 0;
        incontigousSum = 0;
        currentAnswer = 0;
        }
    }
}
