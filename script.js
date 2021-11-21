$(document).ready(function(){
    $("#design").click(function(){
        $("#design").slideToggle("1400").hide();
        $("#designB").show("1400");
    });
    $("#designB").click(function(){
        $("#designB").slideToggle("1400").hide();
        $("#design").show("1400");
    });
});

$(document).ready(function(){
    $("#development").click(function(){
        $("#development").slideToggle("1400").hide();
        $("#developmentB").show("1400");
    });
    $("#developmentB").click(function(){
        $("#developmentB").slideToggle("1400").hide();
        $("#development").show("1400");
    });
});

$(document).ready(function(){
    $("#product").click(function(){
        $("#product").slideToggle("1400").hide();
        $("#productB").show("1400");
    });
    $("#productB").click(function(){
        $("#productB").slideToggle("1400").hide();
        $("#product").show("1400");
    });
});

$(document).ready(function(){
    $("#form").submit(function(event){
        var name=$("input#name").val();
        var email=$("input#email").val();
        if( $("input#name").val() && $("input#email").val()){
            alert("Hello  " + name +","+ "we have received your message .Thanks for reaching out.") 
        }
        else{
            alert("Hello,kindly fill the form");
        }

    })
})