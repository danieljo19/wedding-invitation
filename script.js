const openBtn=document.getElementById("openBtn");
const cover=document.getElementById("cover");
const main=document.getElementById("mainContent");
const music=document.getElementById("music");

openBtn.onclick=()=>{

document.querySelector(".cover-left").style.transform="translateX(-100%)";
document.querySelector(".cover-right").style.transform="translateX(100%)";

setTimeout(()=>{
cover.style.display="none";
main.style.display="block";
},1000);

music.play();

};


/* COUNTDOWN */

const target=new Date("Dec 20, 2026 09:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();
const diff=target-now;

document.getElementById("days").innerText=Math.floor(diff/(1000*60*60*24));
document.getElementById("hours").innerText=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
document.getElementById("minutes").innerText=Math.floor((diff%(1000*60*60))/(1000*60));
document.getElementById("seconds").innerText=Math.floor((diff%(1000*60))/1000);

},1000);


/* CAROUSEL */

const track=document.querySelector(".carousel-track");
const slides=document.querySelectorAll(".slide");
const next=document.querySelector(".nav.right");
const prev=document.querySelector(".nav.left");

let index=2;

function updateCarousel(){

slides.forEach((slide,i)=>{
slide.classList.remove("active");

if(i===index){
slide.classList.add("active");
}

});

track.style.transform=`translateX(-${index*220}px)`;

}

next.onclick=()=>{

index++;

if(index>=slides.length){
index=0;
}

updateCarousel();

};

prev.onclick=()=>{

index--;

if(index<0){
index=slides.length-1;
}

updateCarousel();

};

updateCarousel();


/* LIGHTBOX */

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const closeLightbox=document.getElementById("closeLightbox");

slides.forEach((img)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target!==lightboxImg){
lightbox.style.display="none";
}

};


/* WISHES */

const form=document.getElementById("wishForm");
const list=document.getElementById("wishList");

form.addEventListener("submit",e=>{

e.preventDefault();

const name=form.querySelector("input").value;
const msg=form.querySelector("textarea").value;

const div=document.createElement("div");

div.classList.add("wish-item");

div.innerHTML=`<b>${name}</b><p>${msg}</p>`;

list.prepend(div);

form.reset();

});