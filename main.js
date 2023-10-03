
function showMenu(){
    const btn= document.querySelector('.header__btn');
    const list = document.querySelector('.header__list');
    btn.addEventListener('click',function(){
        list.classList.toggle('active');
    })
}
showMenu()

function menuMover(){
    const home= document.querySelector('.btn__home');
    home.addEventListener('click',function(){
        if(screen.width>900)window.scroll(0, 0);
        else window.scroll(0, 0);
    })
    const experiencia=document.querySelector('.btn__experiencia');
    experiencia.addEventListener('click',function(){
        if(screen.width>900)window.scroll(0, 500);
        else window.scroll(0, 690);
    })
    const portafolio=document.querySelector('.btn__portafolio');
    portafolio.addEventListener('click',function(){
        if(screen.width>900)window.scroll(0, 800);
        else window.scroll(0, 1460);
    })
    const contacto=document.querySelector('.btn__contacto');
    contacto.addEventListener('click',function(){
        if(screen.width>900)window.scroll(0, 1000);
        else window.scroll(0, 2000);
    })
}
menuMover()