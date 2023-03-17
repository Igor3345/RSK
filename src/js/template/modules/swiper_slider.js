export const swiper_slider = async() => {

    const {
        Swiper,
        Navigation,
        Pagination,
        Thumbs,
        Autoplay,
        EffectFade,
    } = await import ( /* webpackChunkName: "swiper" */ 'swiper');

    Swiper.use([Navigation, Pagination,EffectFade]);


    const top_slider = document.querySelector('.js-top_slider');
    const body = document.querySelector('body');

    if(top_slider){
        const index_top_slider = new Swiper(top_slider, {
            direction: 'horizontal',
            slidesPerView: 1,
            effect:'fade',
            fadeEffect:{
                crossFade:true,
            },
            loop: false,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination:{
                type:"bullets",
                el:".js-top_slider_bullets",
                clickable:true,
            },
        });

        let container = document.querySelector('.js-top_slider_bullets');
        let bullets = container.querySelectorAll('.swiper-pagination-bullet');
        
        for(let i = 0; i < bullets.length; i++){
            checkBullets(bullets[i] , i);
        }

        function checkBullets(item , index){
            if(index < 10){
                item.textContent = `0${index+1}`;
            }else{
                item.textContent = index + 1;
            }
        }
    };

    const selling_swiper = document.querySelector('.js-selling-swiper');

    if(selling_swiper){
        const selling_buttons = document.querySelectorAll('.js-selling_slider-button');

        let selling_swiper_slider;

        let desctop_settings = {
            direction: 'horizontal',
            slidesPerView: 3.5,
            spaceBetween: 58,
            loop: false,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            grabCursor: true,
            navigation: {
                nextEl: selling_buttons[1],
                prevEl: selling_buttons[0],
            },
            breakpoints: {
                320:{
                    init: false,
                },
                567:{
                    slidesPerView: 1.2,
                    init: true,
                },
                990:{
                    slidesPerView: 2.5,
                },
                1440:{
                    slidesPerView: 3.2,
                },
                1701:{
                    slidesPerView: 3.5,
                },
            }
        }

        selling_swiper_slider = new Swiper(selling_swiper, desctop_settings);
    }

    const catalog_slider = document.querySelectorAll('.js-catalog_swiper');


    if(catalog_slider.length > 0){
        let bullets_containers = document.querySelectorAll('.js-catalog_tab-bullets');
        for(let i = 0; i < catalog_slider.length; i++){
            activate_catalog_slide(catalog_slider[i] , i)
        }

        function activate_catalog_slide(slider , index){
            let slides = slider.querySelectorAll('.js-catalog_slide');
            let slides_length = slider.querySelectorAll('.js-catalog_slide').length;
            let catalog_slider =  new Swiper(slider, {
                direction: 'vertical',
                slidesPerView: 3,
                spaceBetween:83,
                watchOverflow:true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                pagination:{
                    type:"bullets",
                    el: bullets_containers[index],
                    clickable:true,
                },
                breakpoints:{
                    320:{
                        direction: 'vertical',
                        slidesPerView:2,
                        spaceBetween:31,
                    },
                    992:{
                        direction: 'horizontal',
                        slidesPerView:3,
                        
                    }
                }
            });
            window.onresize = check_bullets

            function check_bullets(){
                if(body.clientWidth > 1440 && slides_length < 4){
                    bullets_containers[index].classList.add('d-none');
                }else if(body.clientWidth > 992 && slides_length < 3){
                    bullets_containers[index].classList.add('d-none');
                }
            }
            check_bullets()
        }
    }

    const partners_slider = document.querySelector('.js-partners-swiper');

    if(partners_slider){
        const partners_buttons = document.querySelectorAll('.js-parners_slider-button');
        const partners_slides = partners_slider.querySelectorAll('.js-partners_slide');
        let catalog_slider =  new Swiper(partners_slider, {
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween:15,
            grabCursor: true,
            watchOverflow:true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            navigation:{
                nextEl: partners_buttons[1],
                prevEl: partners_buttons[0],
            },
            breakpoints:{
                320:{
                    init:false,
                },

                568:{
                    slidesPerView:2,
                    init:true,
                },

                768:{
                    slidesPerView:3,
                },
                
                1200:{
                    slidesPerView:4,
                    
                }
            }
        });

        for(let i = 0; i < partners_slides.length; i++){
            partners_slides[i].onclick = () => slide_to(i)
        }

        function slide_to(index){
            catalog_slider.slideTo(index)
        }
    }

    const services_slider = document.querySelector('.js-services_slider');

    if(services_slider){
        let bullets = document.querySelector('.js-services_card-bullets');
        let setvices_slider

        let services_options = {
            direction: 'vertical',
            init: true,
            slidesPerView: 2,
            spaceBetween:0,
            watchOverflow:true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination:{
                type:"bullets",
                el: bullets,
                clickable:true,
            },
        }
        setvices_slider =  new Swiper(services_slider, services_options);
    }
}   