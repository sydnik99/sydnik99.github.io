$(document).ready(function(){
console.log("hello")

setTimeout(function(){
    $(".snooze").addClass("alarming"); 
    $(".sleep").addClass("alarming");
    $(".restart").addClass("alarming");  
    $(".again").addClass("alarming");
    var imgs=$(".fem, .dog img, .ave img, .mono img, .cherry img, .bee img");
    imgs.each(function(){
            var delay=0;
            if($(this).parent().hasClass("dog")){
                delay=200;
            }
            if($(this).parent().hasClass("ave")){
                delay=400;
            }
            if($(this).parent().hasClass("mono")){
                delay=600;
            }
            if($(this).parent().hasClass("cherry")){
                delay=800;
            }
            if($(this).parent().hasClass("bee")){
                delay=1000;
            }
    		$(this).delay(delay).animate({"margin-left":20}, 150, function(){
    		$(this).animate({"margin-left":-20}, 300, function(){
    		$(this).animate({"margin-left":20}, 300, function(){
    			$(this).animate({"margin-left":0}, 150, function(){
    				$(this).animate({"margin-top":9000}, 300);
	
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
    location.reload();
  });


}); 