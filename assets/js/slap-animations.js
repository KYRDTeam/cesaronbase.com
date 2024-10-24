/* ***************************************************************** */

const tlSlapMD1 = gsap.timeline({ paused: true });

tlSlapMD1 
    .to('#slap-background-1', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })       
    .to('.slap-message-1', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    }); 

const tlSlapMU1 = gsap.timeline({ paused: true });

tlSlapMU1 
    .to('#slap-background-1', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    },">+.1")       
    .to('.slap-message-1', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    }); 
    
const tlSlapCL1 = gsap.timeline({ paused: true });

tlSlapCL1 
    .to('#slap-background-1', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })
    .to('.slap-message-1', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    },">+.15")

    .to('#slap-background-1', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    })    
    .to('.slap-message-1', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })    
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    }); 

const tlSlapMD2 = gsap.timeline({ paused: true });

tlSlapMD2 
    .to('#slap-background-2', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })       
    .to('.slap-message-2', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    }); 

const tlSlapMU2 = gsap.timeline({ paused: true });

tlSlapMU2 
    .to('#slap-background-2', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    },">+.1")       
    .to('.slap-message-2', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    }); 

const tlSlapCL2 = gsap.timeline({ paused: true });

tlSlapCL2 
    .to('#slap-background-2', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })
    .to('.slap-message-2', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    },">+.15")

    .to('#slap-background-2', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    })    
    .to('.slap-message-2', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })    
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    });  

const tlSlapMD3 = gsap.timeline({ paused: true });

tlSlapMD3 
    .to('#slap-background-3', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })       
    .to('.slap-message-3', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    }); 

const tlSlapMU3 = gsap.timeline({ paused: true });

tlSlapMU3 
    .to('#slap-background-3', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    },">+.1")       
    .to('.slap-message-3', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    });

const tlSlapCL3 = gsap.timeline({ paused: true });

tlSlapCL3 
    .to('#slap-background-3', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })
    .to('.slap-message-3', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    },">+.15")

    .to('#slap-background-3', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    })    
    .to('.slap-message-3', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })    
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    });  

const tlSlapMD4 = gsap.timeline({ paused: true });

tlSlapMD4 
    .to('#slap-background-4', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })       
    .to('.slap-message-4', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    }); 

const tlSlapMU4 = gsap.timeline({ paused: true });

tlSlapMU4 
    .to('#slap-background-4', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    },">+.1")       
    .to('.slap-message-4', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    });

    const tlSlapCL4 = gsap.timeline({ paused: true });

tlSlapCL4 
    .to('#slap-background-4', {       
        duration: 0,
        autoAlpha: 1,
        ease: "power1.out",
    })
    .to('.slap-message-4', {       
        duration: 0,
        display:"block",
        scaleX: 1,
        ease: "power1.out",
    })
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        stagger: .02,
        scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
        ease: "back.inOut",
    },">+.15")   

    .to('#slap-background-4', {       
        duration: 0,
        autoAlpha: 0,
        ease: "power1.in",
    })    
    .to('.slap-message-4', {       
        duration: 0,
        display:"none",
        scaleX: 0,
        ease: "power1.in",
    })    
    .to('.sc-title, .sc-subtitle, .sc-no', {       
        duration: 0,
        scale: gsap.utils.wrap([1, 1, 1]),
        ease: "back.inOut",
    }); 


