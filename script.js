function openOffCanvas() {
	$(".dark-layer").removeClass('d-none').addClass('d-block');
	$("body").addClass('no-scroll');
	$(".off-canvas").addClass('active');
}

function closeOffCanvas() {
	$(".dark-layer").removeClass('d-block').addClass('d-none');
	$("body").removeClass('no-scroll');
	$(".off-canvas").removeClass('active');
}

$(".menu-button").click(function() {
    openOffCanvas();
});

$(".close").click(function() {
    closeOffCanvas();
});

$(".dark-layer").click(function() {
    closeOffCanvas();
});

$(window).on("load", function (e) {
    setTimeout(function() {
        $('.modal').modal('show')
    }, 2000);
});