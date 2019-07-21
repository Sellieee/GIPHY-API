// Array of cartoons which will be the buttons.
var cartoon = ["Pokémon", "Snoopy", "Digimon", "Bleach", "Hamtaro", "Hello Kitty", "Doraemon"];

// Display cartoon buttons
function renderButtons() {
    $(".giphy-button").empty();
    for (var i = 0; i < cartoon.length; i++) {
        var button = $("<button>" + cartoon[i] + "</button>");
        button.appendTo(".giphy-button");
    }
}


$("#add-cartoon").click(function (event) {
    event.preventDefault();
    var input = "";
    console.log($("#cartoon-input").val());
    input = $("#cartoon-input").val();
    cartoon.push(input);
    console.log(cartoon);
    renderButtons();
})

renderButtons();


// On click - page takes 10 static gifs from GIPHY API
// On click of images, the gifs animate, and on click again = back to static
// Under each gif, display rating
// Create form that takes user input box and adds to topics array
// Create function to call that pushes into array and creates button on HTML

// EXTRA:
// Mobile responsive