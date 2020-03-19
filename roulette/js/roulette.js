$(function () {
    $('.rotating-slider.rotating01').rotatingSlider({

        // auto play
        autoRotate: false,
        slideAngle: 0,
        activeClasses: "cs",

        // auto play interval
        autoRotateInterval: 6000,

        // is draggable?
        draggable: false,

        // slider controls
        directionControls: true,
        directionLeftText: '&lsaquo;',
        directionRightText: '&rsaquo;',

        // animation speed
        rotationSpeed: 750,

        // size of slider
        slideHeight: 180,
        slideWidth: 300,




    });
});


$(function () {
    $('.rotating-slider#roulette02').rotatingSlider({

        // auto play
        autoRotate: false,
        slideAngle: 0,
        activeClasses: "cs",

        // auto play interval
        autoRotateInterval: 6000,

        // is draggable?
        draggable: false,

        // slider controls
        directionControls: true,
        directionLeftText: '&lsaquo;',
        directionRightText: '&rsaquo;',

        // animation speed
        rotationSpeed: 750,

        // size of slider
        slideHeight: 180,
        slideWidth: 300,




    });
});


$(function () {
    $('.rotating-slider#roulette03').rotatingSlider({

        // auto play
        autoRotate: false,
        slideAngle: 360,
        activeClasses: "cs",

        // auto play interval
        autoRotateInterval: 6000,

        // is draggable?
        draggable: false,

        // slider controls
        directionControls: true,
        directionLeftText: '&lsaquo;',
        directionRightText: '&rsaquo;',

        // animation speed
        rotationSpeed: 750,

        // size of slider
        slideHeight: 180,
        slideWidth: 300,



    });
});



$(function () {
    $(".slide04").addClass("sd__prev");
    $(".slide02").addClass("sd__next");


    $(".direction-controls li button").on("click load", function () {
        $("#slider.slides li").removeClass("sd__next");
        $("#slider.slides li").removeClass("sd__prev");
        if ($(".slide01").hasClass("active-slide")) {

            $(".slide02").addClass("sd__next");
            $(".slide04").addClass("sd__prev");
        }


        if ($(".slide02").hasClass("active-slide")) {

            $(".slide03").addClass("sd__next");
            $(".slide01").addClass("sd__prev");
        }

        if ($(".slide03").hasClass("active-slide")) {

            $(".slide04").addClass("sd__next");
            $(".slide02").addClass("sd__prev");
        }

        if ($(".slide04").hasClass("active-slide")) {

            $(".slide01").addClass("sd__next");
            $(".slide03").addClass("sd__prev");
        }



    });
});
