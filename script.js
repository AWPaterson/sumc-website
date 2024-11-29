window.onload = () => {
    let menuButton = document.getElementsByClassName("menuButton")[0];

    menuButton.onclick = () => {
        let menuIcon = document.getElementById("menuIcon");

        // Open Menu
        if (document.getElementById("menuOverlay").classList.contains("fadeOut")) {
            menuIcon.src = "res/cancel-close-svgrepo-com.svg";
            menuOverlay.classList.add("fadeIn");
            menuOverlay.classList.remove("fadeOut");


        // Close Menu
        } else {
            let menuOverlay = document.getElementById("menuOverlay");
            menuIcon.src = "res/menu-svgrepo-com.svg";
            menuOverlay.classList.remove("fadeIn");
            menuOverlay.classList.add("fadeOut");

            // Wait for fadeOut transition to finish
            menuOverlay.addEventListener("transitionend", function hideOverlay() {
                menuOverlay.style.display = "none"; // Hide overlay after fade-out
                menuOverlay.classList.remove("fadeOut"); // Clean up class
                menuOverlay.removeEventListener("transitionend", hideOverlay); // Clean up the event listener
                menuOverlay.style.zIndex = "-1";
            });
        }
    };

    let dropdowns = document.getElementsByClassName("dropdown");

    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].onclick = () => { dropDownExpand(dropdowns[i].id); }; 
    }

};
