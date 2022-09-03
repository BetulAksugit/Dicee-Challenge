//Math.random() 0 dahil 1 hariç( 0 - 0.999999) random sayı değeri üretir. Math.floor() ile de bunu virgülden kurtarır tam sayıya çeviririz. Bu method bize 0-5 arası değer üretir. +1 diyerek de 1 ile 6 arasında bir sayı değeri oluşturmuş oluruz. 
var randomNumber1 = Math.floor(Math.random() *6) +1;

 //images klasörü altındaki resimlerie random olarak ulaşabiliriz.
var randomDiceImage = "dice" + randomNumber1 +".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//ikinci görsel için aynılarını yaptık.
var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏴Play 1 Wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🏴Player2 Wins!"
}
else{
    document.querySelector("h1").innerHTML ="🎌Draw"
}
