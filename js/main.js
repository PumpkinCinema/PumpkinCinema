
$(function () {
    function checkWidth() {
        if ($(window).width() <= 990) {
            $('.navbar').addClass('navbar-dark');
        } else {
            $('.navbar').removeClass('navbar-dark');
        }
    }

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// This JavaScript code uses jQuery to add or remove CSS classes based on certain conditions:

// The checkWidth function checks the width of the window. If the width is less than or equal to 990px, it adds the navbar-dark class to elements with the navbar class. If the width is greater than 990px, it removes the navbar-dark class.

// The checkWidth function is called immediately when the page loads to set the initial state.

// The checkWidth function is also bound to the window's resize event. This means that whenever the window is resized, the function is called again, checking the new width and adding or removing the navbar-dark class as necessary.

// The scroll event of the window is also being listened to. When the window is scrolled and the scroll distance is more than 10, the active class is added to elements with the navbar class. If the scroll distance is less than or equal to 10, the active class is removed.


// JS for the BookTicket page 
window.onload = () => {
    for(let i = 0; i < 8; i++){
        let date = new Date();
        date.setDate(date.getDate() + i);
        document.getElementById("select-day" + (i + 1) + "-z").innerHTML = date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[2];
    }
    // return true;
}

//seat click event
const selectBox = document.querySelector(".select-zone-z");
const pickedSeat = document.getElementById("picked-seat-z");

selectBox.addEventListener("click",
    e => {
        if (
            e.target.classList.contains("seat-z") &&
            !e.target.classList.contains("seat-occupied-z")
        ) {
            e.target.classList.toggle("seat-selected-z");
        }

        const picked = [];
        let seats = document.getElementsByClassName("seat-selected-z");
        for (let i = 0; i < seats.length; i++) {
            picked[i] = seats[i].getAttribute("data-value") + " ";
        }
        pickedSeat.innerText = picked.toString();


    });




 

// JS for the WhatsOn page 
