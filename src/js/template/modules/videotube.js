import {indiLoading} from "../../indi";

export const videotube = () => {

	const fake = document.querySelectorAll('.js-fake_video');
	const video_duration = document.querySelectorAll('.js-video_duration');
	if(fake.length > 0){
		for(let i = 0 ; i < fake.length; i++){
			writeTime(fake[i] , i)
		}

		function writeTime(item , index){
			item.addEventListener('loadedmetadata', function(e) {
				let duration = item.duration.toFixed(1);
				let m = Math.round(duration % 60);
				video_duration[index].innerText =  Math.floor(duration / 60) + ':' + (m < 10 ? '0' : '') + m;
			});
		}
	}

    (() => {
		const throttle = (type, name, obj) => {
			obj = obj || window;
			let running = false;
			const func = function () {
				if (running) {
					return;
				}
				running = true;
				requestAnimationFrame(function () {
					obj.dispatchEvent(new CustomEvent(name));
					running = false;
				});
			};
			obj.addEventListener(type, func);
		};

		throttle("resize", "optimizedResize");
	})();

	let loading = new indiLoading();


	((obj) => {
		obj = obj || window;
		obj.animation = function (elem, prop, cb) {
			const count = prop.count;
			let counter = 0
			if (prop.start) {
				prop.start.forEach(item => {
					elem.style[item[0]] = item[1]
				})
			}

			const allAnimation = [];

			prop.anim.forEach(([style, from, to]) => {
				const max = Math.max(from, to);
				const min = Math.min(from, to);
				const step = (max - min) / count;
				allAnimation.push({style, from, to, step, reverse: min === to})
			});


			const rafAnimation = () => {

				allAnimation.forEach((item) => {
					if (item.reverse) {
						item.from -= item.step
					} else {
						item.from += item.step
					}

					elem.style[item.style] = item.from;
				})

				counter++;
				if (counter < count) {

					requestAnimationFrame(rafAnimation);
				} else {
					if (prop.end) {
						prop.end.forEach(item => {
							elem.style[item[0]] = item[1]
						})
					}
					if (cb) cb();
				}


			}
			requestAnimationFrame(rafAnimation);
		};
	})();


	//const init = () => {

		const overlay = document.createElement('div');
		overlay.className = 'videotube-modal-overlay'
		document.body.insertAdjacentElement('beforeend', overlay);

		const video = document.createElement('div');
		video.id = 'videotube-modal-container'

		const sizeBlockList = [
			[3840, 2160],
			[2560, 1440],
			[1920, 1080],
			[1280, 720],
			[1024, 768],
			[854, 420],
			[640, 360],
			[426, 240]
		];


		const sizeVideo = () => {
			const sizeBlock = sizeBlockList.find(item => item[0] < window.visualViewport.width) ||
				sizeBlockList[sizeBlockList.length - 1];
			const iframe = document.getElementById('videotube-modal');
			// iframe.width = sizeBlock[0];
			// iframe.height = sizeBlock[1];
			video.style.cssText = `
				width: ${sizeBlock[0]};
				height: ${sizeBlock[1]};
			`;
		}

		const fullSizeVideo = () =>{
			const iframe = document.getElementById('videotube-modal');
			iframe.width = "100%";
			iframe.height = "100%";
			video.style.cssText = `
			width: "100%";
			height: "100%";
			`
		}

		const sizeContainer = () => {

			const wh = window.visualViewport.height;
			const ww = window.visualViewport.width;
			const fw = video.style.width;
			const fh = video.style.height;

			video.style.left = (ww - fw) / 2;
			video.style.top = (wh - fh) / 2;
			overlay.style.height = document.documentElement.clientHeight;
		}

		const sizeVideoTubeModal = () => {
			sizeContainer();
			sizeVideo();
		}

		const closeVideoTubeModal = (e) => {
			if(!e.target.hasAttribute('src')){
				animation(overlay, {
						end: [['display', 'none']],
						anim: [['opacity', 1, 0]],
						count: 20,
					},
					() => {
						overlay.textContent = "";
					}
				);
				window.removeEventListener("optimizedResize", sizeVideoTubeModal);
				document.removeEventListener('keyup', closeContainerEsc);
			}
		}

		const closeContainerEsc = e => {
			if (e.keyCode === 27) {
				closeVideoTubeModal();
			}
		}


		const openVideoTubeModal = e => {
				//const target = e.target.closest('.tube');

			let videoSrc = "";
			const target = e.currentTarget;
			if (!target) return;
			let src = target.getAttribute('data-src');
			if(src.includes('youtube') || src.includes('youtu')){
				const search = src.includes('youtube');
				let idVideo = search ? src.match(/(\?|&)v=([^&]+)/)[2] : src.match(/(\.be\/)([^&]+)/)[2];
				if (idVideo.length === 0) return;
				if (src.length === 0) return;
				videoSrc = `https://youtube.com/embed/${idVideo}?autoplay=1&mute=1`
			}else{
				videoSrc = src;
				if (src.length === 0) return;
			}
			e.preventDefault();

				animation(overlay, {
						start: [['display', 'block']],
						anim: [['opacity', 0, 1]],
						count: 20,
					}
				);

				overlay.insertAdjacentHTML('beforeend', `
				<div id="videotube-modal-loading"></div>
				<div id="videotube-modal-close">
					<button class="modal_content__close">
						<svg>
							<use xlink:href="./images/sprite_build.svg#close" />
						</svg>
					</button>
				</div>
				<div id="videotube-modal-container">
					<video class="videotube-modal-video" width="95%" height="100%" mute  id="videotube-modal" autoplay="autoplay" controls="controls">
					 	<source src="${videoSrc}"> 
					</video>
				</div>
			`)
				if(target.hasAttribute("data-full-size") && target.getAttribute("data-full-size") !== "".trim()){
					fullSizeVideo();
				}else{
					sizeVideo();
				}
					sizeContainer();

				window.addEventListener("optimizedResize", sizeVideoTubeModal);
				document.addEventListener('keyup', closeContainerEsc);

				const iframe = document.querySelector("#videotube-modal-container").querySelector('video');

				iframe.classList.add('d-none');
				//loading.show();
				checkLoad(iframe);
			};

		function checkLoad(iframe){
			iframe.onload = setTimeout(() =>{
				iframe.classList.remove('d-none');
				//loading.hide();
			}, 300);
		}


		overlay.addEventListener("click", closeVideoTubeModal);
		// document.addEventListener('click', openVideoTubeModal)
		let video_slide =  document.querySelectorAll('.tube')
		video_slide.forEach(function(item){
			item.onclick = openVideoTubeModal;
		})
    
}