<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="icon" href="asset/img/logo.png">
		<link rel="shortcut icon" href="asset/img/logo.png">
		<title>RaubNet | Artwork</title>
        <meta name="keywords" content="raubnet,raubbeast,digital,art,future,painting">
        <meta name="description" content="Unity will succeed!"/>
		<meta name="msapplication-tap-highlight" content="yes"/>

        
		<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
		<link rel="stylesheet" href="css/global/global.css">
		<link rel="stylesheet" href="css/artwork/artwork.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/swiper.css">
        <script src="js/jquery-3.3.1.min.js"></script>
        
    </head>

<body>
    
    
    <div class="pillar" style="min-height: 100%;">
<header>
    
	

    <style>
        .artwork-button a{
            color: rgba(255,234,150,1);
                }
        .artwork-common a:link{
            color: rgba(255,234,150,1);
        }
        .artwork-common a:hover{
            color: rgba(255,234,150,1);
        }
        .artwork-button a:visited{
	       color: rgba(255,234,150,1);
                }
    </style>
    
    <?php include('subdiv/media.php');?>
    	
	 
</header>
<article>
    
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
	<script src="js/script.js"></script>
	<script src="js/artwork.js"></script>
    
    <?php include('subdiv/swipe.php');?>

</body>
</html>