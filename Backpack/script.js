$(document).ready(function(){
console.log("hello")

setTimeout(function(){
    $(".snooze").addClass("alarming"); 
    $(".snooze2").addClass("alarming"); 
    $(".sleep").addClass("alarming");
    $(".restart").addClass("alarming"); 
    $(".restart2").addClass("alarming"); 
    $(".again").addClass("alarming");
    $(".feminist").addClass("alarmmode");

  }, 35000);

  $(".sleep").click(function() { 
    $(".snooze2").removeClass("alarming");
    $(".snooze").removeClass("alarming");
    $(".sleep").removeClass("alarming");
  });


  $(".again").click(function() { 
    $(".restart").removeClass("alarming");
    $(".restart2").removeClass("alarming");
    $(".again").removeClass("alarming");
  });



/* how can i turn off the div class for sleep and again once i click the button to snooze or restart the alarm ? 
how can i make the bag(w. patches) vibrate and the have the patches fall off as the alarmmode? ( they are already sepearte div sandwiches > see original set up in the css page)
also ask about how i can make the two bag shapes that i have width% on them not responsize with the rest of the screen */

}); 