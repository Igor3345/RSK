export const fake_video = () => {
    const footer = document.querySelector('.js-footer');
    const videos = document.querySelectorAll('.tube');


    for(let i = 0 ; i < videos.length; i++){
        make_fakes(videos[i]);
    }


    function make_fakes(item){
    let source = item.getAttribute('data-src');
    let elem = getElement('video', ['fake_video' , 'js-fake_video'], {src: source});

    footer.append(elem);

    }


    function getElement (tagName, classNames, attributes){
        const element = document.createElement(tagName);
    
        if (classNames) {
            element.classList.add(...classNames)
        }
    
        if (attributes) {
            for (const attribute in attributes) {
                element[attribute] = attributes[attribute];
            };
        }
    
        return element;
    };
    
}