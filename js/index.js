console.log("Your index.js file is loaded correctly!");

$("body").css("display", "none");

$(document).ready(function () {
    // Fade in page on load
    $("body").fadeIn(1000);
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

// Back to Top Button
var ebButton = document.getElementById("backtoEB");
var iftButton = document.getElementById("backtoIFT");
var ccButton = document.getElementById("backtoCC");

// When the user scrolls past "In this case study"
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollTop = $(window).scrollTop(),
        ebOffset = $("#backtoEB").elementOffset(),
        ebDistance = (ebOffset - scrollTop),
        iftOffset = $("#backtoIFT").elementOffset(),
        iftDistance = (iftOffset - scrollTop),
        ccOffset = $("backtoCC").elementOffset(),
        ccDistance = (ccOffset - scrollTop);
    
    if (ebDistance < 0 || iftDistance < 0 || ccDistance < 0) {
        ebButton.style.display = "block";
        iftButton.style.display = "block";
        ccButton.style.display = "block";
    } else {
        ebButton.style.display = "none";
        iftButton.style.display = "none";
        ccButton.style.display = "none";
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
