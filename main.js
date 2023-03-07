let signUpButon=document.getElementById("signup");
let signInButon=document.getElementById("signin");
let Container=document.getElementById("container");

signUpButon.addEventListener('click',()=>{
    Container.classList.add("right-panel-active");
});

signInButon.addEventListener('click',()=>{
    
        Container.classList.remove("right-panel-active");
    })
     
