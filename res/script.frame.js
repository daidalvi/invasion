
addImages();

function addImages(){
	if($('.index-page').length==0){
		var src = $("img:first").attr("src");
		if(src){
			$(document.body).prepend("<div class='bg-photo-container'><div class='bg-photo' "+
				" style='background-image:url(\""+src+"\")'></div></div>");
		}
	}
}

function lucid_open(elem, param){
	title = $(elem).find('.lucid_title').text().replace(/ /g, '_');;
	num = $('.lucid_post').length-param+1;
	var season = "Зима";
	if(parseInt(param) > 24){
		season = "Лето";
	}else if(parseInt(param) > 12){
		season = "Осень";
	}
	page = "ZE--Мы--Инвазия--"+season+"--"+num+"_"+title.replace(/\?/g, '')+".html";
	window.location = page;
	
}
if($('.index-page').length==0){
	if (window.addEventListener) {
	  window.addEventListener("scroll", function () {fix_sidemenu(); });
	  window.addEventListener("resize", function () {fix_sidemenu(); });  
	  window.addEventListener("touchmove", function () {fix_sidemenu(); });  
	  window.addEventListener("load", function () {fix_sidemenu(); });
	} else if (window.attachEvent) {
	  window.attachEvent("onscroll", function () {fix_sidemenu(); });
	  window.attachEvent("onresize", function () {fix_sidemenu(); });  
	  window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
	  window.attachEvent("onload", function () {fix_sidemenu(); });
	}
}
function fix_sidemenu() {
    if (scrolltop() > 120) {
      $('.gohome').addClass("fixed");
      $('.title').addClass("fixed");
    } else {
      $('.gohome').removeClass("fixed");
      $('.title').removeClass("fixed");
    }

}

function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}