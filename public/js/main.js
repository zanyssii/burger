$(function() {

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var makeDevoured = $(this).data("devoured");
        var devouredState = {
            devoured: makeDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        })
        .then(
            function() {
                console.log("changed devoured to", makeDevoured);
            
                location.reload();
            }
        );
    });

    $(".addBurgerForm").on("submit", function(event) {

        event.preventDefault();

        placeOrder();
    });

    $(".addBurgerForm").keypress(function (e) {
        if (e.which == 13) {
            placeOrder();

            return false;
        }
    });

    function placeOrder(){
        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(
            function() {
                console.log("created new burger");
            
                location.reload();
            }
        );
    }
});