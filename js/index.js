$(function(){
	//轮播图
	var swiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		loop:true,
		autoplay:1000,
		effect:"fadeIn"
	});
	//查看更多
	var state=0;
	$(".title-check").click(function(){
          if(state==0){         	
          	$(".shopp").hide();
            $(".shopp-img3").show();
          	state=1;
          }else{
            $(".shopp").show();
            $(".shopp-img3").hide();
          	state=0;
          }
	});

	//查看全部团购
	$(".lookAll").click(function(){
          if(state==0){
          	$(".likefood2").show();        	
          	$(".lookAll").html("收起全部");
          	state=1;
          }else{
          	$(".likefood2").hide();
          	$(".lookAll").html("查看全部团购")
          	state=0;
          }

	});	
  
    // 下拉列表 
    var state=0;
     $(".city").click(function(){
        if(state==0){
           $(".cityul").show();
           $(".selectImg").css("transform","rotate(180deg)");           
           state=1
         }else{
           $(".cityul").hide();
           $(".selectImg").css("transform","rotate(360deg)")
           state=0;
         }      
     });

     // 被选中的li会出现在导航条
   $(".cityul li").click(function(){
         $(".text").html($(this).html());
   });
});



window.onload=function(){
    //倒计时
	timer=setInterval(function(){
		var userTime= new Date(2017,4,17,12,0,0);
	    var nowTime = new Date();
	    var onlyTime = Math.floor(userTime-nowTime)/1000;
	    if(onlyTime>=0){
	    	        showTime.innerHTML = Math.floor(onlyTime/86400)+"天"+Math.floor(onlyTime%86400/3600)+"时"+Math.floor(onlyTime%86400%3600/60)+"分"+Math.floor(onlyTime%60)+"秒";
				}else{
					showTime.innerHTML = "开始抢购！";
				}
			},1000);
	
}