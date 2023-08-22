$(document).ready(function(){

	var XAMT = 9;
	var YAMT = 6;

	var gameArr = [];

	for(var i=0; i < YAMT * XAMT; i++){
		gameArr[i] = 0;
		$("#gamearea").append('<div class="gameTile" id="'+i+'"></div>');
	}
	
	gameArr[2] = 'H';
	gameArr[3] = 'A';
	gameArr[4] = 'P';
	gameArr[5] = 'P';
	gameArr[6] = 'Y';

	gameArr[20] = 'B';
	gameArr[21] = 'I';
	gameArr[22] = 'R';
	gameArr[23] = 'T';
	gameArr[24] = 'H';

	gameArr[30] = 'D';
	gameArr[31] = 'A';
	gameArr[32] = 'Y';

	gameArr[46] = 'C';
	gameArr[47] = 'L';
	gameArr[48] = 'A';
	gameArr[49] = 'Y';
	gameArr[50] = 'T';
	gameArr[51] = 'O';
	gameArr[52] = 'N';

	$('.gameTile').click(function(){
		$(this).addClass("active");
		var x = parseInt($(this).attr('id'));
		if(gameArr[x] != 0){
			$(this).text(gameArr[x]);
		}
	});

});