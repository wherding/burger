// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    $('.change-devour').on('click',function(event){
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          devoured: newSleep
        }; 
        console.log("sleep state: " + newSleepState);
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newSleepState
        }).then(
          function() {
            console.log("changed sleep to", newSleep);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    })//end change-devoured.on(click)
});//end main function  is this like the "iffy" solution? 

$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  console.log("submitted form");

  var newCat = {
    name: $("#ca").val().trim(),
    devoured: false 
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newCat
  }).then(
    function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});