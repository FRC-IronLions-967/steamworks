$(document).ready(function(){
//Auto High Made
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
//Auto High Miss
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
//Auto Low Made
	$("#minusFiveautolowmade").click(function(){
		changeBy("auto_low_made",-5);
	});
	$("#minusOneautolowmade").click(function(){
		changeBy("auto_low_made",-1);
	});
	$("#plusOneautolowmade").click(function(){
		changeBy("auto_low_made",1);
	});
	$("#plusFiveautolowmade").click(function(){
		changeBy("auto_low_made",5);
	});
//Auto Low Miss
	$("#minusFiveautolowmiss").click(function(){
		changeBy("auto_low_miss",-5);
	});
	$("#minusOneautolowmiss").click(function(){
		changeBy("auto_low_miss",-1);
	});
	$("#plusOneautolowmiss").click(function(){
		changeBy("auto_low_miss",1);
	});
	$("#plusFiveautolowmiss").click(function(){
		changeBy("auto_low_miss",5);
	});
//Tele High Made
	$("#minusFivetelehighmade").click(function(){
		changeBy("tele_high_made",-5);
	});
	$("#minusOnetelehighmade").click(function(){
		changeBy("tele_high_made",-1);
	});
	$("#plusOnetelehighmade").click(function(){
		changeBy("tele_high_made",1);
	});
	$("#plusFivetelehighmade").click(function(){
		changeBy("tele_high_made",5);
	});
//Tele High Miss
	$("#minusFivetelehighmiss").click(function(){
		changeBy("tele_high_miss",-5);
	});
	$("#minusOnetelehighmiss").click(function(){
		changeBy("tele_high_miss",-1);
	});
	$("#plusOnetelehighmiss").click(function(){
		changeBy("tele_high_miss",1);
	});
	$("#plusFivetelehighmiss").click(function(){
		changeBy("tele_high_miss",5);
	});
//Tele Low Made
	$("#minusFivetelelowmade").click(function(){
		changeBy("tele_low_made",-5);
	});
	$("#minusOnetelelowmade").click(function(){
		changeBy("tele_low_made",-1);
	});
	$("#plusOnetelelowmade").click(function(){
		changeBy("tele_low_made",1);
	});
	$("#plusFivetelelowmade").click(function(){
		changeBy("tele_low_made",5);
	});
//Tele Low Miss
	$("#minusFivetelelowmiss").click(function(){
		changeBy("tele_low_miss",-5);
	});
	$("#minusOnetelelowmiss").click(function(){
		changeBy("tele_low_miss",-1);
	});
	$("#plusOnetelelowmiss").click(function(){
		changeBy("tele_low_miss",1);
	});
	$("#plusFivetelelowmiss").click(function(){
		changeBy("tele_low_miss",5);
	});
//Gears Made
	$("#minusFiveGearsMade").click(function(){
		changeBy("tele_gears_made",-5);
	});
	$("#minusOneGearsMade").click(function(){
		changeBy("tele_gears_made",-1);
	});
	$("#plusOneGearsMade").click(function(){
		changeBy("tele_gears_made",1);
	});
	$("#plusFiveGearsMade").click(function(){
		changeBy("tele_gears_made",5);
	});
//Gears Missed
		$("#minusFiveGearsMissed").click(function(){
		changeBy("tele_gears_missed",-5);
	});
	$("#minusOneGearsMissed").click(function(){
		changeBy("tele_gears_missed",-1);
	});
	$("#plusOneGearsMissed").click(function(){
		changeBy("tele_gears_missed",1);
	});
	$("#plusFiveGearsMissed").click(function(){
		changeBy("tele_gears_missed",5);
	});
//Hopper Size
	$("#minusFivehopper").click(function(){
		changeBy("hopper_size",-5);
	});
	$("#minusOnehopper").click(function(){
		changeBy("hopper_size",-1);
	});
	$("#plusOnehopper").click(function(){
		changeBy("hopper_size",1);
	});
	$("#plusFivehopper").click(function(){
		changeBy("hopper_size",5);
	});
//CIM Motors
	$("#minusOneDriveMotors").click(function(){
		changeBy("driveMotors",-1);
	});
	$("#plusOneDriveMotors").click(function(){
		changeBy("driveMotors",1);
	});
//Wheel Diameter
	$("#minusOneWheelDiam").click(function(){
		changeBy("wheelDiam",-1);
	});
	$("#plusOneWheelDiam").click(function(){
		changeBy("wheelDiam",1);
	});
//Weight
	$("#minusOneWeight").click(function(){
		changeBy("weight",-1);
	});
	$("#plusOneWeight").click(function(){
		changeBy("weight",1);
	});
});

function changeBy(elementID, changeAmount){
	var startAmount = parseInt($("#"+elementID).val());
	if (startAmount + changeAmount > 0){
		$("#"+elementID).val(startAmount + changeAmount);
	}
	else{
		$("#"+elementID).val(0);
	}
}