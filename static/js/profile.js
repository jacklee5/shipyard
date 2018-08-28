/*when the user hovers over a button, give a caption of what the button will do */

//var changeUsername = document.getElementById('change-username'), changePassword = document.getElementById('change-password'), blankButton = document.getElementById('blank-button'), addFriend = document.getElementById('add-friend'), sendMessage = document.getElementById('send-message'), reportUser = document.getElementById('report-user');
//
//var body = document.getElementsByTagName('BODY')[0];
//
//changeUsername.addEventListener("mouseover", () => {
//	document.getElementById('button-caption').textContent = "Change Username"
//});
//
//changeUsername.addEventListener("mouseout", () => {
//	document.getElementById('button-caption').textContent = ""
//});
//
//changePassword.addEventListener("mouseover", () => {
//	document.getElementById('button-caption').textContent = "Change Password"
//});
//
//changePassword.addEventListener("mouseout", () => {
//	document.getElementById('button-caption').textContent = ""
//});
//
//blankButton.addEventListener("mouseover", () => {
//	document.getElementById('button-caption').textContent = "Blank Button"
//});
//
//blankButton.addEventListener("mouseout", () => {
//	document.getElementById('button-caption').textContent = ""
//});
//
//addFriend.addEventListener("mouseover", () => {
//	document.getElementById('button-caption').textContent = "Add Friend"
//});
//
//addFriend.addEventListener("mouseout", () => {
//	document.getElementById('button-caption').textContent = ""
//});
//
//sendMessage.addEventListener("mouseover", () => {
//	document.getElementById('button-caption').textContent = "Send Message (?)"
//});
//
//sendMessage.addEventListener("mouseout", () => {
//	document.getElementById('button-caption').textContent = ""
//});
//
//reportUser.addEventListener("mouseover", () => {
//	document.getElementById('button-caption').textContent = "Report this user"
//});
//
//reportUser.addEventListener("mouseout", () => {
//	document.getElementById('button-caption').textContent = ""
//});

/* when the user hovers over the pfp, let them upload an image
var profileImage = document.getElementById("profile-image");

profileImage.addEventListener("mouseover", () => {
	profileImage.setAttribute("style", "background-color: #6d6d6d")
});

profileImage.addEventListener("mouseout", () => {
	profileImage.setAttribute("style", "background-color: #383838")
});*/

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