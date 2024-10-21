gsap.from(".header", {delay: 2.5, duration: 2, y: -50, opacity: 0, ease: "power1"})
gsap.from(".links", {delay: 2, duration: 3, stagger: 1, opacity: 0})
gsap.from(".text", {delay: 1, duration: 3, x: 200, opacity: 0})
gsap.from(".circle", {delay: 1, duration: 3, x: -200, opacity: 0})
gsap.from(".contact-me-btn", {delay: 4, duration: 4, opacity: 0, ease: "power1>out"})

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20); 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});


const text = document.querySelector(".text");
const links = document.querySelectorAll(".links");

gsap.to("body", {
  delay: 5,
  duration: 1.2,
  ease: "power1.inOut",
  backgroundColor: "#121212",
  onUpdate: function() {
    links.forEach(link => {
      link.style.color = "#fff"; 
    });

    if (text) {
      text.style.color = "#fff"; 
    }
  }
});

gsap.to("#getintouch", {
  text: "Stay connected",
  duration: 2,
  repeat: -1,
  repeatDelay: 1.5,
  ease: "power1.in",
  yoyo: true,
  delay: .5,
})

const projects = document.querySelectorAll(".project"); 
const descriptions = [
  document.querySelector("#first"),
  document.querySelector("#second"),
  document.querySelector("#third"),
  document.querySelector("#fourth"),
  document.querySelector("#fifth"),
  document.querySelector("#sixth")
];

const originalTexts = [
  "Restaurant search app",
  "Birthday countdown app",
  "Budget planning app",
  "Universe whisper app",
  "Weather app",
  "Breathe app"
];
const hoverTexts = [
  "View demo",
  "View demo",
  "View demo",
  "View demo",
  "View demo",
  "View demo"
];

projects.forEach((project, i) => {
  project.addEventListener("mouseover", () => {
    descriptions[i].textContent = hoverTexts[i]; 
  });

  project.addEventListener("mouseout", () => {
    descriptions[i].textContent = originalTexts[i]; 
  });
});
