
//this code is currently not in use
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
			
/*var accountOptions = document.getElementById("profile-button");

var selectedBool = false;

function showHide() {
    document.getElementById("dropdown-menu").classList.toggle("show");
    //accountOptions.classList.toggle("white");
    switch(selectedBool) {
        case false:
            accountOptions.setAttribute("style", "color: white;");
            selectedBool = true;
        break;

        case true:
            accountOptions.setAttribute("style", "color: #3de1ff;");
            selectedBool = false;
        break;
    }
}

accountOptions.addEventListener('click', showHide);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

    accountOptions.setAttribute("style", "color: #3de1ff;");
    selectedBool = false;

    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/

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