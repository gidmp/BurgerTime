$(function() {
    $("#addBurgerButton").on("click", function(event) {
        event.preventDefault();
        console.log("hello");
        
        //insert burger name and it's eaten state into the databse
        var newBurger = {
            burger_name: $("#addBurger").val().trim(),
            eaten : 0
        };
  
         // Send the Post request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();

            }
        )
        $("#addBurger").val("");
    });

    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("newEaten");
    
        //updated the eaten status in db into true
        var newEatenState = {
          eaten: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newEatenState
        }).then(
          function() {
            console.log("changed eaten to ", newEaten);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
});
