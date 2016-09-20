$(document).ready(function() {
	
	$('#slides').slidesjs({
		width: 940,
		height: 450,
		navigation: true,
		play: {
			active: false,
			// [boolean] Generate the play and stop buttons.
			// You cannot use your own buttons. Sorry.
			effect: "fade",
			// [string] Can be either "slide" or "fade".
			interval: 3000,
			// [number] Time spent on each slide in milliseconds.
			auto: true,
			// [boolean] Start playing the slideshow on load.
			swap: true,
			// [boolean] show/hide stop and play buttons
			pauseOnHover: false,
			// [boolean] pause a playing slideshow on hover
			restartDelay: 2500
			// [number] restart delay on inactive slideshow
			}
	});


	var element = document.querySelector('.allBoxes');
	while( (element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth)){

		 var size = parseInt($(".allBoxes").css('font-size'));

		$('.allBoxes').css('font-size', size - 1 + 'px');

	}


});