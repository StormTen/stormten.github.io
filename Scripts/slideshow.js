var slideshow = document.getElementById("slideshow");

var imageArray = ["Images/1.jpg","Images/2.jpg","Images/3.jpg","Images/4.jpg","Images/5.jpg","Images/6.jpg"];
var index = 0;

function changeImage(){
  slideshow.setAttribute("src", imageArray[index]);
  index++;
  if(index >= imageArray.length){
    index = 0;
  }
}
function changeImg(){
  slideshow.setAttribute("src",imageArray[index]);
  index++;
  if (index >= imageArray.length) {
      index = 0;
   }
};
window.onload = function() {
 
   setInterval(changeImage,2000);
 
};