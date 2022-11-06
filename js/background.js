const images= ["b1.jpg", "b2.jpg","b3.jpg","b4.jpg","b5.jpg","b6.jpg","b7.jpg"];
const chosenImage= images[Math.floor(Math.random()*images.length)];
//const bgImage=document.createElement("img");

// bgImage.src= `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const leftTop= document.querySelector(".left-top");

leftTop.style.backgroundImage=`url("./img/${chosenImage}")`;


//body.style.backgroundImage="url('https://images.unsplash.com/photo-1659535857317-9378cb28736e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')";