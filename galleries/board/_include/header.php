<div id="header" class="header">
	<a href="./"><div class="header-logo"></div></a>
	<input type="checkbox" id="header-navi-toggle" />
	<label for="header-navi-toggle"><span></span></label>
	<div id="header-navi" class="header-navi">
		<ul>
			<li class="<?=!isset($_GET['sub']) ? "on" : "" ?>"><a href="./">HOME</a></li>
			<li class="<?=isset($_GET['sub']) && $_GET['sub'] == "history" ? "on" : "" ?>"><a href="./?sub=history">HISTORY</a></li>
			<li class="<?=isset($_GET['sub']) && $_GET['sub'] == "dancingtrick" ? "on" : "" ?>"><a href="./?sub=dancingtrick">DANCING&TRICK</a></li>
			<li class="<?=isset($_GET['sub']) && $_GET['sub'] == "placetoride" ? "on" : "" ?>"><a href="./?sub=placetoride">PLACE TO RIDE</a></li>
			<li class="<?=isset($_GET['sub']) && $_GET['sub'] == "components" ? "on" : "" ?>"><a href="./?sub=components">COMPONENTS</a></li>
		</ul>
	</div>
</div>