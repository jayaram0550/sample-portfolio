var typed=new Typed(".text",{ 
strings:["Frontend Developer","Computer Science Student","Web Developer"], 
typeSpeed:100, 
backSpeed:100, 
backDelay:1000, 
loop:true 
}); 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
