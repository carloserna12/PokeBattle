


$(document).ready(function(){
    $("#switchField1").click(function() {       
        if(($("#field2")[0].style != "none") && ($("#field3")[0].style != "none")){
            $("#field1").toggle(500);
            $("#field2").css("display","none");
            $("#field3").css("display","none");
        }else{
            $("#field1").toggle(500);
        }

    });

    
    $("#switchField2").click(function() {
        if(($("#field1")[0].style != "none") && ($("#field3")[0].style != "none")){
            $("#field2").toggle(500);
            $("#field1").css("display","none");
            $("#field3").css("display","none");
        }else{
            $("#field2").toggle(500);
        }
    });

    
    $("#switchField3").click(function() {
        if(($("#field1")[0].style != "none") && ($("#field2")[0].style != "none")){
            $("#field3").toggle(500);
            $("#field1").css("display","none");
            $("#field2").css("display","none");
        }else{
            $("#field3").toggle(500);
        }
    });
});


