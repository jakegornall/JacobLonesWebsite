// menu controller
var isVisable = false;

$(document).ready(function() {
    $('#menu-icon').click(function() {
        if (isVisable === false){
            $('#nav-bar').animate({
                marginLeft: "0px",
                height: "45px"
            });
            setTimeout(function(){
                $('#nav-bar').css('height', 'auto');
            }, 501)
            

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
        $('#nav-bar').css('height', 'auto');
        $('#nav-bar').css('margin-left', '0px');
    } else {
        $('#nav-bar').css('height', '0px');
        $('#nav-bar').css('margin-left', '-150%');
    }
})
var fixedNavBar = $('#fixed-nav-bar');
// shows top nav bar when scrolled past 400px.
$(document).scroll(function() {
    var y = $(this).scrollTop();
    var width = $(this).width();
    if (y > 400 && width > 992) {
      fixedNavBar.fadeIn();
    } else {
      fixedNavBar.fadeOut();
    }
});



// creates smooth window scroll when a tag is clicked.
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, 'swing', function () {
        window.location.hash = href;
    });
    return false;
});