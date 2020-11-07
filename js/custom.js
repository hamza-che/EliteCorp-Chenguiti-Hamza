$(function () {

    // Adjust Slider Height
    var upperBarHeight = $(".upper-bar").innerHeight(),
        navbarHeight = $(".navbar").innerHeight(),
        windowHeight = $(window).innerHeight();

    $(".slider, .carousel-item").height(windowHeight - (upperBarHeight + navbarHeight));

    // Overlay visible on hovering
    $(".featured-work .images .image").mouseenter(function () {
        $(this).children(".overlay").fadeIn()
    })
    $(".featured-work .images .image").mouseleave(function () {
        $(this).children(".overlay").fadeOut()
    })

    // Shuffler Images
    $(".featured-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("image") === "all") {
            $(".featured-work .images .image").fadeIn(500)
        } else {
            $(".featured-work .images .image").fadeOut(500);
            $($(this).data("image")).fadeIn(500).siblings().remove()
        }
    })

    // Testims Carousel
    function checkTestims() {
        $(".testims .testimonials .testim:first").hasClass("active") ? $(".testims i.left").fadeOut() : $(".testims i.left").fadeIn()
        $(".testims .testimonials .testim:last").hasClass("active") ? $(".testims i.right").fadeOut() : $(".testims i.right").fadeIn()
    }
    checkTestims()

    $(".testims i").on("click", function () {
        if ($(this).hasClass("right")) {
            $(".testims .testim.active").fadeOut(200, function () {
                $(this).removeClass("active").next(".testim").addClass("active").fadeIn();
                checkTestims()
            });
        } else {
            $(".testims .testim.active").fadeOut(200, function () {
                $(this).removeClass("active").prev(".testim").addClass("active").fadeIn()
                checkTestims()
            })
        }
    })

    $(".testims .bullets li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $($(this).data("testim"))
    })

    // Up Button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= $(".features").offset().top) {
            $(".up-button i").fadeIn()
        } else {
            $(".up-button i").fadeOut()
        }
    })

    $(".up-button i").on("click", function () {
        $("html, body").animate({
            "scrollTop": 0
        }, 500)
    })

    // Scrolling To Site Sections
    $(".nav-item").on("click", function () {
        $("html, body").animate({
            "scrollTop": $($(this).data("scroll")).offset().top
        }, 500)
    })
})

