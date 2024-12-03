const mainTitle = new SplitText(".main-title", { type: "words" });
const bgTxt = new SplitText(".background-txt span", { type: "words" });

gsap.set(
  ".item-head-front, .item-head-side, .item-head-side-more, .item-head-turned, .item-head-side-right, .item-head-side-more-right, .item-head-turned-right, .item-crown, .item-red-candle, .item-green-candle",
  { autoAlpha: 0, scale: 0.98, transformOrigin: "50% 50%" }
);

/* ***************************************************************** */

const introPFP = gsap.timeline({});

introPFP
  .to(".pfp-creator-section", {
    duration: 0.1,
    autoAlpha: 1,
    ease: "power1.out",
  })
  .from(
    mainTitle.words,
    {
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "left",
        grid: "auto",
      },
      autoAlpha: 0,
      y: "4.4vh",
      ease: "power1.out",
    },
    ">+.2"
  )
  .from(
    ".upload-section-image",
    {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      y: "2.4vh",
      ease: "power1.out",
    },
    ">-.3"
  )
  .from(
    ".upload-elements-buttons",
    {
      duration: 0.5,
      autoAlpha: 0,
      y: "2.4vh",
      ease: "power1.out",
    },
    ">-.3"
  );

/* ***************************************************************** */

const bgTxtPFP = gsap.timeline({ repeat: -1 });

bgTxtPFP
  .from(bgTxt.words, {
    duration: 0.5,
    stagger: 0.1,
    autoAlpha: 0,
    ease: "power1.out",
  })
  .fromTo(
    ".background-txt-wrapper",
    {
      x: "100vw",
    },
    {
      duration: 50,
      xPercent: -100,
      ease: "none",
    },
    ">-.5"
  )
  .to(
    bgTxt.words,
    {
      duration: 0.5,
      stagger: {
        each: 0.1,
        from: "end",
      },
      autoAlpha: 0,
      ease: "power1.out",
    },
    ">-.5"
  );

/* ***************************************************************** */

/* start --- after upload image this have to be deleted */

$(".upload-section-image, #pfp-upload-btn").on("click", function (e) {
  $("body").addClass("view-user-image");
  $("body").addClass("view-upload-elements");
  $("body").addClass("view-upload-elements-buttons");
});

/* end --- after upload image this have to be deleted */

/* ***************************************************************** */

$(".ue-button").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    $(this).addClass("active");
  } else {
    $(this).removeClass("active");
  }
});

$(".trigger-cesar-head-front").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-front", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-front", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-cesar-head-side").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-side", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-side", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-cesar-head-side-more").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-side-more", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-side-more", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-cesar-head-turned").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-turned", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-turned", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-cesar-head-side-right").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-side-right", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-side-right", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-cesar-head-side-more-right").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-side-more-right", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-side-more-right", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-cesar-head-turned-right").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-head-turned-right", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-head-turned-right", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-crown").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-crown", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-crown", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-red-candle").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-red-candle", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-red-candle", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

$(".trigger-green-candle").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    gsap.to(".item-green-candle", {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.98,
      ease: "power1.out",
    });
  } else {
    gsap.to(".item-green-candle", {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "power1.out",
    });
  }
});

/* ***************************************************************** */

/* handle logic to upload & export pfp */
$("#pfp-input").on("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      $("#pfp-preview").attr("src", e.target.result);
      $(".upload-section-image")[0].style.width = "auto";
      $(".upload-section-image")[0].style.height = "400px";
    };
    reader.readAsDataURL(file);
  }
});

// using lib html2canvas to export image
$("#export-pfp-btn").on("click", function () {
  const elementToCapture = document.getElementById("pfp-image"); // Change this selector to the element you want to capture

  html2canvas(elementToCapture, { scale: 4 })
    .then((canvas) => {
      // Export the canvas as an image
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "pfp-image.png";
      link.click();
    })
    .catch((error) => {
      console.error("Error capturing the element:", error);
    });
});
