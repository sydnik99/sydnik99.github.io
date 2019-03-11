$(document).ready(function(){
console.log("hello")

setTimeout(function(){
    $(".snooze").addClass("alarming"); 
    $(".sleep").addClass("alarming");
    $(".restart").addClass("alarming");  
    $(".again").addClass("alarming");
    var imgs=$(".fem, .dog img, .ave img, .mono img, .cherry img, .bee img");
    imgs.each(function(){
    		$(this).animate({"margin-left":20}, 250, function(){
    		$(this).animate({"margin-left":-20}, 500, function(){
    		$(this).animate({"margin-left":20}, 500, function(){
    			$(this).animate({"margin-left":0}, 250, function(){
    				$(this).animate({"margin-top":9000}, 500);
	
    			});	
		    		});	
		    	}); 
		    });

		    });
    
  }, 30000);

  $(".sleep").click(function() { 
    $(".snooze").removeClass("alarming");
    $(".sleep").removeClass("alarming");
    $(".restart").removeClass("alarming");
    $(".again").removeClass("alarming");
  });


  $(".again").click(function() { 
    $(".restart").removeClass("alarming");
    $(".again").removeClass("alarming");
    $(".snooze").removeClass("alarming");
    $(".sleep").removeClass("alarming");
  });


}); 