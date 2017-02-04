$(document).ready(function(){
	$("#minusFiveautohighmade").click(function(){
		changeBy("auto_high_made",-5);
	});
	$("#minusOneautohighmade").click(function(){
		changeBy("auto_high_made",-1);
	});
	$("#plusOneautohighmade").click(function(){
		changeBy("auto_high_made",1);
	});
	$("#plusFiveautohighmade").click(function(){
		changeBy("auto_high_made",5);
	});

	$("#minusFiveautohighmiss").click(function(){
		changeBy("auto_high_miss",-5);
	});
	$("#minusOneautohighmiss").click(function(){
		changeBy("auto_high_miss",-1);
	});
	$("#plusOneautohighmiss").click(function(){
		changeBy("auto_high_miss",1);
	});
	$("#plusFiveautohighmiss").click(function(){
		changeBy("auto_high_miss",5);
	});
});



















function changeBy(elementID, changeAmount){
	var startAmount = parseInt($("#"+elementID).val());
	if (startAmount + changeAmount >= 0){
		$("#"+elementID).val(startAmount + changeAmount);
	}
}