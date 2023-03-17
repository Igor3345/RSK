export const background_switcher = () => {
    let buttons = document.querySelectorAll('.js-background-switcher');
    let images = document.querySelectorAll('.js-background-image');

    for(let i = 0 ; i < buttons.length; i++){
        buttons[i].onclick = () => background_Switch(i)
    }


    function background_Switch(index){
        for(let i = 0 ; i < images.length ; i++){
            images[i].classList.add('section_frame__image--hidden');
        }
        if(images[index]){
            images[index].classList.remove('section_frame__image--hidden');
        }else{
            images[0].classList.remove('section_frame__image--hidden')
        }
    }
}