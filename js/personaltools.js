function initPersonalTools(){
    console.log("initPersonalTools()");
    hidePersonalTools();
    $("#portal-personaltools").hover(
        function(){
            showPersonalTools();
        },
        function(){
            hidePersonalTools();
        }
    );
}

function showPersonalTools(){
    //console.log("showPersonalTools()");
    $("#portal-personaltools").find('li').each(function(){
        $(this).show(); 
    });    
}

function hidePersonalTools(){
    //console.log("hidePersonalTools()");
    if ($("a:contains('Log in')").length){
        console.log("a:contains('Log in')");
        $("#portal-personaltools").find('li').each(function(){
            if (!$(this).is("#personaltools-login"))    {
                console.log("is NOT personaltools-login!");
                $(this).hide();
            }         
        });  
    } else {
        console.log("DOES NOT MATCH a:contains('Log in')");
        $("#portal-personaltools").find('li').each(function(){
                $(this).hide();
        });
        $(".visualCaseSensitive").parent().parent().show();
    }
}





