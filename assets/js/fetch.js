
function bring( hide){
var arr= JSON.parse(localStorage.getItem('movie'));
document.querySelector('.cover').style.background = `url(${arr.Link})`
document.querySelector('h1.title').innerHTML = arr.Name
document.querySelector('.container').innerHTML += arr.Content;
hide();
}
function hide(){
    var  loader_background = document.querySelector('.loader_background');
    loader_background.style.display = 'none';
}

bring(hide);





