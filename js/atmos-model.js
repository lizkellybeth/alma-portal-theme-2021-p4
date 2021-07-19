$(document).ready(function(){
    
 var oldPwv = $('.sciencequeries > table.ui-widget-content > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)').html();
 console.log("OLD PWV: " + oldPwv);
 $('.sciencequeries > table.ui-widget-content > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)').html('1.0');
 var newPwv = $('.sciencequeries > table.ui-widget-content > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)').html();
console.log("NEW PWV: " + newPwv);   

});