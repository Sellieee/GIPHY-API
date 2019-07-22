$(document).ready(function () {

    // Array of games which will be the buttons.
    var games = ["Nier Automata", "Overcooked 2", "Skyrim", "Don't Starve", "Tomb Raider"];

    function displayGameinfo() {
        var title = $(this).attr("data-name");
        // API URL with API and query, limited to 10 searches
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=t864AJwF6m3Ehbb934dGP3WyLshTk7yA&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var x = 0; x < response.data.length; x++) {
                var gameDiv = $("<div>");
                var p = $("<p>").text("Rating: " + response.data[x].rating);
                var image = $("<img>");
                image.attr("src", response.data[x].images.fixed_height_still.url);
                image.attr("data-still", response.data[x].images.fixed_height_still.url);
                image.attr("data-animate", response.data[x].images.fixed_height_still.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                console.log(state);
                gameDiv.append(p).append(image);
                console.log(response);
                $(".images").prepend(gameDiv);
            }
        })
    };

    // Display game buttons
    function renderButtons() {
        $(".giphy-button").empty();
        // Looping through game array
        for (var i = 0; i < games.length; i++) {
            var a = $("<button>");
            a.addClass("games");
            a.attr("data-name", games[i]);
            a.text(games[i]);
            a.appendTo(".giphy-button");
        }
    }

    // Display game data
    $("#add-game").click(function (event) {
        event.preventDefault();
        var input = "";
        console.log($("#game-input").val());
        input = $("#game-input").val();
        games.push(input);
        console.log(games);
        renderButtons();
    });


    $(document).click(".games", displayGameinfo);
    renderButtons();


    $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        $(this).attr("src", ($(this).attr("data-animate")));
        $(this).attr("data-state", "animate")
        console.log(state);
        if (state == "animate") {
            $(this).attr("src", ($(this).attr("data-still")));
            $(this).attr("data-state", "still");
        } else if (state == "still") {
            $(this).attr("src", ($(this).attr("data-animate")));
        }
    })
});