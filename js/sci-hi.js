var text;
var image;
$( document ).ready(function() {
    console.log( "JQuery ready!" );
    //showExpertise();
    getScienceHighlightURL();
    if ((window.location.pathname == "/portal") || (window.location.pathname == "/portal/")){
        //alert("HomePage");
        displayHomePage();
    } else {
        displayDefault();
    }
});   

function showExpertise(){
    console.log("###cookies 1: " + document.cookie);
    var maxage = "max-age=" + (24*60*60);//max age in seconds is one day
    if (document.cookie){
        const expertiseValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('expertise='))
            .split('=')[1];
        if (expertiseValue){
            console.log('already visited');
        } else {
            var cookie = "expertise=true; " +  maxage ;
            console.log("cookie: " + cookie)
            document.cookie = cookie;
            alert("Please go to your user profile and update your areas of expertise.");
        }
    } else {
        var cookie = "expertise=true; " +  maxage ;
        console.log("cookie: " + cookie)
        document.cookie = cookie;
        alert("Please go to your user profile and update your areas of expertise.");
    }
    console.log("###cookies 2: " + document.cookie);
}

function displayHomePage(){
    //alert("displayHomePage()");
    $("#alma-highlights").css("display", "inline-block");
    $("#main-container").addClass("thx");
    $("#container").addClass("thx");
    $(".portlet").addClass("thx");
    $(".portletContent").addClass("thx");
}

function displayDefault(){
    //alert("displayDefault()");
    $("#alma-highlights").css("display", "none");
    $("#main-container").removeClass("thx");
    $("#container").removeClass("thx");
    $(".portlet").removeClass("thx");
    $(".portletContent").removeClass("thx");
}




function getScienceHighlightURL(){
    console.log( "getScienceHighlightURL()");
    var newsurl = 'science-highlights/highlights/'
    $.ajax({
        url: 'science-highlights/highlights/',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'text/html');
        },
        success: function(data) {
            //console.log("RAW HTML: " + data);
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/html");
            var newslink = xmlDoc.querySelector("#content-core > table > tbody > tr > td:nth-child(1) > a").href;
            console.log("##### NEWSLINK: " + newslink);
            getScienceHighlight(newslink, 'science-highlights');
        }
    });
}

function getScienceHighlight(shURL, newsURL){
    console.log( "getScienceHighlight()");
    console.log( "shURL: " + shURL);
    $.ajax({
        url: shURL,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'text/html');
        },
        success: function(data) {
           // console.log("####### RAW HTML: " + data);
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/html");
            var name = xmlDoc.querySelector("#parent-fieldname-text > p").innerText;//#parent-fieldname-description
            var desc = xmlDoc.querySelector("#parent-fieldname-description").innerText;
            image = xmlDoc.querySelector("#parent-fieldname-image").href;
            image = image.replace("/image_view_fullscreen", "");
            console.log("####### IMAGE: " + image);
            var caption = xmlDoc.querySelector("[id^=parent-fieldname-imageCaption]").innerText;
            var date = xmlDoc.querySelector("#content-core > h5").innerText;
            text = xmlDoc.querySelector("#parent-fieldname-text > p").innerText;

            $("#sci-hi-name").text(name);
            $("#sci-hi-desc").text(desc);
            $("#sci-hi-img").attr("src",image);
            $("#sci-hi-anchor").attr("href",image);
            $("#sci-hi-caption").text(caption);
            $("#sci-hi-contents").text(text );
            $("#sci-hi-date").text("Effective: " + date);
            $("#sci-hi-link").attr("href", newsURL);
        }
    });
}
    
    
