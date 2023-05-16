// toggle icon nav bar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.coll');




menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('link');

};

window.onscroll= () =>{

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('link');
};
