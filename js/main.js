var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var nonmodal = document.getElementById("nonmodal");
var btn3 = document.getElementById("nonmodalbtn");
var span3 = document.getElementsByClassName("close3")[0];
const wrapper = document.querySelector(".nonmodal"),
header = wrapper.querySelector("header");
function onDrag({movementX, movementY}){
let getStyle = window.getComputedStyle(wrapper);
let leftVal = parseInt(getStyle.left);
let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
    }

btn3.onclick = function() {
    nonmodal.style.display = "block";
    }
              
span3.onclick = function() {
    nonmodal.style.display = "none";
    }
              
window.onclick = function(event) {
    if (event.target == nonmodal) {
    nonmodal.style.display = "none";
    }
  }
header.addEventListener("mousedown", ()=>{
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});

var modal4 = document.getElementById("ModalClock");
var btn4 = document.getElementById("pepsi-clock");
var span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function () {
    window.setInterval(function() {
        let date = new Date();

        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let clock = day + " Сентября " + hours + ":" + minutes + ":" + seconds;
        document.getElementById('clock').innerHTML = clock;
    }
    );
}

var modal5 = document.getElementById("helpp");
var btn5 = document.getElementById("help");
var span5 = document.getElementsByClassName("close5")[0];

btn5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}