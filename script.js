function myFunction() {
    var cardElement = document.getElementById("card");
    var cardClass = cardElement.className;

    if (cardClass.endsWith("-")) {
        var newClass = cardClass.substring(0, cardClass.length - 1);
        cardElement.className = newClass;
    } else {
        cardElement.className += "-";
    }
}
