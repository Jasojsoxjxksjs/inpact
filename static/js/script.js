
const navAdd = document.querySelector('.nav_add i');
const navX = document.querySelector('.nav_x i');
const nav = document.querySelector('.nav_link');
const header = document.querySelector('.header');


navAdd.addEventListener('click' , () =>{
    nav.classList.add('left');
    document.body.style.backgroundColor = '#fff';
})


navX.addEventListener('click' , () =>{
    nav.classList.remove('left');
})


// header

window.onscroll = function(){
    if(this.scrollY>= 100){
        header.classList.add('header_blac');
    }else{
        header.classList.remove('header_blac');
    }
}

document.querySelector('.play-button').addEventListener('click', function() {
    alert('Play video');
});

// 

let currentIndx = 0;
const item = document.querySelectorAll('.carousel-ite');
const dots = document.querySelectorAll('.dot');


function updateCarous() {
    item.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndx * 100}%)`;
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndx);
    });
}

const inervalId = setInterval(() => {
    currentIndx = (currentIndx + 1) % item.length;
    updateCarous();
}, 5000);




// form
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');


function updateCarousel() {
    items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

const intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}, 5000);



document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
});




// About

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Open the "Success" accordion by default
    const successAccordion = document.querySelector('.success');
    if (successAccordion) {
        successAccordion.click();
    }
});


// document.getElementById('patientForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const dob = document.getElementById('dob').value;
//     const disease = document.getElementById('disease').value;
//     const appointment = document.getElementById('appointment').value;
//     const message = document.getElementById('message').value;

//     const output = `
//         <h2>Submitted Information</h2>
//         <p><strong>Patient Name:</strong> ${name}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Date of Birth:</strong> ${dob}</p>
//         <p><strong>Disease Type:</strong> ${disease}</p>
//         <p><strong>Appointment Date:</strong> ${appointment}</p>
//         <p><strong>Message:</strong> ${message}</p>
//     `;

//     document.getElementById('output').innerHTML = output;
// });


