import '../../styles/styles.scss';
import 'bootstrap';

import 'babel-polyfill';

import {indiBlockController, indiLoading} from '../indi';
import {fake_video} from "./modules/fake_videos";
import {ajaxForm} from './modules/common/ajaxForm';
import {sprite_svg} from './modules/common/sprite_svg';
import {fileInput} from './modules/common/fileInput';
import {dropEye} from './modules/common/dropEye';
import {phonemask} from './modules/common/phonemask';
import {datepicker} from './modules/common/datepicker';
import {counter} from './modules/common/counter';
import {magnificPopupImage} from './modules/common/magnificPopupImage';
import {magnificPopupGallery} from './modules/common/magnificPopupGallery';
import {tabsToSelect} from './modules/common/tabsToSelect';
import {accordion} from './modules/common/accordion';
import {backToTop} from './modules/common/backToTop';
import {scrollToAnchor} from './modules/common/scrollToAnchor';
import {toggleText} from './modules/common/toggleText';
import {inputDigits} from './modules/common/inputDigits';
import {datepickerRange} from './modules/common/datepickerRange';
import {popover} from './modules/common/popover';
import {tooltip} from "./modules/common/tooltip";
import {select} from "./modules/common/select";
import {map} from "./modules/common/map";
import {toast} from "./modules/common/toast";
import {burger_menu} from "./modules/burger_menu";
import {videotube} from "./modules/videotube";
import {swiper_slider} from "./modules/swiper_slider";
import {runNumbers} from "./modules/runNumbers";
import {background_switcher} from "./modules/background_switcher";
import {page_map} from "./modules/map";

// import {mobileMenu} from './modules/mobileMenu';
// import {megaMenu} from './modules/megaMenu';

/**
 * Общий функционал для всех страниц
 */
// type your code here ..

//
// Базовые блоки
//
indiBlockController.add(fake_video, ".js-fake_videos");
indiBlockController.add(ajaxForm, '.js-ajax-form');
indiBlockController.add(sprite_svg, '.js-sprite_svg');
indiBlockController.add(fileInput, 'input.form-file-input[type="file"]');
indiBlockController.add(dropEye, '.js-drop-eye');
indiBlockController.add(phonemask, 'input[type="tel"]');
indiBlockController.add(datepicker, '.js-datepicker');
indiBlockController.add(counter, '.js-counter');
indiBlockController.add(magnificPopupImage, '.js-mp-image');
indiBlockController.add(magnificPopupGallery, '.js-mp-gallery');
indiBlockController.add(tabsToSelect, '.js-tab-select');
indiBlockController.add(accordion, '.js-accordion');
indiBlockController.add(backToTop, '.js-back-to-top');
indiBlockController.add(scrollToAnchor, '.js-to-anchor');
indiBlockController.add(toggleText, '.js-toggle-text');
indiBlockController.add(inputDigits, '.js-input-digits');
indiBlockController.add(datepickerRange, '.js-datepicker-range');
indiBlockController.add(popover, "[data-bs-toggle='popover']");
indiBlockController.add(tooltip, "[data-bs-toggle='tooltip']");
indiBlockController.add(select, ".js-select");
indiBlockController.add(map, ".js-map");
indiBlockController.add(toast, ".js-toast");
indiBlockController.add(burger_menu, ".js-burger_menu");
indiBlockController.add(videotube, ".js-videotube");
indiBlockController.add(swiper_slider, ".js-swiper_slider");
indiBlockController.add(runNumbers, ".js-run_numbers");
indiBlockController.add(background_switcher, ".js-switcher");
indiBlockController.add(page_map, ".js-map");

//
// Блоки проекта
//

// indiBlockController.add(mobileMenu, '.js-mobile-menu');
// indiBlockController.add(megaMenu, '.js-mega-menu');

let r =  require.context('../../assets/images/sprites/', true, /\.svg$/);
r.keys().forEach(r);



// Функция, ициализирующая все прописанные скрипты через indiBlockController и навешивает события на определённые элементы в глобальной зоне видимости.
document.addEventListener("DOMContentLoaded", function () {
    indiBlockController.initAll();
    let loading = new indiLoading();

})



