
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
window.onload = function(){
    for(let i = 0; i < 8; i++){
        let date = new Date();
        date.setDate(date.getDate() + i);
        document.getElementById("select-day" + (i + 1) + "-z").innerHTML = date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[2];
    }
    return true;
}

//seat click event
const selectBox = document.querySelector(".select-zone-z");
const pickedSeat = document.getElementById("picked-seat-z");
const totalPrice = document.getElementById("total-price-z");
const selectMovie = document.getElementById("select-movie-z");
const picked=[];


selectBox.addEventListener("click",
    e => {
        if (
            e.target.classList.contains("seat-z") &&
            !e.target.classList.contains("seat-occupied-z")
        ) {
            e.target.classList.toggle("seat-selected-z");
        }

        let seats = document.getElementsByClassName("seat-selected-z");
        picked.length = 0;  //reset array
        for (let i = 0; i < seats.length; i++) {
            picked[i] = seats[i].getAttribute("data-value") + " ";
        }
        
        pickedSeat.innerText = picked.toString();
        calculateTotalPrice();

    });

function calculateTotalPrice() {
    let moviePrice = selectMovie.options[selectMovie.selectedIndex].value;
    totalPrice.innerText = picked.length * moviePrice;
}

function toBooking(){
    let x = confirm("Do you want to buy ticket for this movie?");
    if(x == true){
        window.location.href="BookTicket.html";
    }
}

let form = document.querySelector('form');
const email = document.getElementById("input-email-z");

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;

    if (!regex.test(s)) {
        event.preventDefault();
        alert("Invalid Email");

    }else if(picked.length == 0){
        alert("Please select seats.");

    }else{
       alert("Booking Success!")
    }

});
