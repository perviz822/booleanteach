var circles = document.querySelectorAll(".img-container");
var descriptions = document.querySelectorAll(".description");

for(let i=0;i<circles.length;i++){
    circles[i].addEventListener('click',disappear);
     circles[i].style.transition = "1s all"
}

for(let i = 0;i<descriptions.length;i++){
  descriptions[i].addEventListener('click',function (){
    this.parentElement.querySelector('.description').style.top="100%";
    this.style.visibility="hidden"
    this.style.opacity="0"
    this.parentElement.querySelector('p').style.display="block"
    this.parentElement.querySelector('.img-container').style.display="block";
    this.parentElement.querySelector('.img-container').style.transform = "scale(1)"
  })
}

let counter = 0;
let count=  0.8;
 function disappear(){
    this.style.transform=`scale(0.005)`
    this.parentElement.querySelector('p').style.display="none"
  
 setTimeout(()=>{
   this.parentElement.querySelector('.description').style.visibility="visible";
   this.parentElement.querySelector('.description').style.top="20%";
   this.parentElement.querySelector('.description').style.opacity="1"
 },1000)

}


