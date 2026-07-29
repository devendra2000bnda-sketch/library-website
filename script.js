// Smooth reveal animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
},{
  threshold:0.15
});

sections.forEach(section=>{
  section.style.opacity="0";
  section.style.transform="translateY(60px)";
  section.style.transition="all .8s ease";
  observer.observe(section);
});

// Navbar background on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

  if(window.scrollY>50){

    navbar.style.background="rgba(5,8,22,.95)";

  }else{

    navbar.style.background="rgba(255,255,255,.08)";

  }

});

// Button hover animation

document.querySelectorAll(".primary-btn,.join-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});
