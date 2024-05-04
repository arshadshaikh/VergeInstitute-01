let menuOpen = document.querySelector(".menu")
let menuClose = document.querySelector(".close_menu_btn");
let navbar2 = document.querySelector(".navbar2_container");

menuOpen.addEventListener('click',() => { // navbar open function
   navbar2.style.width = "100%";
   menuOpen.style.display = "none";
})

menuClose.addEventListener('click',() => {// navbar close function
   navbar2.style.width = "0%";
   menuOpen.style.display = "inline-block";
})

// image Slider script

let leftbtn = document.querySelector(".leftbtn");
let rightbtn = document.querySelector(".rightbtn");
let slider = document.querySelector(".slider");

let images = document.querySelectorAll(".image");

let indexNum = 1;
let length = images.length;

//  creating a circle  buttons for sliding 

let bottom = document.querySelector(".bottom");

for(let i=0; i<length; i++){
  let div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

let buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = "black";

let resetbg = () => {
  buttons.forEach((button) =>{
    button.style.backgroundColor = "transparent";
    button.addEventListener('mouseover', stopSlideShow);
    button.addEventListener('mouseout', startSlideShow);
 });
};

buttons.forEach((button,i) => {
   button.addEventListener('click', () => {
    resetbg();
    slider.style.transform = `translateX(-${i*800}px)`;
    indexNum = i+1;
    button.style.backgroundColor = "black";
 });
});


let changecolor = () =>{
  resetbg();
  buttons[indexNum-1].style.background = "black";
}


// script of side button for sliding

let nextslide = () => {
  slider.style.transform = `translateX(-${indexNum*800}px)`;
  indexNum++;
}

let prevslide = () => {
  slider.style.transform = `translateX(-${(indexNum-2)*800}px)`;
  indexNum--;
}

let firstslide = () => {
  slider.style.transform = `translateX(0px)`;
  indexNum = 1;
}

let lastslide = () => {
  slider.style.transform = `translateX(-${(length-1)*800}px)`;
  indexNum = length;
}


rightbtn.addEventListener('click', () =>{
  indexNum < length ?  nextslide() : firstslide(); 
  changecolor(); 
})

leftbtn.addEventListener('click', () =>{
  indexNum > 1?  prevslide() : lastslide();  
  changecolor();	
})

// automatic slide show 

let slideInterval;

let startSlideShow = () => {
   slideInterval = setInterval(() =>{
   indexNum < length ?  nextslide() : firstslide();
   changecolor();
  },3000);
};

startSlideShow();

// stoping sliding when we hover on it;

let stopSlideShow = () => {
  clearInterval(slideInterval);
};

slider.addEventListener('mouseover', stopSlideShow);
slider.addEventListener('mouseout', startSlideShow);

rightbtn.addEventListener('mouseover', stopSlideShow);
rightbtn.addEventListener('mouseout', startSlideShow);

leftbtn.addEventListener('mouseover', stopSlideShow);
leftbtn.addEventListener('mouseout', startSlideShow);
	


