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
