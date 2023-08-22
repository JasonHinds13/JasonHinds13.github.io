$(document).ready(function(){

	var XAMT = 9;
	var YAMT = 6;

	var gameArr = [];
	var titleArr = [2,3,4,5,6,20,21,22,23,24,30,31,32,46,47,48,49,50,51,52];

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
		if(gameArr[x] != 0 && titleArr.includes(x)){
			var index = titleArr.indexOf(x);
			titleArr.splice(index, 1);
			$(this).text(gameArr[x]);
		}

		if(titleArr.length == 0){
			$(".status").text("HAPPY BIRTHDAY CLAY!!!!!!!");
			$(".gameTile").addClass('gameTileDone');
		}
	});

});