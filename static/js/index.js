/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
			
var accountOptions = document.getElementById("account-options");

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
}