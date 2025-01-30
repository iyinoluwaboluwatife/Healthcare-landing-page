// menu
let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar"); //a method used to get html items
  let getSidebarUl = document.querySelector(".nav-sidebar ul"); //All grabs everything and puts them in an array
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "492px";

    let arrayLength = getSidebarLinks.length; //we use the length to get the number of indexes inside the array. (going through the links one by one)
      for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
      }
      toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length; //we use the length to get the number of indexes inside the array. (going through the links one by one)
      for (let i = 0; i < arrayLength; i++){
        getSidebarLinks[i].style.opacity="0";
      }

      toggleNavStatus = false;
    }
}
