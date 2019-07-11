function rolldice() {
	return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
	stBet = document.getElementById('stBet').value;
	var gameStart = 0;
	var diOne = 0;
	var diTwo = 0;
	var diSum = 0;
	var rolls = 0;
	var losingRolls = 0;
	var gameStart = stBet;
	var gameMoney = [stBet];
	var totalRolls = 0;
	var highestWon = 0;
	var highestRolls = 0;
	var win = 4;
	var lose = 1;
	var max = 0;

	if(document.getElementById('stBet').value == 0) {
		alert("Starting bet must be greater than 0.");
		return;
		}
	do{
			rolls++;
			diOne = rolldice();
			diTwo = rolldice();
			diSum = diOne + diTwo;
			
			if(diSum == 7) {
				gameStart = gameStart+win;
				var last_element = gameMoney[gameMoney.length -1];
				var last_updated = last_element + win;
				gameMoney.push(last_updated);
			    }
			
			else { 
			    gameStart--;
			    losingRolls++;
			    var last_element = gameMoney[gameMoney.length -1];
				var last_updated = last_element + win;
				gameMoney.push(last_updated);
				}
			}
		while(gameStart>0);

		highestWon = Math.max.apply(Math, gameMoney);
		highestRolls = gameMoney.indexOf(highestWon);
		if(highestWon<1) {
			highestWon = 0;
		}

document.getElementById("gameResults").style.display = "block";
document.getElementById("firstBet").innerText = stBet;
document.getElementById("totalRolls").innerText = totalRolls;
document.getElementById("highestWon").innerText = highestWon;
document.getElementById("highestRolls").innerText = highestRolls;
return false;
}
