console.log('Loaded!');
//var changes
var element=document.getElementById("main-text");
element.innerHTML="NEW VALUE"

// move the image
var img=document.getElementById('madi1');

var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
   var interval=setInterval(moveRight,50);
};