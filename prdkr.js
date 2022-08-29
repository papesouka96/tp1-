/* /* 
var color =("green", "orange", "red", "white", "black" ,"blue","green", "blue", "red", "white", "black" ,"blue");
var colour =("yellow", "blue", "white", "black", "green" ,"red","yellow", "orange", "white", "black", "green" ,"red");

const buton =document.querySelector("button");
buton.addEventListener("click", changeBG ) ;
const contant = document.getElementsByClassName('p1');
/* var bingo = document.querySelectorAll('.para') */
/*  var p=0;
    var l=0;
 function changeBG() {
	
	var bc1 = document.getElementById('bc1');
	var bc2 = document.getElementById('bc2');
	var bc3 = document.getElementById('bc3');
	var bc4 = document.getElementById('bc4');
	i= 0 < bingo.length ? i++ : 0;
	p= 0 < color.length ? p++ : 0;
	l= 0 < colour.length ? l++: 0;
	bc1.style.background= color[p]
	bc2.style.backgroundColor= color[p]
	bc3.style.backgroundColor= color[p]
	bc4.style.backgroundColor= color[p]
    bc1.style.color = colour[l]
	bc2.style.color = colour[l]
	bc3.style.color = colour[l]
	bc4.style.color = colour[l]

	
		 
}  
/*  var numero=0;
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = color.length - 1;
    if (numero > color.length - 1)
        numero = 0;
    document.getElementById("bc1").src = color[numero];
}setInterval("ChangeSlide(1)", 4000); */


function verification() {
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var Nom = document.getElementById("Nom").value;
	var Prenom = document.getElementById("Prenom").value;
	var Telephone = document.getElementById("Telephone").value;
	var Email = document.getElementById("Email").value;
	var VotreMessage = document.getElementById("VotreMessage").value;
	var div = document.getElementById('myDiv1');
	if (Nom==0 ) {
		alert("Nom vide");
	} else {
		if (Prenom==0 ) {
			alert("Prenom vide");
		} else {if (Telephone==0 ) {/* (input.value.match(validRegex)) */
			alert("Telephone vide");
		} else {if (Email===(validRegex) ) {
			alert("Email vide");
		} else {if (VotreMessage==0 ) {
			alert("message vide");
		} else {
			div.innerHTML += Prenom;
var div = document.getElementById('myDiv2');
div.innerHTML += Nom;
var div = document.getElementById('myDiv3');
div.innerHTML += Telephone;
var div = document.getElementById('myDiv4');
div.innerHTML += Email;
var div = document.getElementById('myDiv5');
div.innerHTML += VotreMessage;
			
		}
			
        }
		}
			
			
		}
			
			
		}
		
	}



/* 	document.querySelector("button").addEventListener("click",capt())
function capt(){
	var bougouma = document.getElementsByClassName('p1');
	for (let i=o; i<4; i++){
		bougouma[i].classList.toggle("biggiri");
	}
}  */
 
		
/* 			
function changerDeCouleur(){
    const bloc =document.getElementById('container').querySelectorAll('div');
    const p = document.getElementById('container').querySelectorAll('p');
    
    for (let index = 0; index < bloc.length; index++) {
        if (bloc[index].classList.contains('changeColor')) {
            bloc[index].classList.remove('changeColor');
            p[index].classList.remove('textColor');
        }else{
            bloc[index].classList.add('changeColor');
            p[index].classList.add('textColor');
        }
    }
}
 */

/* onst btn =document.getElementById("btn");
const selecZon =document.querySelectorAll(".p");
btn.addEventListener("click",changerDeCouleur);
function changerDeCouleur()
{
    for(var i=0; i<4; i++)
    {
        selecZon[i].classList.toggle("fond");
    }
} */
var color =["green", "yellow", "red", "white", "black" ,"blue"];
var colour =["yellow", "blue", "white", "black", "green" ,"red"];
var i=0;
var j=0;
document.querySelector("button").addEventListener("click",
function() {
    i= 1 < color.length ? ++i : 0;
    j= 3 < colour.length ? ++j : 0;
    document.getElementById('bc1').style.backgroundColor= color[i]
    document.getElementById('bc1').style.color = colour[j]
	document.getElementById('bc2').style.backgroundColor= color[i]
    document.getElementById('bc2').style.color = colour[j]
	document.getElementById('bc3').style.backgroundColor= color[i]
    document.getElementById('bc3').style.color = colour[j]
	document.getElementById('bc4').style.backgroundColor= color[i]
    document.getElementById('bc4').style.color = colour[j]
}) 
