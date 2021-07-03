var inputs =  document.querySelectorAll('input');
var button =  document.querySelector('.submit-contact');


function LiftUp(){
    this.closest('div').querySelector('.tag').style.top="-18px";
    this.closest('div').querySelector('.tag').style.fontSize="12px" 
}
function Submit(){
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value.trim() == ""){
            inputs[i].style.border= "2px red solid"; 
        }
    }

}



for(i=0;i<inputs.length;i++){
    inputs[i].addEventListener('focus',LiftUp)
}

button.addEventListener('click',Submit);