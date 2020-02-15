<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="icon" href="asset/img/logo.png?v=c298c7f8233d">
		<link rel="shortcut icon" href="asset/img/logo.png?v=c298c7f8233d">
		<title>RaubNet | Artwork</title>
        <meta name="keywords" content="raubnet,raubbeast,digital,art,future,painting">
        <meta name="description" content="Unity will succeed!"/>
		<meta name="msapplication-tap-highlight" content="yes"/>

        
		<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
		<link rel="stylesheet" href="css/global/global.css?v=c298c7f8233d">
		<link rel="stylesheet" href="css/artwork/artwork.css?v=c298c7f8233d">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/swiper.css?v=c298c7f8233d">
        <script src="js/jquery-3.3.1.min.js?v=c298c7f8233d"></script>
        
    </head>

<body>
    
    
    <div class="pillar" style="min-height: 100%;">
<header>
    
    <?php include('subdiv/logo.php');?>
    
	<div id="main-navbar" >
	 <nav id="navigation">
        <ul class="nav-bar">
            <li class="home-button nav-common" title="Home"><a href="home.php">HOME<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></a></li>
			<li class="artwork-button nav-common" title="Artwork"><a style="color:rgba(255,234,150,1);" href="artwork.php">ARTWORK<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></a></li>
            <li class="content-button nav-common" title="Content"><a href="content.php">CONTENT<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></a></li>
            <li class="videos-button nav-common" title="Videos"><a href="videos.php">VIDEOS<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></a></li>
            <li class="support-button nav-common" title="Support"><a href="shop.php">SHOP<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></a></li>
            <li class="about-button nav-common" title="About"><a href="about.php">ABOUT<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></a></li>
        </ul>
    </nav>
	</div>
<div id="flash-info" style="overflow:hidden;">
	<img id="flash-text" src="asset/flash_info/info_1.png?v=c298c7f8233d" style="position: absolute;">
	</div>
<div id="bannerContainer">
	<div class="swiper-container_prime">
    <div class="swiper-wrapper" id="banner_show">
    </div>
  </div></div>
	
	 
</header>
<article>
    <script>
        var matrix = JSON.parse(sessionStorage.getItem('matrix'));
            matrix[3]=7;
            sessionStorage.setItem("matrix", JSON.stringify(matrix));
    </script>
    
<?php
foreach (glob("asset\pages\page_1\*.html") as $filename) {
    echo "$filename"."";
}
?>
    
    
<?php
echo "<script>document.writeln(matrix[0]);</script>";
?>
    
    <section class="first-selector" id="selector">
		<button class="button-first" title="First" style="border:none;"><i class="fas fa-angle-double-left"></i></button>
        <button class="button-previous" title="Previous" style="border:none;"><i class="fas fa-angle-left"></i></button>
        <button class="button-random" title="Random" style="border:none;"><i class="fas fa-random"></i></button>
		<button class="button-next" title="Next" style="border:none;"><i class="fas fa-angle-right"></i></button>
		<button class="button-last" title="Latest" style="border:none;"><i class="fas fa-angle-double-right"></i></button>
    </section>
	

  <!-- Swiper -->
  <div class="swiper-container_bis">
    <div class="swiper-wrapper" id="content">
    </div>   
  </div>
		
	<section id="description" style="position: relative;">
        
	<section class="second-selector" id="selector">
		<button class="button-first" title="First" style="border:none;"><i class="fas fa-angle-double-left"></i></button>
        <button class="button-previous" title="Previous" style="border:none;"><i class="fas fa-angle-left"></i></button>
        <button class="button-random" title="Random" style="border:none;"><i class="fas fa-random"></i></button>
		<button class="button-next" title="Next" style="border:none;"><i class="fas fa-angle-right"></i></button>
		<button class="button-last" title="Latest" style="border:none;"><i class="fas fa-angle-double-right"></i></button>
    </section>
<div style=" width:100%; height:auto;">
<ul class="TXTnIMG">
    <p class="title"><p>
<p class="subtitle" ></p>
<li><p class="subtext subtext1" ></p></li>
<li><div class="subImg"></div>
<li><p class="subtext subtext2" ></p></li>
</ul>
</div>
</section>
</article>
    </div>
    

	
	<?php include('subdiv/E3.php');?>
	
	
	
	
	
	
	<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
	<script src="js/script.js?v=c298c7f8233d"></script>
	<script src="js/artwork.js?v=c298c7f8233d"></script>
	<script id="context_script" type="text/javascript"></script>
	<script id="context_script_prime" type="text/javascript"></script>
	<script src="js/swiper.js?v=c298c7f8233d"></script>
	  <script type="text/javascript">
          
    jQuery.get('asset/context_script/banner_script.txt?v=c298c7f8233d', function(txt) {
	document.getElementById("context_script_prime").innerHTML = txt;
    });
          
    </script>
</body>
</html>