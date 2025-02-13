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

    carousel();
};

function toggleFlip(card) {
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        card.classList.remove('flipped');
    } else {
        document.querySelectorAll('.flip-card').forEach(c => {
            c.classList.remove('selected');
            c.classList.remove('flipped');
        });
        card.classList.add('selected');
        card.classList.toggle('flipped');
    }
}

let slideIndex = 0;

function carousel() {
    if (document.getElementsByClassName("mySlides").length != 0) {
        let img = document.getElementsByClassName("mySlides");
        for (let i = 0; i < img.length; i++) {
            img[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > img.length) {
            slideIndex = 1
        }
        img[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 1500); // Change image every 2 seconds
    }
}

function toggleTrip(id) {
    if (document.getElementById("tripImg").style.display === "none") {
        document.getElementById("tripImg").style.display = "block";
    }

    let dates = document.getElementById("tripDates");
    let info = document.getElementById("tripInfo");
    let title = document.getElementById("tripTitle");
    let image = document.getElementById("tripImg");
    switch (id) {

        case "cobbler":
            dates.innerHTML = "28/09/2024";
            title.innerHTML = "The Cobbler";
            image.innerHTML = '<img class="mySlides" src="res/cobbler1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/cobbler2.JPG">'
                + '<img class="mySlides" src="res/cobbler3.JPG">'
                + '<img class="mySlides" src="res/cobbler4.JPG">'
                + '<img class="mySlides" src="res/cobbler5.JPG">';
            info.innerHTML = "Our first hillwalking day trip of the year will be to The Cobbler in the Arrochar Alps. This is a great place to meet or catch-up with SUMC members, new and old."
            break;

        case "bennybeg":
            dates.innerHTML = "05/10/2024";
            title.innerHTML = "Bennybeg";
            image.innerHTML = '<img class="mySlides" src="res/bennybeg1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/bennybeg2.JPG">'
                + '<img class="mySlides" src="res/bennybeg3.JPG">'
                + '<img class="mySlides" src="res/bennybeg4.JPG">'
                + '<img class="mySlides" src="res/bennybeg5.JPG">';
            info.innerHTML = "Never climbed outdoors? Want to see what all the fuss is about? Or if you are just keen to meet fellow climbers, join our day trip to Bennybeg where we will be doing some sport climbing.";
            break;

        case "glencoe":
            dates.innerHTML = "11/10/2024 - 13/10/2024 & 24/01/2025 – 26/01/2025";
            title.innerHTML = "Glencoe Weekend Trips";
            image.innerHTML = '<img class="mySlides" src="res/glencoe1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/glencoe2.JPG">'
                + '<img class="mySlides" src="res/glencoe3.JPG">'
                + '<img class="mySlides" src="res/glencoe4.JPG">'
                + '<img class="mySlides" src="res/glencoe5.JPG">';
            info.innerHTML = "Our first weekend trip of the year! We will stay in the Ballachulish Village Hall, which is a perfect base to take on classic hikes such as the Three Sisters of Glencoe, beautiful climbs on Buachaille Etive Mor, or a relaxed walk to the Glencoe Lochan. <br> <br> At the start at Sem 2 we’ll be heading back to Glencoe, but this time there’s likely to be some snow on the hills. Note that it’s essential you have had winter skills training to attend this trip, but fear not as we will have some professional guides in attendance to run training for those who don’t yet have it."
            break;

        case "braemar":
            dates.innerHTML = "08/11/2024 - 10/11/2024";
            title.innerHTML = "Braemar Weekend Trip";
            image.innerHTML = '<img class="mySlides" src="res/braemar1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/braemar2.JPG">'
                + '<img class="mySlides" src="res/braemar3.JPG">'
                + '<img class="mySlides" src="res/braemar4.JPG">'
                + '<img class="mySlides" src="res/braemar5.JPG">';
            info.innerHTML = "Situated right within the Cairngorm national park, and one of the most beautiful areas of Scotland, there will be ample opportunity for getting some munros in. If that’s not your style there are heaps of lovely lowland walks, and some nice wee cafes for a hot chocolate afterwards."
            break;

        case "kincraig":
            dates.innerHTML = "07/02/2025 – 09/02/2025";
            title.innerHTML = "Kincraig Weekend Trip";
            image.innerHTML = '<img class="mySlides" src="res/kincraig1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/kincraig2.JPG">'
                + '<img class="mySlides" src="res/kincraig3.JPG">'
                + '<img class="mySlides" src="res/kincraig4.JPG">'
                + '<img class="mySlides" src="res/kincraig5.JPG">';
            info.innerHTML = "Our next winter trip of the semester is to Kincraig in the Northern Cairngorms. The Kincraig Community Hall is a perfect base for winter hillwalking and climbing. Once again winter skills are essential for this trip and we will have guides to take people out."
            break;

        case "nevis":
            dates.innerHTML = "14/03/2025 - 16/03/2025";
            title.innerHTML = "Ben Nevis Weekend Trip";
            image.innerHTML = '<img class="mySlides" src="res/nevis1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/nevis2.JPG">'
                + '<img class="mySlides" src="res/nevis3.JPG">'
                + '<img class="mySlides" src="res/nevis4.JPG">'
                + '<img class="mySlides" src="res/nevis5.JPG">';
            info.innerHTML = "Our biggest winter weekend trip of the term! This isn’t one to miss as we will be heading to Roybridge hall to scale Ben Nevis, CMD and the surrounding Munros. Remember it is winter and to come prepared!"
            break;

        case "torridon":
            dates.innerHTML = "07/04/2025 – 12/04/2025";
            title.innerHTML = "Torridon Trip";
            image.innerHTML = '<img class="mySlides" src="res/torridon1.JPG" style="display: block;">'
                + '<img class="mySlides" src="res/torridon2.JPG">'
                + '<img class="mySlides" src="res/torridon3.JPG">'
                + '<img class="mySlides" src="res/torridon4.JPG">'
                + '<img class="mySlides" src="res/torridon5.JPG">';
            info.innerHTML = "The most highly anticipated event in the SUMC calendar, we’ll be heading to the far north of Scotland for a whole week! Some of Scotland’s best bouldering, loads of stunning Munros, beautiful sandy beaches. This is the trip with the most shenanigans and it is not to be missed!"
            break;
    }
}

