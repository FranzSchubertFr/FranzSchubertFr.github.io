const learn_more = document.getElementById("learn-more");
const sound = new Audio("AUUGHHH.mp3");
const closePopup = document.getElementById("closePopup");
const myPopup = document.getElementById("myPopup");

learn_more.addEventListener("click", function() {
    sound.play();
    myPopup.style.display = "block";
});

closePopup.addEventListener("click", function() {
    myPopup.style.display = "none";
  });