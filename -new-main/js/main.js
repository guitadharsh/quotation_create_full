// open side bar form
function openNav() {
	document.getElementById("mySidenav").style.width = "500px"; 
	var bg_dark=document.getElementsByClassName('home-section');
	bg_dark
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// open side bar 
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	menuBtnChange();
});


function menuBtnChange() {
	if (sidebar.classList.contains("open")) {
		closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
	} else {
		closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
	}
    }