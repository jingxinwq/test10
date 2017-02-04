(function($){
	$("#etalage").zoom({
	    zoom_area_width: 300,
	    autoplay_interval :3000,
	    small_thumbs : 4,
	    autoplay : false
	});   

	$("#xuan div").eq(0).css("border","2px solid red")
	$("#xuan div").eq(0).find("b").css("display","block")

	$("#xuan div").on("click",function(){
		$("#xuan div").css("border","1px solid #bbb")
		$("#xuan div").find("b").css("display","none")
		var index=$(this).index()
		$("#xuan div").eq(index).css("border","2px solid red")
		$("#xuan div").eq(index).find("b").css("display","block")
	})
	$(window).scroll(function(){
		// console.log($(window).scrollTop())
		if($(window).scrollTop()>752){
			$(".syerc").css("position","fixed")
			$(".syerc").css({top:0,left:116.5})
		}else{
			$(".syerc").css("position","relative")
			$(".syerc").css({top:0,left:0})
		}
	})



	console.log(location.search.split("=")[1]);
	
	//发送ajax 请求， 根据goodsID,获取详情页面信息。

	var goodID = location.search.split("=")[1];
	$.ajax({
		url:"../json/details.json",
		type:"get",
		data:{goodsID:goodID},
		success:function(result){
			console.log(result[goodID-1]);
				$("#etalage li img").eq(0).attr("src",result[goodID-1].goodsDetailsImg)
				$("#etalage li img").eq(1).attr("src",result[goodID-1].goodsDetailsImg1)
				$(".clearfix li img").attr("src",result[goodID-1].goodsDetailsImg)
				$(".syeb h1").html(result[goodID-1].goodsName)			
				$(".wer3 p").eq(0).find("span").html(result[goodID-1].price)
				$(".wer3 p").eq(1).find("span").html(result[goodID-1].price1)
				console.log("n")							


		}
	}) 

})(jQuery)


































