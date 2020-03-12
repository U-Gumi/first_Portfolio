$(function() {
	var $mypath = $("#mypath");                        // 아래 0.. 하나밖에 없기 때문에 0 으로 . 
	var totalPathLength = $mypath[0].getTotalLength(); //[0]은 만들어진 path 엘리먼트 객체의 인덱스. 배열아님. 
  																									 //getTotalLength; path의 길이를 알려주는 메소드. 
	//console.log(totalPathLength); // 패스의 길이 
	
	// path 속성(svg 전용 속성)을 정의한다. 
	$mypath.css({
		"stroke-dasharray": totalPathLength, //dash선을 만들어주는 속성.
		"stroke-dashoffset": totalPathLength //선위치이동(path가 쭉그어지는 애니메이션을 위해서)선의 길이만큼 이동?
		  }).animate({
		  	strokeDashoffset: "-=" + totalPathLength   //상대값으로 설정
	  }, 2000);
  
    /*ABM 스크롤 이벤트*********************************************************************//*스킬*/
   //totalLength 초기화 
 $(".ABM-contents42 > div > svg > circle").each(function() {
 	var totalLength = this.getTotalLength();
 	$(this).css({
	    strokeDasharray: totalLength,
        strokeDashoffset: totalLength
     })
 });
   
  var isSkillAnimated = false;
  $(window).on("scroll", function() {
  		if (isSkillAnimated) return;
  		
    	var targetTop = $(".ABM-contents4").position().top;
    	if (targetTop - 300 < window.scrollY) {
    		isSkillAnimated = true
    		console.log("OK");
    		
/*스킬 svg 모션*/
		    var skillRate = [0.8, 0.85, 0.6, 0.85, 0.6];
		   $(".ABM-contents42 > div > svg > circle").each(function(index) {
		      $(this).after('<text></text>')
		         var totalLength = this.getTotalLength();  // this 는 써클 레리먼트 객체. 네이티브 방식. 
		         $(this).animate({
		            strokeDashoffset: "-=" + (totalLength * skillRate[index])
		         }, {
		            duration: 1000,
		            //밑에 코드가 숫자올라가는 모션
		           progress: function(animation, progress){   //progress: 진행율 //소수점_ceil: 올림 round: 반올림 floor:버림
		              var rate =  (Math.floor((skillRate[index] * progress) * 100)) + "%";
		              
		              $(this).parent().parent().find("div").text(rate);
		           }
		         });      
		   });                   
			
    	} 
    });
   
});






/*인스타연동********************************************************************/
$(document).ready(function(){
	
  var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
  var photoData;

  var $wrap = $('.ABM-contents5-insta'); //인스타포스트를 쌓아줄 부모선택자명
  var count_num = 10;  //한페이지에 불러올 인스타 포스트 갯수 (최대:33개)
  var token = "8694127265.1677ed0.a6a0992f394d4d3db5fde637da4ba424";//토큰 넣는곳
  var text_count =10; //인스타본문 글자 짜를 갯수
 
  var getData = function(url) {
    $.ajax({
      url: url,
      dataType: 'jsonp',
      data: {
        access_token: token, 
        count:count_num
      }
    })
    .success(function(data) {
      photoData = data;	
      //console.log(photoData);      
      var post = photoData.data;       

      $(post).each(function(i){

        //인스타그램 데이터 추출 
        var imgUrl = this.images.low_resolution.url;
        var imgLink = this.link;
        var tags = this.tags[0];
        var caption;

        if(this.caption){
          caption = this.caption.text;   
          var len = caption.length;
                
          if(len>text_count){
            caption = caption.substr(0,text_count)+"...";  
          }  
        }
        //DOM요소 생성
        $wrap.append(
          $('<div class="item '+tags+'" style="background-image:url('+imgUrl+');">').append(
            $('<a href="'+imgLink+'">').text(caption)
          ) 
        );
      });
    })
    .error(function() {
		  alert("데이터불러오기에 실패했습니다");
    })
  }
  getData(dataURL);   
});

/*자격증 버튼 모션********************************************************/
(function() {
	[].slice.call( document.querySelectorAll( '.stack' ) ).forEach( function( el ) {
		var togglebtt = el.previousElementSibling,
		togglefn = function() {
				if( classie.hasClass( el, 'active' ) ) {
					classie.removeClass( el, 'active' );
				}
				else {
					classie.addClass( el, 'active' );
				}
			};

		togglebtt.addEventListener( 'click', togglefn );
		
		/*스크롤이벤트추가*/
		window.addEventListener("scroll", function() {
			//console.log(el.parentElement.offsetTop);
			if (el.parentElement.offsetTop - 500 < scrollY) {
				classie.addClass( el, 'active' );
			} else {
				if( classie.hasClass( el, 'active' ) ) {
					classie.removeClass( el, 'active' );
				}				
			}
			
		});
	} );
})();

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
