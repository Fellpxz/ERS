window.addEventListener('scroll', ()=>{
    const header = document.querySelector('#main-header');

    if(window.scrollY > 50){
        header.style.backgroundColor = 'black';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

function openMenu(){
  document.body.classList.add("expanded");
}

function closeMenu(){
  document.body.classList.remove("expanded");
}