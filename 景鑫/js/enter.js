(function($){


    $(".scd").on("click",function(){
        $.ajax({
            type:"post",
            url:"../json/enter.php",
            data:{
                name: $("#name1").val(),
                password: $("#password1").val()
            },
            success:function(result){
                    console.log(result);
            }
        }).done(function(result){
            if (result==0) {
                alert("用户不存在")
            }
            else{
                location.href="http://localhost/xiangmu/html/index.html"

            }

        }).fail(function(){
            console.log("连接数据库失败")
        })
    })

})(jQuery);