// this file is for handeling scroll animation 


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        spans.forEach(span =>
            {
                if(entry.isIntersecting){
                    span.classList.add('animate')
                }else{
                    span.classList.remove('animate')
                }
            })  
    })
})

const skillContainer = document.querySelector('.skills-container')
const spans = document.querySelectorAll('.bar span')
observer.observe(skillContainer)



//  using scroll reveal to handle the scroll animation of each section 

// get header of each section
const skillsHeader = document.querySelector('.skills-header')
const projectHeader = document.querySelector('.project-header')
const backgroundHeader = document.querySelector('.background-header')
const blogHeader = document.querySelector('.blog-header')
const contactHeader = document.querySelector('.contact-header')



// home section
const homeLeft = document.querySelector('.home-left')
const homeRight = document.querySelector('.right')

// strength section
const strength = document.querySelector('.strength')
const strengthColumns = document.querySelectorAll('.strength-column')

// about section
const about = document.querySelector('.about')
const aboutLeft = document.querySelector('.about-left')
const aboutRight = document.querySelector('.about-right')

// skills section
const skillsContainer = document.querySelector('.skills-container')


// projects section
const laptopOne = document.querySelector('.laptop-container-one')
const laptopTwo = document.querySelector('.laptop-container-two')
const laptopThree = document.querySelector('.laptop-container-three')
const laptopFour = document.querySelector('.laptop-container-four')
const textOne = document.querySelector('.project-text-one')
const textTwo = document.querySelector('.project-text-two')
const textThree = document.querySelector('.project-text-three')
const textFour = document.querySelector('.project-text-four')

// background section
const backgroundLeft = document.querySelector('.background-left')
const backgroundRight = document.querySelector('.background-right')

// blog section

const gridContainer = document.querySelector('.grid-container')
const gridItems = document.querySelectorAll('.grid-item')

// contact section
const contactGridContainer = document.querySelector('.contact-grid-container')


const handleScrollReveal = () => {

    ScrollReveal({
        reset: true,
        distance: '10rem',
        duration: 2500,
        delay: 400
    })

    // headers
    const headers = [skillsHeader, projectHeader, backgroundHeader, blogHeader, contactHeader]

    if(window.innerWidth > 991.98){
        headers.forEach(header => {
            ScrollReveal().reveal(header, {delay: 500, origin: 'left'});
        })

        // home section
        ScrollReveal().reveal(homeLeft, {delay: 600, origin: 'left'});
        ScrollReveal().reveal(homeRight, {delay: 600, origin: 'right'});
    
        // strength
        ScrollReveal().reveal(strength, {delay: 600, origin: 'bottom'});
        ScrollReveal().reveal(strengthColumns, {delay: 500, origin: 'bottom', interval: 200})
        
        // about
        ScrollReveal().reveal(about, {delay: 500, origin: 'bottom'});
        ScrollReveal().reveal(aboutLeft, {delay: 500, origin: 'left'});
        ScrollReveal().reveal(aboutRight, {delay: 500, origin: 'right'});
    
        // skills
        ScrollReveal().reveal(skillsContainer, {delay: 400});

        //project
        ScrollReveal().reveal(laptopOne, {delay: 500, origin: 'right'});
        ScrollReveal().reveal(textOne, {delay: 500, origin: 'left'});

        ScrollReveal().reveal(laptopTwo, {delay: 500, origin: 'left'});
        ScrollReveal().reveal(textTwo, {delay: 500, origin: 'right'});

        ScrollReveal().reveal(laptopThree, {delay: 500, origin: 'right'});
        ScrollReveal().reveal(textThree, {delay: 500, origin: 'left'});

        ScrollReveal().reveal(laptopFour, {delay: 500, origin: 'left'});
        ScrollReveal().reveal(textFour, {delay: 500, origin: 'right'});
    
        // background
        ScrollReveal().reveal(backgroundLeft, {delay: 500, origin: 'left'});
        ScrollReveal().reveal(backgroundRight, {delay: 500, origin: 'right'});
    
        // blog
        ScrollReveal().reveal(gridContainer, {delay: 600, origin: 'bottom'});
        ScrollReveal().reveal(gridItems, {delay: 500, origin: 'bottom', interval: 200});
    
    
        // contact
        ScrollReveal().reveal(contactGridContainer, {delay: 500, origin: 'bottom'});
    }

    
    
}

handleScrollReveal()








