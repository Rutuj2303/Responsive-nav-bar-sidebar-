// === BASIC FUNCTIONS FOR MENU ===

// function showMenu() {
//     const sidebar = document.querySelector(".sidebar").style.display="flex"
// }

// function hideMenu() {
//     const sidebar = document.querySelector(".sidebar").style.display="none"
// }


// === SHOW AND HIDE MENU FUNCTIONS FOR TRANSITION === 

// === SHOW MENU FUNC ===
function showMenu() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    setTimeout(() => {
        sidebar.style.transform = "translateX(0)";
    }, 10);
}

// === HIDE MENU FUNC ===
function hideMenu() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translateX(100%)";
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 300); 
}