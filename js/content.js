var matrix = JSON.parse(sessionStorage.getItem("matrix"));

if(matrix[2] == 2){
   var chain=[2,5,6,20,30]; 
    sessionStorage.setItem("chain", chain);
}else if(matrix[2] == 3){
   var chain=[1,2,3,20];
}

var quanta= "matrix";
if(matrix[2]!=1){
    var capricus=chain.length;
}else{
    var capricus = matrix[3];
}
/*advcontainerced page calculation method*/

/*PAGE COUNT - ALL*/

var factor= capricus/40;
var factor=Math.ceil(factor);



/*SubNav options collage*/
for (i = 1; i<factor+1; i++) {
    
	$("#pages").append("<li id='page"+i+"' style='position:relative;display:inline; '><a class='pageNbr' style='color:rgba(209,174,95,1);cursor: pointer;position:relative; font-family: Cabin, Helvetica, Arial, sans-serif; font-size: 25px;padding:0px 10px 0px 10px;border-radius:25px;text-decoration:none;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;user-select: none; ' onclick='var "+quanta+" = JSON.parse(sessionStorage.getItem(quanta));"+quanta+"[1]="+i+";sessionStorage.setItem(quanta, JSON.stringify(matrix));location.reload();'>"+i+"</a></li>");
	if(i!=factor){
		$("#pages").append("<a style='-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;user-select: none; color:rgba(209,174,95,1);font-size: 25px;'>|</a>");}
}
	$('#page'+matrix[1]+' a').css('color', 'rgba(255,234,150,1)');
    var center = $(window).width()/2
	var ratio =center*(177*10e-5);
    ratio=Math.round(ratio);
    $('#pages').animate({
    scrollLeft: ($('#page'+matrix[1]+'').offset().left-center+ratio)
},0);


if(matrix[1]==1){
	$("body").addClass("inactive2");
}
	if(matrix[1]==factor){
	$("body").addClass("inactive1");
}

$(".button-next").click(function(){
	if(matrix[1]!=factor){
        matrix[1]=matrix[1]+1;
        
	sessionStorage.setItem("matrix", JSON.stringify(matrix));
	location.reload();
}
});

$(".button-previous").click(function(){
	if(matrix[1]!=1){
        matrix[1]=matrix[1]-1;
        
	sessionStorage.setItem("matrix", JSON.stringify(matrix));
	location.reload();
	}
});
$(".button-first").click(function(){
	if(matrix[1]!=1){
        matrix[1]=1;
        
	sessionStorage.setItem("matrix", JSON.stringify(matrix));
	location.reload();
	}
});
$(".button-last").click(function(){
	if(matrix[1]!=factor){
        matrix[1]=factor;
        
	sessionStorage.setItem("matrix", JSON.stringify(matrix));
	location.reload();
	}
});
/*PAGES ORDER - CALCULATIONS HERE*/



	var tracer=0;
		
		

	var nmin=40*(matrix[1]-1);
	var nmax=(40*matrix[1]);
if(matrix[1]==factor){
	var nmax=((40*matrix[1])-(factor*40-capricus));
	
}
	var umax=capricus-nmin;
	var umin=capricus-nmax;
if(matrix[2]==1){

		for (i = umax; i>=umin+1; i--) {
			
            $("#thumb-container").append("<a onclick='"+quanta+"[0]="+i+";sessionStorage.setItem(quanta, JSON.stringify(matrix));' id='nb' style='position:relative;  text-align: center;text-decoration:none;' href='artwork.php' ><img id='" +"nb "+i+"' style='border: 2px solid rgba(0, 5, 20, 1);padding:0px;cursor: pointer;position:relative; width:200px; height:200px; -webkit-touch-callout: none; -webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;user-select: none;' src=" + "asset/pages/page_"+ i +"/subcontent/" + "thumb.jpg" + "></img><d id='" +"nb2 "+i+"' style='color:rgba(209,174,95,1);position:absolute; z-index:2; left:25px;top:-80px; text-align: center;font-family: Cabin, Helvetica, Arial, sans-serif;background-color:rgba(0, 5, 20, 0.8);border-radius:20px;text-decoration:none;padding: 0px 10px 0px 10px;'>"+i+"</d></a>");}


}else{
for (i = umax; i>=umin+1; i--) {

            $("#thumb-container").append("<a onclick='"+quanta+"[0]="+chain[i-1]+";sessionStorage.setItem(quanta, JSON.stringify(matrix));' id='nb' style='position:relative;  text-align: center;text-decoration:none;' href='artwork.php' ><img id='" +"nb "+i+"' style='border: 2px solid rgba(0, 5, 20, 1);padding:0px;cursor: pointer;position:relative; width:200px; height:200px; -webkit-touch-callout: none; -webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;user-select: none;' src=" + "asset/pages/page_"+ chain[i-1]+"/subcontent/" + "thumb.jpg" + "></img><d id='" +"nb2 "+chain[i-1]+"' style='color:rgba(209,174,95,1);position:absolute; z-index:2; left:25px;top:-80px; text-align: center;font-family: Cabin, Helvetica, Arial, sans-serif;background-color:rgba(0, 5, 20, 0.8);border-radius:20px;text-decoration:none;padding: 0px 10px 0px 10px;'>"+chain[i-1]+"</d></a>");}
}

    
    
document.getElementById('category_selection').value=matrix[2];
    
    $("#category_selection").change(function(){
         matrix[2] = $("#category_selection option:selected").val();
         matrix[1]=1;
        sessionStorage.setItem("matrix", JSON.stringify(matrix));
        location.reload();
    });