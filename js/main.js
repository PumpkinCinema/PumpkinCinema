
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
        let day = date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[2];
        document.getElementById("select-day" + (i + 1) + "-z").innerHTML = day;
    }

}



// JS for the WhatsOn page
