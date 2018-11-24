$("#menu-button").click(function () {
    $(this).toggleClass("active");
    $("#line-1").toggleClass("active");
    $("#line-2").toggleClass("active");
    $("#line-3").toggleClass("active");
    $("#menu").slideToggle("fast");
    $("#white-house-logo").toggleClass("invisible");
    $("#main-pic-container").toggleClass("d-none");
    $("#seven-americans-container").toggleClass("d-none");
    $("#white-house-history-container").toggleClass("d-none");
    $("#black-white-house-container").toggleClass("d-none");
    $("#upper-footer").toggleClass("d-none");
    $("#desktop-nav").toggleClass("d-none");
    $("#search-icon").toggleClass("fix-top");
});

