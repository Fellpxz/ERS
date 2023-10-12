window.addEventListener('scroll', ()=>{
    const header = document.querySelector('#main-header');

    if(window.scrollY > 50){
        header.style.backgroundColor = 'black';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

image1.addEventListener("click", () => {
  image1.classList.add("upper");
  image2.classList.remove("upper");
});

image2.addEventListener("click", () => {
  image2.classList.add("upper");
  image1.classList.remove("upper");
});

function openMenu(){
  document.body.classList.add("expanded");
}

function closeMenu(){
  document.body.classList.remove("expanded");
}