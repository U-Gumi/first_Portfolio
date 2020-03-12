$(function() {
	/*목록 버튼*/
	$("#btn-back").click(function() {
		history.go(-1);
	});

	/*top아이콘*/
	$(".fas").click(function() {
		$("html, body").animate({scrollTop: 0});
	});
});
