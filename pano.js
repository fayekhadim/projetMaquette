  var i = 0;
var images = ["1.png", "2.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
var temps = 1000;
function changeImages(){
  document.image.src = images[i];
  if(i < images.length - 1){
    i++;
  }else{
    i = 0;
  }
  setTimeout("changeImages()",temps);

}