$( document ).ready(function() {
 
    // Your code here.
    $(window).scroll(function() {
	    var scroll = $(window).scrollTop();
      
	    if (scroll >= 574 && scroll <= 16700) {
			$("#upButton").removeClass("scaleDownAnimation").addClass("scaleUpAnimation");
	    } if (scroll <= 573 || scroll >= 16701) {
	    	$("#upButton").addClass("scaleDownAnimation");
	    } else {
		console.log(scroll);
	    }
	});

	$( "#upButton" ).click(function() {
		null;
	});


 
});

