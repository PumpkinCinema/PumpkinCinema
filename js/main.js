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


//Membership form validation - @Bintong
function validateMembership() {
    var fname = document.getElementById("fname-b").value;
    var lname = document.getElementById("lname-b").value;
    var email = document.getElementById("email-b").value;
    var passwd = document.getElementById("passwd-b").value;
    var phonenumber = document.getElementById("phonenumber-b").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // emailRegex line: Accessed December 2, 2023. Retrieved from https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    var agreeTandC = document.querySelector('input[name="agreeTandC"]:checked');

    if (fname == null || fname == "") {
        alert("First name can't be blank");
        return false;
    } else if (lname == null || lname == "") {
        alert("Last name can't be blank");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    } else if (passwd == null || passwd == "") {
        alert("Password can't be blank & must be at least 8 characters long.");
        return false;
    } else if (passwd.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    } else if (phonenumber.length !== 10) {
        alert("Please enter a valid phone number (10 digits)");
        return false;
    } else if (!agreeTandC || agreeTandC.value == "no") {
        alert("Terms and conditions must be agreed to register an account.");
        return false;
    }
    return true;
}

//Membership form submit - @Bintong
function submitb() {
    alert("Thank you for your registration!");
}

//Game - Ice cream of the day - @Bintong
function iceCreamOfTheDay() {
    var messageB;
    var inputB = prompt("To find out the half price ice cream of the day, please enter the day of today(ex: monday):", " ");

    if (inputB !== null && inputB !== '') {
        switch (inputB.toLowerCase()) {
            case 'monday':
                messageB = "Ice cream of the day: STRAWBERRY - HALF PRICE FOR €1.5 ONLY!";
                break;
            case 'tuesday':
                messageB = "Ice cream of the day: CHOCOLATE CHIP - HALF PRICE FOR €1.5 ONLY!";
                break;
            case 'wednesday':
                messageB = "Ice cream of the day: MINT CHOCOLATE CHIP - HALF PRICE FOR €1.5 ONLY!";
                break;
            case 'thursday':
                messageB = "Ice cream of the day: VANILLA - HALF PRICE FOR €1.5 ONLY!";
                break;
            case 'friday':
                messageB = "Ice cream of the day: STRAWBERRY CHEESECAKE - HALF PRICE FOR €1.5 ONLY!";
                break;
            case 'saturday':
                messageB = "Ice cream of the day: MANGO - HALF PRICE FOR €1.5 ONLY!";
                break;
            case 'sunday':
                messageB = "Ice cream of the day: COOKIES N' CREAM - HALF PRICE FOR €1.5 ONLY!";
                break;
            default:
                messageB = "Please enter a valid day!";
        }
        alert(messageB);
    } else {
        messageB = "Please enter a valid day!";
        alert(messageB);
    }
}

//Corresponding slider - @Bintong
let currentSlide = 0;

function changeSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.getElementById('slider-b');
    slider.scrollLeft = currentSlide * slider.clientWidth;
}

//Click on slider images - @Bintong
function eatAndDrinkDiscount() {
    let x = confirm("Members get 10% off food and free popcorn on birthday! Would you like to sign up today?");
    if (x == true) {
        window.open("Membership.html", "_blank");
    }
}