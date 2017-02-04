(function($){
	$("#yourname").on("blur",function(){
		$("#yourname").css("borderColor","#eee")
     	$("#std").val("长度6-8位字母、数字、下划线").css("color","#888")
		var re = /^[a-zA-Z_][a-zA-Z_0-9]{5,19}$/;
		if(re.test($("#yourname").val())==false||$("#yourname").val()==""){
     	$("#yourname").css("borderColor","red")
     	$("#std").val("请输入正确用户名").css("color","red")
     	}
	})
	$("#yourpass").on("blur",function(){
		if($("#yourpass").val()==""){
     	$("#yourpass").css("borderColor","red")
     	$("#ert").val("请输入正确密码").css("color","red")
     	}
	})
	$("#yourpass1").on("blur",function(){
		$("#yourpass1").css("borderColor","#eee")
     	$("#ste").val("两次密码要一致").css("color","#888")
		if($("#yourpass").val()!=$("#yourpass1").val()){
		$("#yourpass1").css("borderColor","red")
     	$("#ste").val("请输入正确密码").css("color","red")
	}
	})

    var save;
    function start(){
    save = "";
    var a = [0,1,2,3,4,5,6,7,8,9];
        for(var i = 0;i<4;i++){
            var check = Math.round(Math.random()*9);
            save += a[check]
        }
        $(".display").html(save).css("text-align","center");
    }
    start();
 	$("#yz").on("blur",function(){
        if(save == $("#yz").val()){            
        }else if($("#yz").val() == ""){
			$("#yz").css("borderColor","red")
        }else{
            $("#yz").css("borderColor","red")
            start();
        }
    })
 	$("#button1").on("click",function(){
 		$.ajax({
 			type:"post",
 			url:"../json/register.php",
 			data:{
                name: $("#yourname").val(),
                password: $("#yourpass").val()
            },
            success:function(result){
                    console.log(result);
            }
 		}).done(function(result){
                if(result==$("#yourname").val()) {
                    
                }
                else{
                    location.href="http://localhost/xiangmu/html/index.html"

                }

            }).fail(function(){
                console.log("连接数据库失败")
            })



 	})






})(jQuery)