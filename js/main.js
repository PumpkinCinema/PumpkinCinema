
// JS for the main page 

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