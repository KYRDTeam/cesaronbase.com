$('.slap-leaderboard .sl-header').on("click", function () {     
    
    if (!$(this).parent().hasClass("active")) {
        $(this).parent().addClass("active");
    } else { 
        $(this).parent().removeClass("active");
    }
});

/* ***************************************************************** */

$('.menu-btn').on("click", function (e) {
    $('body').removeClass("view-menu");
    if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $('body').addClass("view-menu");
        menuBtnTl.play();
        menuTl.play();

    } else {
        $(this).removeClass("active");
        $('body').removeClass("view-menu");
        menuBtnTl.reverse();
        menuTl.reverse();
    }
});

// close menu on click outside
$(document).on("click", function (e) {
    var target = $(e.target);
    if (!target.closest(".slap-leaderboard").length) {
        $(".slap-leaderboard").removeClass("active");
    }
});

/* ***************************************************************** */

gsap.set('.menu-line', { transformOrigin: '100% 50%' });
gsap.set('.menu-line-1', { y: -26 });
gsap.set('.menu-line-3', { y: 26 });
gsap.set('.menu-delete-line', { transformOrigin: '50% 50%' });

const menuBtnTl = gsap.timeline({ paused: true });

menuBtnTl
    .to('.menu-line', {
        duration: .6,
        scaleX: 1,
        y: 0,
        transformOrigin: '50% 50%',
        ease: "back.in"
    })
    .to('.menu-line', {
        duration: .6,
        scaleX: .15,
        ease: "back.out"
    }, '>-.05')
    .from('.menu-delete-line', {
        duration: .6,
        x: gsap.utils.wrap([-60, 60, 60, -60]),
        y: gsap.utils.wrap([-60, -60, 60, 60]),
        ease: "back.out"
    }, '>-.5');

var menuTl = gsap.timeline({ paused: true });

menuTl
    .to('.main-menu', {
        duration: .5,
        autoAlpha: 1,
        ease: "power3.inOut"
    });

/* ***************************************************************** */

