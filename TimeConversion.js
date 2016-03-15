function main() {
    var time = readLine();
    var ampm = time.slice(-2);
    time = time.slice(0, -2);
    var hours = parseInt(time.slice(0, 2));
    time = time.slice(2);

    if (ampm[0] == "P") {
      if(hours != 12) { 
           hours = hours + 12
           }
        hours = hours.toString();
    } else {
        if(hours == 12) {
         hours = "00";
        } else if (hours < 10) {
         hours = "0" + hours
        } else {
         hours = hours.toString();
        }
    }
 console.log(hours + time)
}
