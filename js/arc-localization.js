function doLocalization(){
    var url = window.location.href; 
    console.log("doLocalization for: " + url);
    var esoPortlet = $(".portlet-collection-eu-arc-news").parent();  
    var naojPortlet = $("span:contains('NAOJ News')").parent().parent().parent();  
    var nraoPortlet = $("a:contains('NRAO News')").parent().parent().parent(); 
    
    renameNewsPortlet();

        
    if (url.indexOf("eso.org") >= 0){
        console.log("found ESO!");
        naojPortlet.remove();
        nraoPortlet.remove();
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-eu.png');
        $('#almalogo-anchor').attr('href','/');
        return;
    }
    if (url.indexOf("nrao.edu") >= 0){
        console.log("found NRAO!");
        naojPortlet.remove();
        esoPortlet.remove();
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-na-pride.png');
        $('#almalogo-anchor').attr('href','/');
        return;
    }
    if (url.indexOf("nao.ac.jp") >= 0){
        console.log("found NAOJ!");
        esoPortlet.remove();
        nraoPortlet.remove();
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/NAOJ_logo.png');
        $('#almalogo-anchor').attr('href','/');
        return;
    }
    console.log("not sure what to localize! Defaulting to JAO...");
    $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-jao.png');
    $('#almalogo-anchor').attr('href','/portal');
    $(document).prop('title', 'ALMA DEV Portal');

        
    return;    
}

function renameNewsPortlet(){
    console.log("rename news portlet...");
    $('.portletNews > dt:nth-child(1) > a:nth-child(2)').text("Observatory News") ;   
}

// deprecated
function setArcLogo(){
    var url = window.location.href;
    if (url.indexOf("almascience.eso.org") > -1){
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-eu.png');
    } else if (url.indexOf("almascience.nrao.edu") > -1) {
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-na.png');
    } else if (url.indexOf("almascience.nao.ac.jp") > -1) {
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-ea.png');
    } else {
        $('#arclogo-img').attr('src','++theme++alma-prototype-theme/images/logo-jao.png');
    }
}

