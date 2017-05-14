(function () {
            [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
})();

$(function () {

    $(".weight").tooltip('hide');
    $(".size").tooltip('hide');
})
// enable auto tooltip
$(".weight").tooltip('show');
$(".size").tooltip('show');



$(".size").on("input change", function () {
    var size = $(this).val();
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-size", size + "em");
    $(".tooltip-inner").html(size + " em");
    $(this).attr("data-original-title", size + " em");
})

$(".weight").on("input change", function () {
    var weight = $(this).val();
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-weight", weight);
    $(".tooltip-inner").html(weight);
    $(this).attr("data-original-title", weight);
})

$(".download-btn").mouseover(function () {
    $(this).parents(".font").children("div.font-hover").css("display", "block");
    $(this).css("opacity", "0");
})

$(".download-btn").mouseleave(function () {
    $(this).parents(".font").children("div.font-hover").css("display", "none");
    $(this).css("opacity", "1");
})

$(window).resize(function () {
    if (innerWidth < 1024 && innerWidth > 992) {
        $(".size").attr("max", 3.9);
        $(".size").attr("value", 3.5);
        $(".font-text").css("font-size", "3.5em");

    }
})

$(function () {
    if (innerWidth < 1024 && innerWidth > 992) {
        $(".size").attr("max", 3.9);
        $(".size").attr("value", 3.5);
        $(".font-text").css("font-size", "3.5em");

    }
})
