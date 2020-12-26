var randomnumber1 = Math.floor(Math.random() * 6) +1;

var imagesrc1 = "Images/" + randomnumber1 + ".png";

var x = document.querySelectorAll("img")[0];

x.setAttribute("src", imagesrc1);

var y = document.querySelectorAll("img")[1]; 

var randomnumber2 = Math.floor(Math.random() * 6) +1;

var imagesrc2 = "Images/" + randomnumber2 + ".png";

y.setAttribute("src",imagesrc2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML= "Player 1 Won the match🚩";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML= "Player 2 Won the match🚩";
}
else {
    document.querySelector("h1").innerHTML= "It's a tie";
}
