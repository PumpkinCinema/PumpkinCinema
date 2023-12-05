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
