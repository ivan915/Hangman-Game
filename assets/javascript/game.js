// Team names
console.log("game.js") 


var teams = [
	"Dodgers",
	"Astros",
	"Cubs",
	"Royals",
	"Indians",
	"Mets",
	"Giants",
	"RedSox",
	"Cardinals",
	"Rangers",
	"Yankees",
	]

	// create a function that randomly selects a team from my list.
	function startGame () {
		var answer = teams[Math.floor(Math.random()*teams.length)];
		console.log (answer)
	}
	startGame()
		document.onkeyup = function(event) {
			console.log(event)

		} 