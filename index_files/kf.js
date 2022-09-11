var certifySwiper = new Swiper('#certify .swiper-container', {

			watchSlidesProgress: true,

			slidesPerView: 'auto',

			centeredSlides: true,

			loop: true,

			loopedSlides: 5,

			autoplay: true,

			autoplayDisableOnInteraction: false,

			navigation: {

				nextEl: '.swiper-button-next',

				prevEl: '.swiper-button-prev',

			},

			pagination: {

				el: '.swiper-pagination',

				clickable: true,

			},

			on: {

				progress: function (progress) {

					for (i = 0; i < this.slides.length; i++) {

						var slide = this.slides.eq(i);

						var slideProgress = this.slides[i].progress;

						modify = 1;

						if (Math.abs(slideProgress) > 1) {

							modify = (Math.abs(slideProgress) - 1) * 0.01 + 1;

						}

						translate = slideProgress * modify * 110 + 'px';

						scale = 1 - Math.abs(slideProgress) / 5;

						zIndex = 999 - Math.abs(Math.round(10 * slideProgress));

						slide.transform('translateX(' + translate + ') scale(' + scale + ')');

						slide.css('zIndex', zIndex);

						slide.css('opacity', 1);

						if (Math.abs(slideProgress) > 3) {

							slide.css('opacity', 0);

						}

					}

				},

				setTransition: function (transition) {

					for (var i = 0; i < this.slides.length; i++) {

						var slide = this.slides.eq(i)

						slide.transition(transition);

					}



				}

			}

		})



		new Swiper(' #screen-shot .swiper-container', {

			loop: true,

			autoplay: true,

		});


		//
		// function IsPC() {
		//
		// 	var userAgentInfo = navigator.userAgent;
		//
		// 	var Agemts = new Array(
		//
		// 		"Android",
		//
		// 		"iPhone",
		//
		// 		"SymbianOS",
		//
		// 		"Windows Phone",
		//
		// 		"iPad",
		//
		// 		"iPod"
		//
		// 	);
		//
		// 	var flag = true;
		//
		// 	for (var i = 0; i < Agemts.length; i++) {
		//
		// 		if (userAgentInfo.indexOf(Agemts[i]) > 0) {
		//
		// 			flag = false;
		//
		// 			break;
		//
		// 		}
		//
		// 	}
		//
		// 	return flag;
		//
		// }
		//
		// var isPc = IsPC();
		//
		// if (!isPc) {
		//
		// 	window.location.href = '/'
		//
		//  }