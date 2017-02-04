$('.banner').terseBanner({
	animation:'fade',
	auto:2000,
	adaptive:true,
	arrow:true
 });
$(".uu").on("mouseover",function(){
	$(".uu").stop(true).animate({left:1110},500,"linear");
	$(".tb-arrow").css("display","none");
});
$(".uu").on("mouseout",function(){
	$(".uu").stop(true).animate({left:1120},500,"linear");
	$(".tb-arrow").css("display","block");
});
$(".jj li").eq(0).css("border-bottom","5px solid #e5004f");
$(".jj li:eq(0) a").css("font-size","17px");
$(".jj li:eq(0) span").css("display","block");
$(".box").eq(0).css("display","block");
$(".jj li").on("mouseover",function(){
	$(".jj li").css("border-bottom","5px solid #333333");
	$(".jj li a").css("font-size","14px");
	$(".jj li span").css("display","none");
	$(".box").css("display","none");
	var current=$(".jj li").index(this);
	console.log(current);
	$(".jj li").eq(current).css("border-bottom","5px solid #e5004f");
	$(".jj li").eq(current).find("a").css("font-size","16px");
	$(".jj li").eq(current).find("span").css("display","block");
	$(".box").eq(current).css("display","block");

})
$('.ggdeee').terseBanner({
	animation:'slide',
	auto:2000,
	adaptive:true,
	arrow:true,
 });
$('.msdi').terseBanner({
	auto:2000,
	arrow:true,
 });

$("#gsxng ul li").eq(9).on("click",function(){
	var interval=setInterval(function(){
		$(document).scrollTop($(document).scrollTop()-70);
		if($(document).scrollTop()<=0){
			clearInterval(interval)
			}
	},10);
	
});
$(window).scroll(function(){

	if($(document).scrollTop()<660&&$(document).scrollTop()>=0){
		$("#gsxng ul li").css("display","none")
	}else if($(document).scrollTop()<1600&&$(document).scrollTop()>660){
		$("#gsxng ul li").css("display","block")
		$("#gsxng ul li").removeClass("active")
	}else if($(document).scrollTop()>1600){
		$("#gsxng ul li").eq(0).addClass("active")
		$(window).scroll(function(){
			var index=Math.floor(($(document).scrollTop()-1600)/418)
			if(index>=0){
			$("#gsxng ul li").removeClass("active")
			$("#gsxng ul li").eq(index).addClass("active")
			}
		})
	}
})
$("#gsxng ul li").on("click",function(){
	var index=$(this).index()
	$(document).scrollTop(index*430+1800)
})












































