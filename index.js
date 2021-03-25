var i=0,j=0;
function myfunction(){
var randomnumber= Math.random();
randomnumber=randomnumber*6;
randomnumber=Math.floor(randomnumber)+1;

var randomimage="dice"+randomnumber+".png";


document.querySelectorAll("img")[0].setAttribute("src",randomimage);

var randomnumber2= Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;

var randomimage2="dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Won!";
    i++;
    document.getElementById("scorefinal").innerHTML="Player 1 : "+i;
    
}
else if(randomnumber==randomnumber2){
    document.querySelector("h1").innerHTML="It's a tie!";
   
}
else{
    document.querySelector("h1").innerHTML="Player 2 Won!";
    j++;
    document.getElementById("scorefinal2").innerHTML="Player 2 : "+j;
}
}
