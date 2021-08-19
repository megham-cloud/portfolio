console.log("Your index.js file is loaded correctly!");

$("body").css("display", "none");

$(document).ready(function () {
    // Fade in page on load
    $("body").fadeIn(1000);

    // Smooth scroll 
    $(".scroll").on("click", function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top - 96
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    }); 

});

// Responsive Top Navigation
function myFunction() {

    var y = document.getElementById("myLinks");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

}

// Display for myLinks
var mql = window.matchMedia('(max-width: 768px)');

mql.onchange = function(e) {
    if (e.matches) {
        document.getElementById("myLinks").style.display = "none";
    } else {
        document.getElementById("myLinks").style.display = "block";
    }
}


    // let mql = window.matchMedia("(width: 768px)");

    // if (window.innerWidth >= mql.matches) {
    //     console.log("Wassup??");
    // }


    // var x = document.getElementById("topNav");
    // if (x.className === "topNav") {
    //     x.className += ".responsive";
    // } else {
    //     x.className = "topNav";
    // }
    // Display links for top navigation
    // function myFunction() {
    //     var x = document.getElementById("myLinks");
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //     } else {
    //         x.style.display = "block";
    //     }
    // }    
