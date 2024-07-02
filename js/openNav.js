// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
//     // document.body.style.filter = blur(100);
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//     document.body.style.backgroundColor = "white";
//   }


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "255px";
  // body.width = "880px";
  document.getElementById("main").style.marginLeft = "255px";
}

function openNavMobile() {
  document.getElementById("mySidenav").style.width = "100%";
  // document.getElementById("main").style.marginLeft = "250px";
}

// function openNav() {
//   document.getElementById("mySidenav").style.width = "100%";
// }

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}