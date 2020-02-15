var matrix = JSON.parse(sessionStorage.getItem("matrix"));
/*attribute*/
var page=matrix[3];
var max=matrix[3];
var min=1;
var i=0;

if(matrix[0]==matrix[3]){
$("body").addClass("inactive1");
}
if(matrix[0]==1){
$("body").addClass("inactive2");
}
if(matrix[0] != matrix[3] && matrix[0] != 1){
	$("body").removeClass("inactive1");
   $("body").removeClass("inactive2");
   }


$( ".button-random" ).click(function() {
    matrix[0]=matrix[3];
    matrix[0] = getRandomArbitrary(1, max);
    sessionStorage.setItem("matrix", JSON.stringify(matrix));
	location.reload();
});
$( ".button-previous" ).click(function() {
        if(matrix[0]!=1){
            matrix[0]=matrix[0];
			matrix[0] =matrix[0] -1;
            sessionStorage.setItem("matrix", JSON.stringify(matrix));
			location.reload();
        }
});

$( ".button-next" ).click(function() {
    if(matrix[0]!=matrix[3]){
        matrix[0]=matrix[0];
        matrix[0] = ++matrix[0] ;
        sessionStorage.setItem("matrix", JSON.stringify(matrix));
		location.reload();
    }
});
$( ".button-last" ).click(function() {
    if(matrix[0]!=matrix[3]){
        matrix[0]=matrix[0];
        matrix[0] = matrix[3] ;
        sessionStorage.setItem("matrix", JSON.stringify(matrix));
		location.reload();
    }
});
	$( ".button-first" ).click(function() {
    if(matrix[0]!=1){
        matrix[0]=matrix[0];
        matrix[0] = 1 ;
        sessionStorage.setItem("matrix", JSON.stringify(matrix));
		location.reload();
    }
});
/*Folder count end*/
/*randomiser*/
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max) + min);
}
/*Select folder img*/



/*Text - title descriptions sub-images embedded vids*/
/* 'asset/pages/page_'+pageload+'/text.txt'  */
jQuery.get('asset/pages/page_'+matrix[0]+'/context_script.txt?v=c298c7f8233d', function(txt) {

    var test="$(document).ready(function () { var swiper = new Swiper('.swiper-container_bis', { autoHeight: true, zoom: true, effect: 'coverflow', grabCursor: true, centeredSlides: true, slidesPerView: 'auto', coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows : true,  }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, keyboard: { enabled: true, }, pagination: { el: '.swiper-pagination', type: 'fraction', }, }); });";
    document.getElementById("context_script").innerHTML = txt+ test; 
});

