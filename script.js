$('.q').on("click", function() {

    $(this).next('.a').toggle();

    // Toggle the + to X and vice versa
    var icon = $(this).find('.toggle-icon');
    if (icon.text() === "+") {
        {icon.text("✖");
         icon.text.css("color","grey");   
        }
    } else {
        icon.text("+");
    }
});
