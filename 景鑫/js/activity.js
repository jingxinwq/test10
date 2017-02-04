(function($){
		$.ajax({
		url:"../json/activity1.json",
		type:"get",
		success:function(result){
			console.log(result);
			$(result).each(function(index,data){
				var li=$("<li>");
				var imgs=$("<p>").css("backgroundImage","url("+data.goodsListImg+")");
				li.append(imgs).append($("<p>").html(data.goodsName)).append($("<p>").html(data.price));
				li.appendTo($("ul#act1"));
			})
		}, //成功回调
		error:function(error){
			console.log(error);
			} //失败回调
		});

})(jQuery)