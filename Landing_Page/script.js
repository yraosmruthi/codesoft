function page1ani() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    delay: 0.8,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(".centerp1 h1", {
    x: -500,
    duration: 0.6,
    opacity: 0,
  });

  tl.from(".centerp1 p", {
    x: -500,
    duration: 0.6,
    opactity: 0,
  });

  tl.from(".centerp1 button", {
    opacity: 0,
    duration: 0.8,
  });

  tl.from(
    ".centerp2 img",
    {
      // opacity:0,
      duration: 0.6,
    },
    "-=1.5"
  );

  tl.from(".section1 img", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
  });
}

page1ani();

// gsap.from(".services h3",{
//     x:-100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// "start: top 50%": When .section2's top edge enters halfway down the screen
// "end: top 0%": When .section2's top edge reaches the very top of the screen
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

tl2.from(".services", {
  y: 30,
  opacity: 0,
});

tl2.from(".elem.line1.left", {
  x: -300,
  opacity: 0,
  duration: 1.5,
});

tl2.from(".elem.line1.right", {
  x: 300,
  opacity: 0,
  duration: 1.5,
});

tl2.from(".elem.line2.left", {
  x: -300,
  opacity: 0,
  duration: 1.5,
});

tl2.from(".elem.line2.right", {
  x: 300,
  opacity: 0,
  duration: 1.5,
});
