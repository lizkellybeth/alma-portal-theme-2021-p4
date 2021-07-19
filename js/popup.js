$(document).ready(function(){
    var msg = "Please update your expertise in your ALMA user profile and select keywords pertaining to your expertise. The distributed review proposal assignment algorithm will use the selected keywords of the reviewer’s expertise for matching proposal assignments.";
    var seconds = 24*60*60; //max age in seconds
    //displayPopup(seconds, msg);
});

function displayPopup(duration, message){
    console.log("###cookies 1: " + document.cookie);
    var maxage = ";max-age=" + duration;
    if (document.cookie){        
        const loggedOn = document.cookie.split('; ').find(row => row.startsWith('_ZopeId='));
        const expertiseValue = document.cookie.split('; ').find(row => row.startsWith('expertise='));
        if (loggedOn){
            if (expertiseValue){
                console.log('already visited');
            } else {
                var cookie = "expertise=true" +  maxage ;
                console.log("cookie: " + cookie)
                document.cookie = cookie;
                alert(message);
            }
        }        
    }
    console.log("###cookies 2: " + document.cookie);
}