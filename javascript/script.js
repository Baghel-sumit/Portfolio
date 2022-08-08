const textEl = document.querySelector('.text');
const text = 'Web Developer & Programmer | ';
let idx=0;

writeText();
function writeText(){
    textEl.innerText = text.slice(0,idx);
    idx++;
    if(idx >= text.length){
        idx=0;
    }
    setTimeout(writeText,200);
}

const mainImg = document.querySelector('.main');
const Images = ["images/main_bg.jpg","images/main_bg1.jpg","images/main_bg2.jpg","images/main_bg3.jpg",
"images/main_bg4.jpg","images/main_bg5.jpg","images/main_bg6.jpg","images/main_bg7.jpg","images/main_bg8.jpg",
"images/main_bg9.jpg",
];
let i=0;
changeBg();
function changeBg(){

    mainImg.style.background = `no-repeat url(${Images[i]}) center`;
    mainImg.style.backgroundSize = 'cover';
    i++;
    if(i >= Images.length){
        i=0;
    }
    setTimeout(changeBg,8000);
}

// responsive nav bars 

const hamBtn = document.querySelector('.ham-nav');
const crossBtn = document.querySelector('.cross-btn');
const resNav = document.querySelector('.res-nav');

hamBtn.addEventListener('click',()=>{
    resNav.classList.add('active');
})
crossBtn.addEventListener('click',()=>{
    resNav.classList.remove('active');
})

