var n1= Math.floor( Math.random()*6)+1;
var n2= Math.floor( Math.random()*6)+1;
document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + n1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + n2 + ".png");
if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else if(n1===n2){
    document.querySelector("h1").innerHTML="Draw!";
}