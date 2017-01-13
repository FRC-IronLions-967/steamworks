function dropdown() {
    var x = document.getElementById("matchnumber");
    var y = x.selectedIndex;
    
    if (y == 0) {
       a = "000"
       b = "001"
       c = "002"
    }
    if (y==1) {
        a = "002"
        b = "003"
        c = "004"
    }
    if (y==2) {
        a = "003"
        b = "004"
        c = "005"
    }
    
    document.getElementById("team_number1").innerHTML = a;
    document.getElementById("team_number2").innerHTML = b;
    document.getElementById("team_number3").innerHTML = c;

    
}
 