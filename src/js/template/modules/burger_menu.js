export const burger_menu = () => {
    const button = document.querySelector('.js-burger_button');
    const menu = document.querySelector('.js-nav-menu');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');

    button.onclick = swichMenu;

    function swichMenu(){
        button.classList.toggle('header_bottom__burger--open');
        menu.classList.toggle('header_bottom__navigation--open');
        header.classList.toggle('header--burger_open');
    }

    function closeburger(){
        button.classList.remove('header_bottom__burger--open');
        menu.classList.remove('header_bottom__navigation--open');
        header.classList.remove('header--burger_open');
    }


    window.addEventListener('resize', function(){
        if(body.clientWidth > 767){
            closeburger();
        }
    })
}