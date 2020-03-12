/***********************************************************************
 * @iroSOFT
 * www.devdic.com, www.cydemy.com
 * 다음 소스코드는 반응형 웹사이트에 사용되는 그리드 레이아웃 처리 시스템입니다.
 * 반드시 출처를 밝힌 상태에서 누구든지 사용(수정)이 가능합니다.
 * Example:
 * $(window).on('resize', {
 *		grid: '.list', gridMaxColumnCount, gridColumnWidth: width, girdGap: gap
 *	}, setGridLayoutToResponsive).trigger('resize');
 * grid: <stirng> 그리드를 컬럼을 감싸는 요소의 class or id
 * gridMaxColumnCount: <number> 최대 컬럼 수 설정
 * gridColumnWidth: <number> 그리드의 컬럼의 가로 크기
 * gridGap: <number> 그리드의 오른쪽 margin으로 사용할 값
 */
function setGridLayoutToResponsive(e) {
    // 그리드 항목에 적용할 오른쪽 margin을 고려한 실제 필요한 가로크기를 변경.
    var columnWidth = e.data.gridColumnWidth + e.data.gridGap;  //아이템의 가로크기. 
    var countColumnPerRow = Math.floor(window.innerWidth / columnWidth);  // 최대의 몇개의 멀럼을 넣을수 있으냐아~~
    var applyWidth;

    $(e.data.grid).css("width", function() {
		// 최대 컬럼수를 이하인 경우에만 Grid Wrapper의 가로 크기를 계산
        if (countColumnPerRow <= e.data.gridMaxColumnCount) {
            var remainingHorizontalWidth = window.innerWidth % columnWidth;  /// 가로 방향의공간이 남았냐 남지 않았냐 판단. 
            // 남은 공간이 없이 맞는 경우 실제 필요한 Grid Wrapper의 가로 크기를 계산
            if (remainingHorizontalWidth == 0) {
                applyWidth = (window.innerWidth / columnWidth) * columnWidth;
                // 남은 공간이 있다면 남은 공간을 뺀 크기로 Grid Wrapper 가로 크기를 처리
            } else {
                applyWidth = window.innerWidth - remainingHorizontalWidth;
            }
			
		// 최대 컬럼수 이상일 경우에는 고정값으로 처리
        } else {
            applyWidth = columnWidth * e.data.gridMaxColumnCount;
			countColumnPerRow = e.data.gridMaxColumnCount;
        }

        // 행의 마지막 번째 간격의 값을 뺌(이후 margin: 0 처리 필요)
        applyWidth -= e.data.gridGap;

        // 최소 컬럼 폭을 유지하도록 처리
        if (applyWidth < e.data.gridColumnWidth) applyWidth = e.data.gridColumnWidth;

        return applyWidth + 'px';
    }).css("margin", "0 auto");

    /**
     * 즉시 다음 함수를 실행한다.
     * Grid Wrapper 자식 요소(그리드 항목)의 오른쪽 margin 처리
     * 행의 마지막 항목은 margin-right를 제거
     */
    (function() {                // 호출업이 바로수행
        //  
        $(e.data.grid).children().each(function() {
            $(this).css("margin-right", function() {
                if (($(this).index() + 1) % countColumnPerRow == 0) {
                    return "0"
                } else {
                    return e.data.gridGap + "px";
                }

            });
        });

    })();
}


 /*스크롤이벤트******/
function scrollEffectSetter(motionTarget, className, scrollTarget) {  
  var vh, curScrollY, scrollTargetTop;

  $(window).on("resize", function() {
    vh = window.innerHeight;
  }).trigger("resize");

  $(window).on("scroll", function() {
    curScrollY = window.scrollY;
    scrollTarget = scrollTarget || motionTarget;

    scrollTargetTop = $(scrollTarget).position().top;

    if (scrollTargetTop - (vh / 1) <= curScrollY && !$(motionTarget).hasClass(className)) {
      //console.log("OK");
      $(motionTarget).addClass(className);
    } 
    
    if (scrollTargetTop - (vh / 1) > curScrollY && $(motionTarget).hasClass(className)) {
      $(motionTarget).removeClass(className);
    	
    }
  });
  
}
