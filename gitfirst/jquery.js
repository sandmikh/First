$(document).ready(function() {
	$("#test").bind("click", function(event) {
		$(event.target).parent().css("text-align");
		$(event.target).animate ({
			width: $(event.target).width() * 1.5,
			height: $(event.target).height() * 1.5,
		}, 1000);
		$(event.target).animate ({
			width: $(event.target).width() / 1,
			height: $(event.target).height() / 1,
		}, 1000);
		//$(event.target).stop();
	});
});

$(document).ready(function(){
	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});		 
});