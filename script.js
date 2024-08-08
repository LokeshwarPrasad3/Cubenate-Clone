// make mouse follower in one line

Shery.mouseFollower();
// make magnet effect

// make smooth scrolling

// locomotive js for smooth-scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.makeMagnet(".magnet");

// image zoomer
Shery.imageMasker(".masker" /* Element to target.*/, {
    //Parameters are optional.
    // mouseFollower: true,
    // text: "Love",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate(".animate-text" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

// circle magnet effects
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./videos/0.mp4", "./videos/2.mp4", "./videos/3.mp4"],
    // videos: ["./videos/01.mp4", "./videos/08.mp4", "./videos/03.mp4"]
    // images: ["./images/01.jpg", "./images/02.jpg", "./images/03.jpg"]
});


// gsap.to(".fleftlm", {
//     // scrollTriger for stop screen at top top
//     scrollTrigger: {
//         trigger: "#fimages",
//         pin: true,
//         start: "top top",
//         end: "bottom bottom",
//         endTrigger: ".last",
//         // animate image during scroll
//         scrub: 1,
//     },
//     // how much y axis scroll
//     y: "-300%",
//     ease: Power1
// })


// let sections = document.querySelectorAll(".fleftlm")
// console.log(sections)

// parent of images
// Shery.imageEffect(".images", {
//     style: 2, //Select Style
//     debug: true, // Debug Panel
//     config: { onMouse: { value: 1 } },
//     slideStyle: (setScroll) => {
//         sections.forEach(function (section, index) {
//             ScrollTrigger.create({
//                 trigger: section,
//                 start: "top top",
//                 scrub: 0,
//                 onUpdate: function (prog) {
//                     console.log(setScroll)
//                     console.log(prog.progress)
//                     setScroll(prog.progress + index)
//                 }
//             })
//         })
//     }
// });

