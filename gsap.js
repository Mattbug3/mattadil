

const dots = gsap.utils.toArray(".dot");
const details = gsap.utils.toArray(".details");
const photos = gsap.utils.toArray(".photo:not(:first-child)")

gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".photo")

gsap.set('.photo:not(:first-child)', { yPercent: 100 });

const animation = gsap.to('.photo:not(:first-child)', {
    yPercent: 0,
    duration: 0.7,
    stagger: 1
});

// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 1100px)", () => {

  // this setup code only runs when viewport is at least 600px wide

	
  ScrollTrigger.create({
    trigger: '.project-wrapper',
    start: "top top",
    end: "bottom bottom",
    pin: '.project-right',
    animation: animation,
    scrub: true,
    markers: false,
});



details.forEach((detail, i) => {

    let index; // Variable to store the index
    let headline = detail.querySelector(".project-title")
	let animation = gsap.timeline()
       .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})

    ScrollTrigger.create({
        trigger: detail,
        start: "top 50%",
        end: "bottom 50%",
        animation:animation,
        scrub:true,
		markers:false,
        onToggle: (self) => {
            if (self.isActive) {
                dots[i].classList.add('active')
            }else{
                dots[i].classList.remove('active')
            }
        },
        stagger: 0.7,
    });
});

})