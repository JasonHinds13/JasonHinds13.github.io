$(document).ready(function(){

	$("#edu").click(function(){
		$("#info").load("frags/education.html");
	});

	$("#skl").click(function(){
		$("#info").load("frags/skills.html");
	});

	$("#exp").click(function(){
		$("#info").load("frags/experience.html");
	});

	$("#hob").click(function(){
		$("#info").load("frags/hobbies.html");
	});
});