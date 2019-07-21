// Array of cartoons which will be the buttons.
var games = ["Stardew Valley", "Overcooked 2", "Skyrim", "Don't Starve", "Tomb Raider"];

function showGame() {
    var title = $(this).attr("data-name");
    // API URL with API and query, limited to 10 searches
    var queryURL = "api.giphy.com/v1/gifs/search?q=" + title + "&apikey=t864AJwF6m3Ehbb934dGP3WyLshTk7yA&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        for (var x = 0; x < results.length; x++) {
            var gameDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[x].rating);
            var image = $("<img>");
            gameDiv.append(p);
            gameDiv.append(image);
            console.log(response);
        }
    })
}

// Display cartoon buttons
function renderButtons() {
    $(".giphy-button").empty();
    // Looping through cartoon array
    for (var i = 0; i < games.length; i++) {
        var a = $("<button>");
        a.addClass("games");
        a.attr("data-name", games[i]);
        a.text(games[i]);
        button.appendTo(".giphy-button");
    }
}
// Display movie data
$("#add-game").click(function (event) {
    event.preventDefault();
    var input = "";
    console.log($("#game-input").val());
    input = $("#game-input").val();
    games.push(input);
    console.log(games);
    renderButtons();
})


// On click - page takes 10 static gifs from GIPHY API
// On click of images, the gifs animate, and on click again = back to static
// Under each gif, display rating
// Create form that takes user input box and adds to topics array
// Create function to call that pushes into array and creates button on HTML

// EXTRA:
// Mobile responsive