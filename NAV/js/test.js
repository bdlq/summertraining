$(function(){
	$(".red").mouseover(function(){
		alert("red事件被触发");
	});
	$(".blue").mouseover(function(){
		alert("blue事件被触发");
	})
	$("div.kid:eq(0)").html("这是第一个元素");
	$("button").click(function(){
		alert("你好小米青子");
	});
	$("button").eq(0).trigger("click");
});

// $(function(){
// 	$(".parent4").animate({
// 		"left":"1000",
// 		"height":"500px"
// 	},5000);
// });

