// function dropDown() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  

//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }




// trying multiple dropdowns

function toggleDropdown(id, button) {
    const dropdown = document.getElementById(id);
    const isOpen = dropdown.classList.contains('show');
    closeAllDropdowns();

    const icon = button.querySelector('.fa');
    if (!isOpen) {
        dropdown.classList.add('show');
        icon.classList.add('rotate');
        button.classList.add('active');
    } else {
        icon.classList.remove('rotate');
        button.classList.remove('active');
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const icons = document.querySelectorAll('.dropdown .fa');
    const buttons = document.querySelectorAll('.dropdown .dropbtn');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    icons.forEach(icon => {
        icon.classList.remove('rotate');
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
        closeAllDropdowns();
    }
}