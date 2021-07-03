
var  icon =  document.querySelector("#icon");
var i =0;
var loader_background = document.querySelector(".loader_background")
setInterval(()=>{
  icon.style.transform = `rotate(${i}deg)`;
  i=i+45;
},500)



function Page(){
var buttonLeft = document.querySelector(".left");
var carouselContainer = document.querySelector(".corousel-container");
var buttonRight = document.querySelector(".right");
var articles = document.querySelectorAll(".article");
var modal= document.querySelector(".modal");
var menuButton = document.querySelector(".menu-bars");
var ul = document.querySelector(".left-bar-menu"); var  menuBar = document.querySelector(".menu-bars")


   function left(){ 
     let elements= document.querySelectorAll(".corousel-element");
     let  copyOfFirst= carouselContainer.firstElementChild;
     carouselContainer.removeChild(elements[0])
     carouselContainer.append(copyOfFirst);
     carouselContainer.style.transition="1s all"
     for(let i=0;i<elements.length;i++){
      if(i == Math.floor((elements.length/2 +1))){
     elements[i].querySelector('div').style.visibility="visible";
     elements[i].querySelector('div').style.opacity="1"; 
     elements[i].querySelector('div').style.top="50%";  
     elements[i].querySelector('div').style.transform="translate(-50%,-50%) "  ;
      }
      else{
        elements[i].querySelector('div').style.visibility="hidden";
        elements[i].querySelector('div').style.opacity="0";
                }
     
     
     
     
      }
    }
    

function right(){
    let elements= document.querySelectorAll(".corousel-element");
    carouselContainer.style.transition="1s all"
    let  copyOfFirst= carouselContainer.lastElementChild;
    carouselContainer.removeChild(elements[elements.length-1]);
    carouselContainer.prepend(copyOfFirst);
        
    for(let i=0;i<elements.length;i++){
      if(i == Math.floor((elements.length/2)-1)){
       elements[i].querySelector('div').style.visibility="visible";
       elements[i].querySelector('div').style.opacity="1"; 
       elements[i].querySelector('div').style.top="50%";  
       elements[i].querySelector('div').style.transform="translate(-50%,-50%) "  ;
        }
        else{
       elements[i].querySelector('div').style.visibility="hidden";
       elements[i].querySelector('div').style.opacity="0";
               }
              }
            }

function showLeftMenu(){
 modal.style.display="block"
 ul.style.display="block"
 ul.style.left="0";
 
}
function hideLeftBarMenu(){
    if(window.event.target.id !==ul.id){
         modal.style.display="none"
         ul.style.left="-75%";
         menuButton.style.transform= "rotate(0deg)"     
    } 
}
buttonLeft.addEventListener("click",left);
buttonRight.addEventListener("click",right);
menuButton.addEventListener("click",showLeftMenu);
modal.addEventListener("click",hideLeftBarMenu);
menuButton.addEventListener("click",()=>{
menuButton.style.transition= "1s"
menuButton.style.transform= "rotate(90deg)"
})
}





Page();

