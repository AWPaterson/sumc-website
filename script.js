window.onload = () => {
    let menuButton = document.getElementsByClassName("menuButton")[0];

    menuButton.onclick = () => {
        let menuIcon = document.getElementById("menuIcon");
        let menuBox = document.getElementById("menuBox");
        let menuOverlay = document.getElementById("menuOverlay");

        menuBox.style.display = "flex";
        menuOverlay.style.display = "flex"

        // Open Menu
        if (document.getElementById("menuOverlay").classList.contains("fadeOut")) {
            menuIcon.src = "res/cancel-close-svgrepo-com.svg";
            menuOverlay.style.zIndex = "1";
            menuBox.style.zIndex = "2"; 
            menuOverlay.classList.add("fadeIn");
            menuOverlay.classList.remove("fadeOut");
            menuBox.classList.add("slideIn");
            menuBox.classList.remove("slideOut");


            // Close Menu
        } else {
            let menuOverlay = document.getElementById("menuOverlay");
            menuIcon.src = "res/menu-svgrepo-com.svg";
            menuOverlay.classList.remove("fadeIn");
            menuOverlay.classList.add("fadeOut");
            menuBox.classList.remove("slideIn");
            menuBox.classList.add("slideOut");
            setTimeout(() => { 
                menuOverlay.style.zIndex = "-1";
                menuBox.style.zIndex = "-1";                
             }, 300);
        }
    };

    let dropdowns = document.getElementsByClassName("dropdown");

    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].onclick = () => { dropDownExpand(dropdowns[i].id); };
    }

};