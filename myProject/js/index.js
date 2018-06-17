$(()=>{
	$(.main>section>.recommend>ul>li).hover(
		function(){
			$(this).find(".dask").stop().delay(50)
			.animate({
				"top":0,
				opacity:0.8
				},300)
		},
		function () {
        $(this).find(".dask").stop().animate({"top":-200,opacity:0},300)
    }
	)
})