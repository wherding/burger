// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    $('.change-devour').on('click',function(event){
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          sleepy: newSleep
        }; 
    
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