var almapath = window.location.pathname;
var almabaseurl = 'https://asa.alma.cl/sprs';
var cyclesCalled = new Map();

$(document).ready(function(){
    console.log("largePrograms.js is document.ready!");
    if (almapath.toLowerCase().indexOf("alma-data/lp") >= 0){
        $(".pcode").each(function( index ) {
            insertAbstractRow($( this ));
            var pCode = $( this ).text();
            getCycleData(pCode);
            $( this ).click(function(){
                clickProjectCode(this);
            });
        });  
        $("#abstractAnchor").toggle(function(){
                $(".alma_abstract_row").show();
          }, function() {
                $(".alma_abstract_row").css("display", "none");
        });
        $(".ptitle").toggle(function(){
                var pTitleTR = $(this).parent().parent();
                var abstractTR = pTitleTR.next();
                abstractTR.toggle();
          }, function() {
                var pTitleTR = $(this).parent().parent();
                var abstractTR = pTitleTR.next();
                abstractTR.toggle();
        });
    }   
});

function insertAbstractRow(projectTD){
    var parentTR = projectTD.closest("tr");
    var abstractTR = $('<tr></tr>');
    abstractTR.insertAfter(parentTR);
    abstractTD1 = $("<td>Abstract</td>");
    abstractTD2 = $("<td colspan = 7>waiting...</td>");
    abstractTR.append(abstractTD1);
    abstractTR.append(abstractTD2);
    var bgcolor = parentTR.css('background');
    abstractTR.css('background', bgcolor);
    abstractTR.css("display", "none");
    abstractTR.addClass("alma_abstract_row");
}

function getCycleData(projectCode){
    var cycle = getCycle(projectCode);
    if (cyclesCalled.get(cycle)){
        console.log("already loaded: " + cycle);        
    } else {
        cyclesCalled.set(cycle, "waiting for data...");
        var jurl = almabaseurl + '/proposals/' + cycle + '?abstracts=true&callback=populateMap'; 
        loadJsonpLP(cycle, jurl, populateMap);    
    }     
}

function getCycle(projectCode){
    var cycle = projectCode.substring(0,6);
    return cycle;
}

function loadJsonpLP(cycle, jurl, fctnName){
                $.ajax({
                  type: 'GET',
                  url: jurl
  }).then(function(data, status, jqxhr) {
      fctnName(cycle, data);
  });
}

function populateMap(cycle, json){
    cyclesCalled.set(cycle, json);
    $('.pcode:contains(' + cycle + ')').each(function(key, value) {   
        var projectCode = $(this).text();
        populateAbstract(projectCode, json);
    });    
}

function populateAbstract(projectCode, jsonData){
    console.log("populateAbstract: " + projectCode);
    var abstract = "";
    $.each(jsonData, function(key, keyValuePair){
        if (keyValuePair["code"] == projectCode){
            abstract = keyValuePair["abstractText"];
        }
    });
    var td = $(".pcode:contains(" + projectCode + ")");
    var parentTR = td.parent();
    var abstractTR = parentTR.next();
    var abstractTD = abstractTR.children().eq(1);
    abstractTD.text(abstract);
}

function clickProjectCode(projectCode){
    var t = $(projectCode).text();
    console.log("clickProjectCode: " + t);     
}


