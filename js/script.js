(function () {
            [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
})();

$('.size').slider({
    formatter: function (value) {
        return value + " em";
    },
    min: 1,
    max: 4.5,
    value: 4,
    step: 0.01,
    focus: true,
});

$('.weight').slider({
    formatter: function (value) {
        return value;
    },
    min: 100,
    max: 900,
    step: 100,
    value: 200,
    focus: true
});

$(".slider").mousedown(function () {
    $(this).children(".tooltip").css("opacity", "1");
})
$(".slider").mouseup(function () {
    $(this).children(".tooltip").css("opacity", "0");
})

$(".size").on("input change", function () {
    var size = $(this).val();
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-size", size + "em");
})

$(".weight").on("input change", function () {
    var weight = $(this).val();
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-weight", weight);
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
        $('.size').slider({
            max: 3.9,
            value: 3.5,
        });
        $(".font-text").css("font-size", "3.5em");

    }
})

$(function () {
    if (innerWidth < 1024 && innerWidth > 992) {
        $('.size').slider({
            max: 3.9,
            value: 3.5,
        });
        $(".font-text").css("font-size", "3.5em");

    }
})
