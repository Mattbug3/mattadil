
// this file is for handeling navbar menu button on small devices

document.addEventListener('DOMContentLoaded', function () {
const navLinks = document.querySelector('.nav-links');
const icon = document.querySelector('.icon');

function toggleNavbar() {
    navLinks.classList.toggle('active');
    icon.classList.toggle('active');

    console.log('Before Toggle - navLinks:', navLinks.getBoundingClientRect());
    console.log('After Toggle - navLinks:', navLinks.getBoundingClientRect());
}

document.querySelector('.toggle-btn').addEventListener('click', function () {
    toggleNavbar();
});


// Close navbar when a link is clicked (optional)
navLinks.addEventListener('click', function () {
    if (navLinks.classList.contains('active')) {
        toggleNavbar();
    }
});
});



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
    const nameImage = document.querySelector('.image-reveal')
    const navLinks = document.querySelector('nav-links')
        if(window.scrollY > 150){
            navbar.classList.add('fixed')
        }else{
            navbar.classList.remove('fixed')
        }

})

const educations = document.querySelectorAll('.education')
const certifications = document.querySelectorAll('.certification')





educations.forEach((education, index) => {
    certifications.forEach((certification, i) => {

        const educationHeight = education.getBoundingClientRect().height

        const certificationHeight = certification.getBoundingClientRect().height

        const maxHeight = Math.max(educationHeight, certificationHeight)

        if(index === i){
            education.style.minHeight = `${maxHeight}px`
            certification.style.minHeight = `${maxHeight}px`
        }

    })
    
    
})



const contactInputContainer = document.querySelector('.contact-input-container')

const contactInfoContainer = document.querySelector('.contact-info-container')

const form = document.querySelector('.form')

const contactInputContainerHight = contactInfoContainer.getBoundingClientRect().height

const contactInfoContainerHight = contactInfoContainer.getBoundingClientRect().height

const conatctMaxHeight = Math.max(contactInfoContainerHight, contactInputContainerHight)

if(window.innerWidth > 780){
    contactInfoContainer.style.height = `${conatctMaxHeight}px`
    contactInputContainer.style.height = `${conatctMaxHeight}px`
}else{
    contactInfoContainer.style.height = '100%'
    contactInputContainer.style.height = '100%'
}


