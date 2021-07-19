function resizeAlmaPortlets(){
    console.log("resizeAlmaPortlets()");

    var widthOfDiv = $("#alma-news").width();
    console.log("widthOfDiv: " + widthOfDiv);
    
    var mgmtPortletsLinkWidth = $("div.managePortletsLink:nth-child(4) > a:nth-child(1)").width();
    console.log("mgmtPortletsLinkWidth: " + mgmtPortletsLinkWidth);
    
    var availableWidth = widthOfDiv - 30;
    if (mgmtPortletsLinkWidth == null){  
        console.log("mgmtPortletsLink IS null!");
    } else {
        console.log("mgmtPortletsLink not null!");
        availableWidth = availableWidth - mgmtPortletsLinkWidth;
    }
    console.log("availableWidth minus space used by the mgmtPortletsLinkWidth: " + availableWidth);
    
    var numPortlets = $("#alma-news .portlet").length;
    console.log("numPortlets in alma-news div: " + numPortlets);
    
    var portletWidth = 30;//estimated
    console.log("portletWidth: " + portletWidth);
    
    availableWidth = availableWidth - (portletWidth * numPortlets);
    console.log("availableWidth minus space used by the portlets: " + availableWidth);
    
    var adjustedPortletWidth = availableWidth / numPortlets;
    console.log("adjustedPortletWidth: " + adjustedPortletWidth);
        
    $("#alma-news .portlet").width(adjustedPortletWidth);
  
}

