$(document).ready(function(){
    $("#design-image").click(function(){
        $("#design").show("1400");
        $("#design-image").fadeIn ("1400").hide(1000);
    });
    $("#design").click(function(){
        $("#design").fadeOut("1400");
        $("#design-image").fadeIn("1400");
    });
});

$(document).ready(function(){
    $("#development-image").click(function(){
        $("#development").show("1400");
        $("#development-image").fadeIn ("1400").hide(1000);
    });
    $("#development").click(function(){
        $("#development").fadeOut("1400");
        $("#development-image").fadeIn("1400");
    });
});

$(document).ready(function(){
    $("#product-image").click(function(){
        $("#product").show("1400");
        $("#product-image").fadeIn ("1400").hide(1000);
    });
    $("#product").click(function(){
        $("#product").fadeOut("1400");
        $("#product-image").fadeIn("1400");
    });
});