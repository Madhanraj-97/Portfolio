// navbar for small scrreen
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

let date= new Date();
let year=document.getElementById("year");
year.textContent=date.getFullYear();

// anchor tag active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 100
 });
 ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
 ScrollReveal().reveal('.home-image', {origin:'bottom'});

 ScrollReveal().reveal('.home-content h1,.about h3,.projects h3',{origin:'left'});
 ScrollReveal().reveal('.skills h3,.contact h3', {origin:'right'});


//  form data submission using ajax


$("#contact-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbx_e_elBudYYFJ06UESjUeKRzWMoOHmCSMT3aY4-jf4AjdsFVPFZUmejGKw9eM-gdhN1A/exec",
        data:$("#contact-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            FormData.clear()
           
        },
        error:function (err){
            alert("Something Error")

        }
    })
})


