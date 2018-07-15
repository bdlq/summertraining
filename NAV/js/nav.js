$(function(){
	//隐藏导航栏 header-top
	function headerSlideUp(){
		if($("div.header.top").css("top") > -30 /*&& !$("div.header.top").is(":animate")*/)
		{
			$("div.header-top").animate({
			"top":-$("div.header-top").height()
			});
		}
		// $("div.header-top").stop(true,true);
	}
	function headerSlideDown(){
		if($("div.header.top").css("top") < 0 /*&& !$("div.header.top").is(":animated")*/)
		{  
			$("div.header-top").animate({
			"top":0
			});
		}
	}
	$(window).scroll(function(){
		
		if($(this).scrollTop() > $("div.header-top").height())
		{	
			console.log($("div.header-top").height());
			console.log($(this).scrollTop());
			headerSlideUp();
		}
		if($(this).scrollTop() <  $("div.header-top").height()){
			headerSlideDown();
		}
	});
});  //隐藏导航栏 header-top




$(function(){
	//鼠标悬挂在标题上文本变样式
		//将原标题与就标题存为一个对象
		var header_titles = new Object();
		header_titles = {
			'oldtitle' : ['首&nbsp;&nbsp;&nbsp;页','网站建设','产品服务','成功案例','解决方案','新闻动态','关于我们','联系我们'],
			'newtitle' : ['HOME','WEBSITE','PRODUCT','CASE','SOLUTIONS','NEWS','ABOUT','CONTACT']
		}
		// console.log(header_titles.newtitle[0]);
		//遍历所有标题标签，并绑定事件
		for(var i = 0 ; i < $("div[class |= 'nav'][class $= 'header']").length ; i++)
		{
			//获取每一个nav给每一个nav-header绑定onmouseover事件
			$("div[class |= 'nav'][class $= 'header']").eq(i).mouseenter(function(){  //注意，事件绑定函数只有在被触发时才会被解析并执行，因此，事件绑定函数中的变量对象如果是上一级的变量对象的话，会使用这个变量的最终的值，而不是变量中的值，这里的i就是如此，最后是7，当点击标题的时候，click函数中的i就是7了！
				var title_index = $("div[class |= 'nav'][class $= 'header']").index($(this));
				// console.log(title_index);
				var $nav_header = $(this).find("span.title");
				$nav_header.html(header_titles.newtitle[title_index]);
				$nav_header.css({
					"color":"darkorange",
					"font-family":"Times New Roman"
				});
			}).mouseleave(function(){
				var title_index = $("div[class |= 'nav'][class $= 'header']").index($(this));
				var $nav_header = $(this).find("span.title");
				$nav_header.html(header_titles.oldtitle[title_index]);
				$nav_header.css({
					"color":"black",
					"font-family":"微软雅黑"
				});
			});
		}
});  //鼠标悬挂在标题上文本变样式




$(function(){	
	$("div[class |= 'nav'][class $= 'header']").bind("mouseenter.asd",function(){
		var title_index = $("div[class |= 'nav'][class $= 'header']").index($(this));
		// console.log(title_index);
		if(!$("div.header-content").is(":animated"))
		{
			$("div.header-content").eq(title_index).slideDown();
		}
		else{
			$("div.header-content").eq(title_index).stop(true,false)
								   .slideDown();
		}
	}).bind("mouseleave.asd",function(){
		var title_index = $("div[class |= 'nav'][class $= 'header']").index($(this));
		if(!$("div.header-content").is("animated"))
		{
			$("div.header-content").eq(title_index).slideUp();
		}
		else{
			$("div.header-content").eq(title_index).stop(true,false)
								   .slideUp();
		}
	});
	$(".header-content").mouseenter(function(){
		var content_visible = $(this).prevAll("div.header-content:visible").length;
		var content_hidden = $(this).prevAll("div.header-content:hidden").length;
		var content_index = content_visible + content_hidden;
		// console.log($("div[class |= 'nav'][class $= 'header']").eq(content_index).find("span").html());
		// console.log(content_visible);
		// console.log(content_hidden);	
		$("div[class |= 'nav'][class $= 'header']").eq(content_index).trigger("mouseenter.asd");
	}).mouseleave(function(){
		var content_visible = $(this).prevAll("div.header-content:visible").length;
		var content_hidden = $(this).prevAll("div.header-content:hidden").length;
		var content_index = content_visible + content_hidden;
		$("div[class |= 'nav'][class $= 'header']").eq(content_index).trigger("mouseleave.asd");
	});
	// console.log($("div.header-content:hidden").length)
});  //鼠标悬挂在标题上滑出对应内容




$(function(){

});