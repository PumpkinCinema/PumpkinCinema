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


// This JavaScript code uses jQuery to add or remove CSS classes based on certain conditions:

// The checkWidth function checks the width of the window. If the width is less than or equal to 990px, it adds the navbar-dark class to elements with the navbar class. If the width is greater than 990px, it removes the navbar-dark class.

// The checkWidth function is called immediately when the page loads to set the initial state.

// The checkWidth function is also bound to the window's resize event. This means that whenever the window is resized, the function is called again, checking the new width and adding or removing the navbar-dark class as necessary.

// The scroll event of the window is also being listened to. When the window is scrolled and the scroll distance is more than 10, the active class is added to elements with the navbar class. If the scroll distance is less than or equal to 10, the active class is removed.

// $document.ready(function () {
//     $("#l-submit").click(function () {
//         alert("Thanks for your feedback!");
//     });
// });


// const email = document.getElementById("le-mail");
// email.addEventListener("blur", () => {
//     let regex =
//         /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//     let s = email.value;
//     if (regex.test(s)) {
//         alert("Thanks for your feedback!");
//         location.reload();
//         emailError = true;
//     } else {
//         alert("Please enter a valid email address!");
//         emailError = false;
//     }
// });

// // valid l-message
// const message = document.getElementById("l-message");
// message.addEventListener("blur", () => {
//     // let regex = /^[a-zA-Z0-9\s,'-]*$/;
//     let s = message.value;
//     if (s.length > 0) {
//         alert("Thanks for your feedback!");
//         location.reload();
//         messageError = true;
//     } else {
//         alert("Please enter your message!");
//         messageError = false;
//     }
// });

const email = document.getElementById("le-mail");
const message = document.getElementById("l-message");
const button = document.getElementById("l-submit"); // Replace with your button's ID

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
