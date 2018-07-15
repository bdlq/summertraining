$(function(){
		$(".right,.left").css("display","none");
		// console.log($(".huadong-container").parent().children("span").html());
		
			$("div[class |= 'nav'][class $= 'header']").mouseenter(
				function(event){
								 $(this).children(".huadong-container")
									.children()
										.children(":animated").stop(true,false);
									$(this).children(".huadong-container").children().
												children(".right").show(0).animate({
												 		"width":"100%"
													 },200);
								$(this).children(".huadong-container").children()
											.children(".left").show(0).animate({
									"width":"100%"
								},200);
						})
						.mouseleave(function(event){
									    		$(this).children(".huadong-container")
												.children()
													.children(":animated").stop(true,false);

										    	$(this).children(".huadong-container").children().
										    				children(".right").show(0).animate({
															 		"width":"0%"
																 },200);
											$(this).children(".huadong-container").children()
														.children(".left").show(0).animate({
												"width":"0%"
											},200);
						});
											
});