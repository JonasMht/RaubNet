var matrix = JSON.parse(sessionStorage.getItem("matrix"));
if(!matrix){
    var matrix=[0,0,0,0,0,0,0,0];
}
var min=1;
$(document).ready(function () {
 var swiper = new Swiper('.swiper-container_prime', {
	 loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
	   autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

    });
	});


if(matrix[6]==0){
jQuery.get('asset/pages/page_count.txt?v=c298c7f8233d', function(txt) {
    matrix[0] = txt;
    matrix[3] = txt;
    sessionStorage.setItem("matrix", JSON.stringify(matrix));
});

jQuery.get('asset/background/bg_count.txt?v=c298c7f8233d', function(txt) {
    matrix[4] = txt;
    sessionStorage.setItem("matrix", JSON.stringify(matrix));
function getRandomArbitrary(min, max) {
 return Math.floor(Math.random() * (max ) + min);
}
    matrix[7] = getRandomArbitrary(min, txt);
    sessionStorage.setItem("matrix", JSON.stringify(matrix));
});
    matrix[1] = 1;
    sessionStorage.setItem("matrix", JSON.stringify(matrix));

	$(window).ready(function() {
        matrix[2] = 1;
        matrix[5] = 1;
        matrix[6] = 1;
    sessionStorage.setItem("matrix", JSON.stringify(matrix));
        location.reload();
	});

}



function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max ) + min);
}

if(matrix[6]==1){
$(window).on('load', function() {
  console.log( "ready!" );
  $("body").addClass("loaded");
    setTimeout(function(){
    matrix[6] = 2;
    sessionStorage.setItem("matrix", JSON.stringify(matrix));
    }, 900);
});
}

if(matrix[5]==1 && matrix[6]==2){
	$("body").addClass("bye");
}


$(window).ready(function() {
	var dir2=sessionStorage.getItem("dir2");
	var neopage = sessionStorage.getItem("neopage");
	var page_count = sessionStorage.getItem("page_count");





/*Select folder img*/

var fileextension = ".jpg?v=c298c7f8233d";

	/*background count*/


/*Banner Randomiser and loader*/


/*Select folder img*/
var dir3="asset/background/"+ matrix[7];

$("#background").append('<img style="object-fit: cover;object-position: center;position:fixed;z-index: -2;min-height:100%; min-width:100%;left: 50%;transform: translate(-50%, 0);" preload="true" src="'+dir3+fileextension+'">');
});