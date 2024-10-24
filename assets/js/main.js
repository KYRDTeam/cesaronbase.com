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

const slapSound = new Audio();
slapSound.src = "./assets/sounds/slap.mp3";

const slapTitle = new SplitText(".sc-title", { type: "words, chars" });
const slapSubTitle = new SplitText(".sc-subtitle", { type: "words" });
const slapDisplay = new SplitText(".sc-no", { type: "words, chars" });

gsap.set(".sc-title, .sc-subtitle, .sc-no", { transformOrigin: '50% 50%' })
gsap.set(".slap-message", { scaleX: 0, transformOrigin: '0% 50%' })

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

const intro = gsap.timeline({ });

intro 
    .to('.wrapper, .header, .footer', {       
        duration: .5,
        autoAlpha: 1,
        ease: "power1.out",
    })
    .from('.header-left', {       
        duration: .3,
        xPercent: -100,
        autoAlpha: 0,
        ease: "power1.out",
        transformOrigin: '0% 50%'
    }, ">-.3")   
    .from('.follow-us', {       
        duration: .3,
        xPercent: 50,
        autoAlpha: 0,
        ease: "power1.out",
        transformOrigin: '100% 50%'
    }, ">-.3")    
    .from('.logo ', {       
        duration: .5,
        scale: .7,
        autoAlpha: 0,
        rotate: 180,
        ease: "power1.out",
    }, ">-.1")        
    .from('.follow-us strong', {       
        duration: .5,            
        y: "1.5vh",
        autoAlpha: 0,
        ease: "power1.out",
    }, ">-.5")
    .from('.follow-icon', {       
        duration: .5,
        stagger: .1,
        scale: .7,
        autoAlpha: 0,
        ease: "power1.out",
        transformOrigin: '50% 50%'
    }, ">-.3")
    .from('.chain-address, .main-menu, .slap-leaderboard', {       
        duration: .5,
        stagger: .1,
        y: gsap.utils.wrap(["1.5vh","-1.5vh","-1.5vh"]),
        autoAlpha: 0,
        ease: "power1.out",
    }, ">-.6")
    .from('.menu-btn', {       
        duration: .3,
        scale: .8,
        y: "-1.5vh",
        rotate: 180,
        autoAlpha: 0,
        ease: "power1.out",
    }, ">-.6")
    .from(slapTitle.chars, {       
        duration: .5,
        stagger: {
            each: 0.05,
            from: "left",
            grid: "auto"
        },
        autoAlpha: 0,            
        y: "4.4vh",
        ease: "power1.out"
    }, "1")
    .from(slapSubTitle.words, {       
        duration: .5,
        stagger: {
            each: 0.05,
            from: "left",
            grid: "auto"
        },
        autoAlpha: 0,
        y: "3.4vh",
        ease: "power1.out"
    }, "1.1")
    .from(slapDisplay.chars, {       
        duration: .5,
        stagger: {
            each: 0.05,
            from: "left",
            grid: "auto"
        },
        autoAlpha: 0,
        y: "5.4vh",
        ease: "power1.out"
    }, "1.1");

 
/* ***************************************************************** */

if (isMobile || isIPad || isSamsungBrowser) {

    $("html").addClass("mobile");
    $("html").removeClass("desktop");

    $("#slap-button-1").on("click", function () {  
        countClicks('Pepe');
        slapSound.play();
        tlSlapCL1.restart();
    });

    $("#slap-button-2").on("click", function () {  
        countClicks('Andy');
        slapSound.play();
        tlSlapCL2.restart();
    });

    $("#slap-button-3").on("click", function () {  
        countClicks('Brett');
        slapSound.play();
        tlSlapCL3.restart();
    });

    $("#slap-button-4").on("click", function () {  
        countClicks('Wolf');
        slapSound.play();
        tlSlapCL4.restart();
    });

    // $("#slap-button-1").on("touchstart", function () {  
    //     countClicks('Pepe');
    //     slapSound.play();
    //     tlSlapMD1.restart();
    // });

    // $("#slap-button-1").on("touchend", function () { 
    //     tlSlapMU1.restart();
    // });

    // $("#slap-button-2").on("touchstart", function () {     
    //     countClicks('Andy'); 
    //     slapSound.play();
    //     tlSlapMD2.restart();
    // });

    // $("#slap-button-2").on("touchend", function () {     
    //     tlSlapMU2.restart();
    // });

    // $("#slap-button-3").on("touchstart", function () {      
    //     countClicks('Brett');
    //     slapSound.play();
    //     tlSlapMD3.restart();
    // });

    // $("#slap-button-3").on("touchend", function () {      
    //     tlSlapMU3.restart();
    // });

    // $("#slap-button-4").on("touchstart", function () {      
    //     countClicks('Wolf');
    //     slapSound.play();
    //     tlSlapMD4.restart();
    // });

    // $("#slap-button-4").on("touchend", function () {  
    //     tlSlapMU4.restart();
    // });

} else {

    $("html").removeClass("mobile");
    $("html").addClass("desktop");

    $("#slap-button-1").on("mousedown", function () {  
        countClicks('Pepe');
        slapSound.play();
        tlSlapMD1.restart();
    });
    
    $("#slap-button-1").on("mouseup", function () { 
        tlSlapMU1.restart();
    });

    $("#slap-button-2").on("mousedown", function () {     
        countClicks('Andy'); 
        slapSound.play();
        tlSlapMD2.restart();
    });
    
    $("#slap-button-2").on("mouseup", function () {     
        tlSlapMU2.restart();
    });

    $("#slap-button-3").on("mousedown", function () {      
        countClicks('Brett');
        slapSound.play();
        tlSlapMD3.restart();
    });
    
    $("#slap-button-3").on("mouseup", function () {      
        tlSlapMU3.restart();
    });

    $("#slap-button-4").on("mousedown", function () {      
        countClicks('Wolf');
        slapSound.play();
        tlSlapMD4.restart();
    });
    
    $("#slap-button-4").on("mouseup", function () {  
        tlSlapMU4.restart();
    });

}

/* ***************************************************************** */
/* ***************************************************************** */

var count = 0;
var countDisplay = document.getElementById("countDisplay");

function countClicks(memeName) {
    count = count + 1;
    
    countDisplay.innerHTML = count;

    $.ajax({
        url: "https://api.cesaronbase.com/slap",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: {
            meme_name: memeName
        },
        success: function(response) {
            console.log("Request successful:", response);
            updateAndyCount();
        },
        error: function(xhr, status, error) {
            console.error("Request failed:", status, error);
        }
    });

}

function updateAndyCount() {
    $.ajax({
        url: "https://api.cesaronbase.com/count_slaps",
        type: "GET",
        success: function(response) {
            document.getElementById("andy-count").innerText = response.Andy;
            document.getElementById("brett-count").innerText = response.brett;
            document.getElementById("pepe-count").innerText = response.pepe;
            document.getElementById("wolf-count").innerText = response.Wolf;
            document.getElementById("total-slap").innerText = response.total;
        },
        error: function(xhr, status, error) {
            console.error("Request failed:", status, error);
        }
    });
}

updateAndyCount();

/* ***************************************************************** */
/* ***************************************************************** */

function reportWindowSize() {
    window.location.reload();
}

window.onresize = reportWindowSize;

window.onorientationchange = reportWindowSize;
