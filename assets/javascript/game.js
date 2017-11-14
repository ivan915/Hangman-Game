// Team names
console.log("game.js") 

const dashesDiv = document.getElementById('current-team');
const wins = document.getElementById('wins');


var teams = [
	"dodgers",
	"astros",
	"cubs",
	"royals",
	"indians",
	"mets",
	"giants",
	"redsox",
	"cardinals",
	"rangers",
	"yankees",
	]
var answerArr;
var hits = [];
var misses = [];
var answerDashes = [];


	// create a function that randomly selects a team from my list.
			document.onkeyup = function(event) {
			startGame();
			checkUserLetter();
	} 

	function startGame () {
		var answer = teams[Math.floor(Math.random()*teams.length)];
		console.log (answer);
		answerArr = answer.split ('');
		console.log (answerArr)
		 answerDashes = answerArr.map(function(ltr) {
			return " - "
		})
		console.log (answerDashes)
		dashesDiv.textContent = answerDashes.join(' ') 
	}



	function checkUserLetter () {
		document.onkeyup = function(event) {
		var userGuess = event.key.toLowerCase();
		console.log(userGuess);

		var lettersOnly = /^[A-Za-z]+$/;
		if(lettersOnly.test(userGuess) === false) {
       	 messages.textContent = "thats not a letter, try again";       	 
  		}
  		else if(misses.indexOf(userGuess) > -1 || hits.indexOf(userGuess) > -1 ){
  			messages.textContent = "already selected, guess again"
  		}
  		else{
  			console.log('is valid');
  			if(answerArr.indexOf(userGuess)=== -1){
  				console.log('wrong');
  				misses.push(userGuess);
  				console.log(misses);
  				checkLoss();
  			}
  			else{
  				console.log('correct');
  				answerArr.forEach(function(ltr, idx){
  					if(userGuess === ltr){
  						answerDashes[idx] = ltr;
  						dashesDiv.textContent = answerDashes.join(' ') 
  						checkWin();
  					}

  				});
  			}

  		}
  		}

	}
	var scoreboard = 0;

	function checkWin (){
		if(answerDashes.indexOf(' - ')=== -1){
			messages.textContent = "Home Run!";
			scoreboard ++;
			wins.textContent = scoreboard;
			setTimeout(()=>{
				reset()
			}, 2000);
		}
		else {
			return;
		}
	}
	function checkLoss (){
		if(misses.length >= 6){
			messages.textContent = "Strike Out!";
			setTimeout(()=>{
				reset()
			}, 2000);
		}
	}
	function reset() {
		misses = [];
		hits = [];
		messages.textContent = "";
		startGame();
		
		
		// body...
	}
	 		// body...
	 	
	
 // Play Game




	
	// Keep track of wins

	//for (i = 0; i < 12; i++){
	// 	console.log(i + 1)
	// 	guess = prompt("Whats your guess?");

	// 	if (answer == guess) {
	// 		alert("You're on track");
	// 		break;
	// 	}else {
	// 		guess = prompt("Strike");
	// 	}
		
	// }

	// Depending on the word ex: Dodgers, should look like this _ _ _ _ _ _ when the game starts.
	// As the user selects correct letters, reveal them : D _ dge_s.

	// Keet track of number of guesses remaining remaining for the user.

	// Keep track of letters already guessed, display like J K L E.

	// keep track of good guess.

	 // Keep track of bad guess.

	// Aftr the user wins/loses, the game should automatically chose another
	// word and make the user play again.

