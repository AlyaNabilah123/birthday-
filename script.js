//==========================================
//SPIDERMAN BIRTHDAY WEBSITE
//FINAL SCRIPT
//==========================================

//========== ELEMENT ==========
const loader=document.getElementById("loader");
const hero=document.querySelector(".hero");
const openGift=document.getElementById("openGift");
const flowerContainer=document.getElementById("flower-container");
const typingText=document.getElementById("typingText");
const music=document.getElementById("music");
const glow=document.querySelector(".cursor-glow");
const scrollGuide=document.getElementById("scrollGuide");

let musicStarted=false;
let letterFinished=false;
let allowNextSection=false;

window.history.scrollRestoration="manual";
window.onload=()=>window.scrollTo(0,0);

//========== LOADER ==========
window.addEventListener("load",()=>{
document.body.style.overflow="hidden";

setTimeout(()=>{
loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
document.body.style.overflowY="auto";
},1000);

},2500);

hero.style.opacity="0";
hero.style.transform="translateY(40px)";

setTimeout(()=>{
hero.style.opacity="1";
hero.style.transform="translateY(0)";
},2600);

});

//========== CURSOR ==========
if(glow){
window.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});
}

//========== FLOWER ==========
function createFlower(){
const flower=document.createElement("img");
flower.src="assets/sunflower.png";
flower.className="flower";
flower.style.left=Math.random()*window.innerWidth+"px";
flower.style.width=(20+Math.random()*20)+"px";
flower.style.animationDuration=(12+Math.random()*8)+"s";
flowerContainer.appendChild(flower);
setTimeout(()=>flower.remove(),20000);
}

function startFlowers(){
setInterval(createFlower,3000);
}

//========== OPEN GIFT ==========
openGift.onclick=()=>{

let web=document.createElement("div");
web.className="web-transition";
document.body.appendChild(web);

setTimeout(()=>web.remove(),1500);

openGift.disabled=true;
openGift.innerHTML="OPENING ❤️";

if(!musicStarted){
music.play().catch(()=>{});
musicStarted=true;
}

startFlowers();

setTimeout(()=>{
document.querySelector(".letter-section").scrollIntoView({
behavior:"smooth"
});
typeLetter();
},1000);

};

//========== LOVE LETTER ==========
const message=`
happy birthday to the sweetest person ever <333

thank u for being part of my life
thank u for sticking around all this time
thank u for growing well
thank u for everything..
  
makasih udah jadi diri kamu yang sekarang.
i'm so proud of you, more than you know.

semoga semua hal baik selalu datang ke kamu.
semoga tahun ini lebih banyak bahagianya daripada sedihnya.

thank u for every smile you've shared with me, every random conversation, every laugh, 
every little moment that somehow became my favorite memories.

jangan terlalu keras sama diri sendiri, ya? it's okay to rest. it's okay to cry.
it's okay to take your time. kamu nggak harus selalu kuat setiap saat.

hope you keep smiling, keep dreaming, and never stop believing in yourself.

please take care of yourself, okay? jangan sering telat makan, 
jangan begadang terus, jangan lupa istirahat yang cukup.

i hope this birthday becomes the beginning of your happiest chapter yet.

once again, happy birthday, my pretty girl. 🤍

i love you today, tomorrow, and every day after that. 
please stay with me for a long, long time. ♡

scroll ke bawah ya sayangg...
`;


const letterCard=document.querySelector(".letter-card");


function typeLetter(){
let i=0;
typingText.innerHTML="";
letterFinished=false;

function typing(){

if(i<message.length){

typingText.innerHTML+=message.charAt(i);
i++;

requestAnimationFrame(()=>{
letterCard.scrollTop=letterCard.scrollHeight;
setTimeout(typing,70);
});

}else{

letterFinished=true;

if(scrollGuide){

scrollGuide.classList.add("show");

scrollGuide.onclick=()=>{

allowNextSection=true;

document.querySelector(".gallery-section").scrollIntoView({
behavior:"smooth"
});

};

}

}

}

typing();

}

//========== LOCK SCROLL ==========
const letterSection=document.querySelector(".letter-section");
const gallerySection=document.querySelector(".gallery-section");

window.addEventListener("wheel",e=>{

// Saat typing masih berjalan
if(!letterFinished){

const pos=letterSection.getBoundingClientRect().top;

if(pos<window.innerHeight&&pos>-100){
e.preventDefault();
return;
}

}

// Setelah typing selesai tapi tombol belum ditekan
if(letterFinished&&!allowNextSection){

const top=gallerySection.getBoundingClientRect().top;

if(top>0){
e.preventDefault();
}

}

},{passive:false});

//========== BACKGROUND ==========
const background=document.querySelector(".background");

window.addEventListener("mousemove",e=>{

let x=(e.clientX/window.innerWidth-.5)*10;
let y=(e.clientY/window.innerHeight-.5)*10;

background.style.transform=
`scale(1.05) translate(${x}px,${y}px)`;

});

window.addEventListener("resize",()=>{

background.style.transform="scale(1.05)";

});

//========== MARVEL PARTICLES ==========
for(let i=0;i<80;i++){

const p=document.createElement("div");

p.className="marvel-particle";

p.style.left=Math.random()*100+"%";
p.style.animationDelay=Math.random()*8+"s";
p.style.animationDuration=(5+Math.random()*8)+"s";

document.body.appendChild(p);

}

//========== STRAWBERRY ENDING ==========
const strawberryBox=document.getElementById("strawberry-container");
const endingSection=document.querySelector(".ending");
let strawberryDone=false;

function strawberryFinal(){

if(strawberryDone)return;

strawberryDone=true;

for(let i=0;i<40;i++){

const berry=document.createElement("img");

berry.src="assets/strawberry.png";
berry.className="final-strawberry";

berry.style.left="50%";
berry.style.top="50%";

berry.style.setProperty("--x",(Math.random()*1000-500)+"px");
berry.style.setProperty("--y",(Math.random()*800-400)+"px");
berry.style.setProperty("--r",(Math.random()*720-360)+"deg");
berry.style.animationDelay=(i*.05)+"s";

strawberryBox.appendChild(berry);

}

}

window.addEventListener("scroll",()=>{

if(!endingSection)return;

const top=endingSection.getBoundingClientRect().top;

if(top<window.innerHeight-200){
strawberryFinal();
}

});

//========== MUSIC ==========
const musicButton=document.getElementById("musicButton");

if(musicButton){

let playing=true;

musicButton.onclick=()=>{

if(playing){

music.pause();
musicButton.innerHTML="🔇";

}else{

music.play().catch(()=>{});
musicButton.innerHTML="🎵";

}

playing=!playing;

};

}


//========== PREVENT IMAGE DRAG ==========
document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

//========== END ==========
console.log("Spiderman Birthday Website Loaded ❤️");

