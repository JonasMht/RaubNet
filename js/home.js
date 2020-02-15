var matrix = JSON.parse(sessionStorage.getItem("matrix"));
var quanta="matrix";

	var umax=matrix[3];
	var umin=matrix[3]-5;

		for (i = umax; i>=umin+1; i--) {
$("#latest-updates").append("<a onclick='"+quanta+"[0]="+i+";sessionStorage.setItem(quanta, JSON.stringify(matrix));' id='nb' style='position:relative;  text-align: center;text-decoration:none;' href='artwork.html' ><img id='" +"nb "+i+"' style='border: 2px solid rgba(0, 5, 20, 1);padding:0px;cursor: pointer;position:relative; width:200px; height:200px; -webkit-touch-callout: none; -webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;user-select: none;' src=" + "asset/pages/page_"+ i +"/subcontent/" + "thumb.jpg" + "></img></a>");
        };
