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
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    }); 

    

    });

    // Display links for top navigation
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }    
