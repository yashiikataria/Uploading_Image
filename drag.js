//select from device or drag and drop an image


"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.querySelector(".PreviewImage");
    var previewImg = document.querySelector(".imageSample");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}


//drag and drop sample images
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function dragSample(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function dropSample(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


//creating a modal

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



  //putting images using URL

function putImage(src){
    let image = document.querySelector('.imageSample');
    image.src = src;
}


var urlBtn = document.querySelector('.sendUrlBtn');
urlBtn.onclick = () => {
    let src = document.querySelector('#urlImage');
    putImage(src.value);
}





