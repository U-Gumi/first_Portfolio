<!DOCTYPE html>
<html>
<head>
<title>about board</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device=width, initial-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE-edge" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"><!---->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script><!---->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<link rel="shorcut icon" href="./images/favicon.ico" type="image/x-icon" />
<script type="text/javascript" src="./js/lib.js"></script>
<!--기본, 레이아웃-->
<link href="./src/default.css" type="text/css" rel="stylesheet" />
<link href="./src/layout-narrow.css?<?=time()?>" media="screen and (max-width: 800px)" type="text/css" rel="stylesheet" />
<link href="./src/layout-wide.css?<?=time()?>" media="screen and (min-width: 801px)" type="text/css" rel="stylesheet" />

 <!--서브페이지-->
<?php if (isset($_GET['sub'])) { ?> 
<link href="./src/sub-narrow.css?<?=time()?>" media="screen and (max-width: 800px)" type="text/css" rel="stylesheet" />
<link href="./src/sub-wide.css?<?=time()?>" media="screen and (min-width: 801px)" type="text/css" rel="stylesheet" />
<!--메인페이지-->
<?php } else { ?>   
<link href="./src/main-narrow.css?<?=time()?>" media="screen and (max-width: 800px)" type="text/css" rel="stylesheet" />
<link href="./src/main-wide.css?<?=time()?>" media="screen and (min-width: 801px)" type="text/css" rel="stylesheet" />
<?php } ?>
</head>
<body>
<div class="header-wrapper">
<?php include "./_include/header.php"; ?>
</div>

<div class="body-wrapper">
	<div class="body">
		<?php
		if (isset($_GET['sub'])) {
			include "./sub/{$_GET['sub']}.php";
		} else {
			include "./main.php";
		}
		?>
	</div>
</div>

<div class="footer-wrapper">
<?php include "./_include/footer.php"; ?>
</div>

</body>
</html>