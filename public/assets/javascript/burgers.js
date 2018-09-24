$(".krabby-patty-request-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
    };
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Order up!");
            location.reload();
        }
    );
});

$(".devour").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: { devoured: 1 }
    }).then(
        function() {
            console.log("Devoured!");
            location.reload();
        }
    );
});
