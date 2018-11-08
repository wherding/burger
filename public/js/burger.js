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

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      
    
      var newCat = {
        name: $("#ca").val().trim(),
        devoured: false 
      };
      console.log(newCat);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

//put other functions here so they are in the main function.

});//end main function  is this like the "iffy" solution? 
