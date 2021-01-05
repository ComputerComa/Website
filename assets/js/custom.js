$(document).ready(function() {

    console.log("Loaded!")
    $("a").removeClass("border-white border")

    // $("div.card.animate1").fadeTo("fast",0.3);


    $("div.card.animate1").hover(function() {
        // For Past Projects
        $(this).addClass("highlight card-titlea") // add it here
    }, function() {
        $(this).removeClass("highlight card-titlea") // remove it
    });



    $("li.animated").hover(function() {
        // For Skills page
        $(this).css("font-size", "1.2rem")

    }, function() {
        $(this).css("font-size", "0.875rem")
    });
    $("a").hover(function() {
        // For Past Projects
        $(this).addClass("border-white border") // add it here
    }, function() {
        $(this).removeClass("border-white border") // remove it
    });
    $("div.card.animate2").hover(function() {
        // For Past Projects
        $(this).addClass("bordercustom") // add it here
    }, function() {
        $(this).removeClass("bordercustom") // remove it
    });

});