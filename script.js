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
            alert("Helloo,kindly fill the form");
        }

    })
})

$(document).ready(function(){
    $("#work1").mouseover(function(){
        $("#overlay").show();
    })
    .mouseout(function(){
        $("#overlay").hide()
    });
});

$(document).ready(function(){
    $("#work2").mouseover(function(){
        $("#overlay2").show();
    })
    .mouseout(function(){
        $("#overlay2").hide()
    });
});

$(document).ready(function(){
    $("#work3").mouseover(function(){
        $("#overlay3").show();
    })
    .mouseout(function(){
        $("#overlay3").hide()
    });
});

$(document).ready(function(){
    $("#work4").mouseover(function(){
        $("#overlay4").show();
    })
    .mouseout(function(){
        $("#overlay4").hide()
    });
});

$(document).ready(function(){
    $("#work5").mouseover(function(){
        $("#overlay5").show();
    })
    .mouseout(function(){
        $("#overlay5").hide()
    });
});

$(document).ready(function(){
    $("#work6").mouseover(function(){
        $("#overlay6").show();
    })
    .mouseout(function(){
        $("#overlay6").hide()
    });
});

$(document).ready(function(){
    $("#work7").mouseover(function(){
        $("#overlay7").show();
    })
    .mouseout(function(){
        $("#overlay7").hide()
    });
});

$(document).ready(function(){
    $("#work8").mouseover(function(){
        $("#overlay8").show();
    })
    .mouseout(function(){
        $("#overlay8").hide()
    });
});









