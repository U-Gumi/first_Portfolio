<?php
include_once $_SERVER['DOCUMENT_ROOT']."/mypogal/_libs/initial.php";
$detail = mypogal::detail($_GET['cno']);
?>
<div class="worksdetail-wrap">
	<h1 class="worksdetail-subject"><?=$detail->title; ?></h1>   <!--클릭하고온 포트폴리오 제목 -->
	
	<ul class="worksdetail-status">  <!---->
		<li><span class="label">Hits </span><span class="value"><?=$detail->hits; ?></span></li>
		<li><span class="label">Registered </span><span class="value"><?=$detail->registered; ?></span></li><!--필드명과 필드 값?-->	
	</ul>
	
	<div class="worksdetail-content"><?=$detail->content; ?></div>   <!--컨텐츠 나오는 부분-->
	<div class="worksdetail-foot">
		<button type="button" id="btn-back">BACK</button>
	</div>   
</div>