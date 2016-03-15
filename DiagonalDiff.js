function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    var sum1 = 0;
    var sum2 = 0;
    var subIndex1 = 0;
    var subIndex2 = n - 1;

    for (var i = 0; i < n; i++) {
        sum1 += a[subIndex1][i];
        sum2 += a[subIndex2][i];
        subIndex1++;
        subIndex2--;
    }

    var difference = Math.abs(sum1 - sum2);
    console.log(difference);
}
