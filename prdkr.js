

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





function colorer (){
	const bloc = document.querySelectorAll('.p1')
	for (let i=0; i< bloc.length; i++){
		bloc[i].classList.toggle('color')
	}
}
