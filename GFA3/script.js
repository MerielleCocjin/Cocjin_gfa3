function randomizer(){
    var p1 = parseInt(Math.random()*20)+1;
    document.getElementById("game1").innerHTML = p1

    var p2 = parseInt(Math.random()*20)+1;
    document.getElementById("game2").innerHTML = p2

    var p3 = parseInt(Math.random()*20)+1;
    document.getElementById("game3").innerHTML = p3

    if(p1>= p2 && p1 >= p3){
        document.getElementById("print").innerHTML = " The highest score is: " + p1;
    }

    if(p2>= p1 && p2 >= p3){
        document.getElementById("print").innerHTML = " The highest score is: " + p2;
    }

    if(p3>= p1 && p3 >= p2){
        document.getElementById("print").innerHTML = " The highest score is: " + p3;
    }

    document.getElementById("wowow").innerHTML = "The server ID is: " + Math.random().toString(36).substring(2,7);

    document.getElementById("test").innerHTML = "The total time in minutes playing the game is: " + p2*p3 + " mins.";
}
