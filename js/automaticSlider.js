let container = document.querySelector('.section-5 .slider-container');
let slides = document.querySelector('.section-5 .content');
let imgs = document.querySelectorAll('.section-5 .slide');
let dot = document.querySelectorAll('.section-5 .dot');

let container1 = document.querySelector('.section-6 .slider-container');
let slides1 = document.querySelector('.section-6 .content');
let imgs1 = document.querySelectorAll('.section-6 .slide');
let dot1 = document.querySelectorAll('.section-6 .dot');

var slideCount = 1;
var slideCount1 = 1;

const interval = 4000;
var timeinterval;

let size = imgs[0].clientWidth;
let size1 = imgs1[0].clientWidth;

slides.style.transform = 'translateX('+ (-size*slideCount+1) + 'px)';
slides1.style.transform = 'translateX('+ (-size1*slideCount1+1) + 'px)';

dot[slideCount-1].style.backgroundColor = "gray";
dot1[slideCount1-1].style.backgroundColor = "gray";

slideshow = ()=>{
    timeinterval = setInterval(()=>{
        
        slideCount++;
        slideCount1++;

        size = imgs[0].clientWidth;
        size1 = imgs1[0].clientWidth;

        if (slideCount > imgs.length-1){
            slideCount =1;
            slides.style.transform='translateX('+ (-size*this.slideCount+1) + 'px)';
            slides.style.transition='none';
            // console.log('translateX('+ (-size*this.slideCount+1) + 'px)')
        }
        else{
        slides.style.transform='translateX('+ (-size*slideCount+1) + 'px)';
        slides.style.transition = 'transform 0.7s';
        // console.log('translateX('+ (-size*slideCount+1) + 'px)')
        
        }

        if (slideCount1 > imgs1.length-1){
            slideCount1 =1;
            slides1.style.transform='translateX('+ (-size1*this.slideCount1+1) + 'px)';
            slides1.style.transition='none';
            // console.log('translateX('+ (-size*this.slideCount+1) + 'px)')
        }
        else{
        slides1.style.transform='translateX('+ (-size1*slideCount1+1) + 'px)';
        slides1.style.transition = 'transform 0.7s';
        // console.log('translateX('+ (-size*slideCount+1) + 'px)')
        
        }
        for(let i = 0 ; i<dot.length;i++){
            dot[i].style.backgroundColor = "#bbb";
              
        }
        for(let i = 0 ; i<dot1.length;i++){
            dot1[i].style.backgroundColor = "#bbb";
              
        }
         
        
        dot[slideCount-1].style.backgroundColor = "gray";
        dot1[slideCount1-1].style.backgroundColor = "gray";
    },interval);
};
slides.addEventListener('transitionend',()=>{
    if (imgs[slideCount].id === 'firstimage')
    {
        slideCount=1;
        slides.style.transform = 'translateX(' +(-size * slideCount+1)+'px)';
        slides.style.transition = 'none';
    }
});
slides1.addEventListener('transitionend',()=>{
    if (imgs1[slideCount1].id === 'firstimage1')
    {
        slideCount1=1;
        slides1.style.transform = 'translateX(' +(-size1 * slideCount1+1)+'px)';
        slides1.style.transition = 'none';
    }
});

slideshow();
