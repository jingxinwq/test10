(function($){
		$.ajax({
		url:"../json/list.json",
		type:"get",
		success:function(result){
			console.log(result);
			$(result).each(function(index,data){

				var pp=$("<p>").addClass("eed").css("backgroundImage","url("+data.goodsListImg+")");
				var uu=$("<ul>").addClass("dtst");
				var li1=$("<li>").addClass("shds").css("backgroundImage","url("+data.goodsListImg1+")");
				$(li1).appendTo(uu)
				var pp1=$("<p>").addClass("idf").html(data.price)
				var pp2=$("<p>").addClass("sdif").html(data.goodsName)
				var li=$("<li>").addClass("sidx").append(pp).append(uu).append(pp1).append(pp2)
				$(li).appendTo($("ul.hdsg"))
				li.click(function(){
						//唯一标示商品的id信息
						console.log(data.goodsID);
						location.href="../html/details.html?iGoodsID="+data.goodsID;
					})

			})
		}, //成功回调
		error:function(error){
			console.log(error);
			} //失败回调
		});

})(jQuery)