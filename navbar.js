// window.onscroll = function(){
//     myFunction()
// };

// var navbar = document.getElementById('navbar');

// var sticky = navbar.offsetTop;

// function myFunction(){
//     if(window.pageYOffset >= sticky)
//     {
//         navbar.classList.add("sticky")
//     }else{
//         navbar.classList.remove("sticky");
//     }
// }

var AdmissBtn = document.getElementById('admission');
var AdmissLink = document.getElementById('admission-links');
var staffBtn = document.getElementById('staff');
var staffLink = document.getElementById('staff-links');
var closeBtn = document.getElementById('close');
var navbarLinks = document.getElementById('nav-links');
var toggleBtn = document.getElementById('toggle-btn');

AdmissBtn.addEventListener('click', ()=>{
    AdmissLink.classList.toggle('active');
})

staffBtn.addEventListener('click', ()=>{
    staffLink.classList.toggle('active');
})

toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
})

closeBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
})