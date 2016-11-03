// menu controller
var isVisable = false;

$(document).ready(function() {
	$('#menu-icon').click(function() {
		if (isVisable === false){
			$('#nav-bar').animate({
				marginLeft: "0px",
				height: "300px"
			});

			isVisable = true;
		} else {
			$('#nav-bar').animate({
				marginLeft: "-150%",
				height: "0px"
			});
			isVisable = false;
		}
	})
})

$(window).resize(function() {
	if ($(window).width() > 992) {
		$('#nav-bar').css('height', 'auto');
		$('#nav-bar').css('margin-left', '0px');
		$('.menu-item').css('height', 'auto');
	} else if (isVisable === true) {
		$('#nav-bar').css('height', '300px');
		$('#nav-bar').css('margin-left', '0px');
	} else {
		$('#nav-bar').css('height', '0px');
		$('#nav-bar').css('margin-left', '-150%');
	}
})


