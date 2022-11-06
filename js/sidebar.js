const sideMenu=document.querySelector(".side-menu");
const main=document.querySelector(".main");
const body=document.body;
const arrow=document.querySelector(".arrow");
const close=document.querySelector(".close");
const todoNav=document.querySelector(".todoNav");

function openMenu(){

    sideMenu.style.marginRight='0';
    main.style.marginRight="20%";
    arrow.style.marginRight="20%";
    todoNav.style.marginRight="20%";
    body.style.backgroundColor="rgba(0,0,0,0.3)";

}

function closeMenu(){
    sideMenu.style.marginRight='-20%';
    main.style.marginRight="0";
    arrow.style.marginRight="0";
    todoNav.style.marginRight="0";
    body.style.backgroundColor="#ffff";
    
}

arrow.addEventListener("click", openMenu);

close.addEventListener("click", closeMenu);