
//this code is currently not in use
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
			
var accountOptions = document.getElementById("user-button");

var openedBool = false;

function showHide() {
	switch (openedBool) {
		case false: 
			document.getElementById("dropdown-menu").setAttribute("style", "display: block");
			openedBool = true;
		break;
		
		case true:
			document.getElementById("dropdown-menu").setAttribute("style", "display: none");
			openedBool = false;
		break;
	}
}

accountOptions.addEventListener('click', showHide);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.user-button')) {
	
	
	document.getElementById("dropdown-menu").setAttribute("style", "display: none");
	openedBool = false;
  }
}

/* Switch between pages when the user clicks on the respective tabs */

//get all the pages
var hanger = document.getElementById("hanger");
var laboratory = document.getElementById("laboratory");
var store = document.getElementById("store");

//get all the buttons
var hangerBtn = document.getElementById("hanger-btn");
var laboratoryBtn = document.getElementById("laboratory-btn");
var storeBtn = document.getElementById("store-btn");

function gotoHanger() {
	hanger.setAttribute("style", "display: block");
	laboratory.setAttribute("style", "display: none");
	store.setAttribute("style", "display: none");
	
	hangerBtn.setAttribute("style", "background: #212121");
	laboratoryBtn.setAttribute("style", "background-color: rgba(0, 0, 0, 0)");
	storeBtn.setAttribute("style", "background-color: rgba(0, 0, 0, 0)");
}

hangerBtn.addEventListener("click", gotoHanger);

function gotoLaboratory() {
	hanger.setAttribute("style", "display: none");
	laboratory.setAttribute("style", "display: block");
	store.setAttribute("style", "display: none");
	
	hangerBtn.setAttribute("style", "background-color: rgba(0, 0, 0, 0)");
	laboratoryBtn.setAttribute("style", "background: #212121");
	storeBtn.setAttribute("style", "background-color: rgba(0, 0, 0, 0)");
	
}

laboratoryBtn.addEventListener("click", gotoLaboratory);

function gotoStore() {
	hanger.setAttribute("style", "display: none");
	laboratory.setAttribute("style", "display: none");
	store.setAttribute("style", "display: block");
	
	hangerBtn.setAttribute("style", "background-color: rgba(0, 0, 0, 0)");
	laboratoryBtn.setAttribute("style", "background-color: rgba(0, 0, 0, 0)");
	storeBtn.setAttribute("style", "background: #212121");
}

storeBtn.addEventListener("click", gotoStore);