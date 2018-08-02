$("#slick-service-description").slick({
	slidesToShow: 3,
	slidesToScroll: 0,
	dots: false,
	
		responsive: [


		{
			breakpoint: 748,
			settings: {
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
	]
});
