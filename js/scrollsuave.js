$(document).ready(function($) { 
	$(".scroll").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
	});
	$(".btn").click(function(){
		$(".portifa").slideDown("slow");
	});
});