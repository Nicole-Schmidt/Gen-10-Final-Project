function rolldice() {
	return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
	stBet = document.getElementById('stBet').value;
	var stBet, text;
	var gameMoney = stBet;
	var diOne, number;
	var diTwo, number;
	var diSum = diOne + diTwo;
	var rolls = 0;
	var totalRolls = 0;
	var highestWon = 0;
	var highestRolls = 0;

	if(document.getElementById('stBet').value == 0) {
		alert("Starting bet must be greater than 0.");
		return;
		}
	else { //while loop
		while(gameMoney > 0) {
			diOne = rolldice();
			diTwo = rolldice();
			diSum = diOne + diTwo;
			rolls++;
			if(diSum == 7) {
				gameMoney += 4;
				highestWon += 4;
				totalRolls += 1;
				highestRolls = rolls;
			    }
			else { 
			    gameMoney -= 1;
				}
			}
		}
document.getElementById("gameResults").style.display = "block";
document.getElementById("firstBet").innerText = stBet;
document.getElementById("totalRolls").innerText = totalRolls;
document.getElementById("highestWon").innerText = highestWon;
document.getElementById("highestRolls").innerText = highestRolls;
return false;
}
