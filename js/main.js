// -------------- navbar js ----- @Yinglian Deng------------
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

// ------------ About us FORM -------------- @Yinglian Deng------------
const email = document.getElementById("le-mail");
const message = document.getElementById("l-message");
const button = document.getElementById("l-submit");

button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    let emailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let emailValue = email.value;
    let emailError = false;

    if (emailRegex.test(emailValue)) {
        emailError = true;

        let messageValue = message.value;
        let messageError = false;

        if (messageValue.length > 0) {
            messageError = true;
        } else {
            alert("Please enter your message!");
        }

        if (emailError && messageError) {
            alert("Thanks for your feedback!");
            location.reload();
        }
    } else {
        alert("Please enter a valid email address!");
    }
});


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



        // JS for the BookTicket and WhatsOn page -- @Zhenghao-Cui
        window.onload = function () {
            for (let i = 0; i < 8; i++) {
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
        const picked = [];

        // seat click event
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

        // if user select a movie, then click ok, then turn to booking page
        function toBooking() {
            let x = confirm("Do you want to buy ticket for this movie?");
            if (x == true) {
                window.location.href = "BookTicket.html";
            }
        }

        let form = document.querySelector('form-z');
        const emailz = document.getElementById("input-email-z");

        // Add a submit event listener to the form,
        // validate the email,
        // validate the seat selection
        form.addEventListener('submit', (event) => {

            let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            let s = emailz.value;

            if (!regex.test(s)) {
                event.preventDefault();
                alert("Invalid Email");

            } else if (picked.length == 0) {
                alert("Please select seats.");

            } else {
                alert("Booking Success!")
            }
        });
