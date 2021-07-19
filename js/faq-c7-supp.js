$(document).ready(function(){
    		$("#faq-c7-supp tr:not(.odd)").hide();
			$("#faq-c7-supp tr.odd").click(function(){
				$(this).next("tr").toggle();
				$(this).find(".arrow").toggleClass("up");
			});
		});
        