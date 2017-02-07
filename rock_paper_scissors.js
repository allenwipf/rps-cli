var prompt = require('prompt');

//This sets each players score to 0
var p1_score = 0;
var p2_score = 0;

//This calls the begingame function to begin the game
beginGame();

//This function checks for a game winner and starts the next round if non found
function beginGame(){
	
	if ((p1_score > 0) || (p2_score > 0)) {
		console.log()
		console.log("The score is Player1: " + p1_score + " and Player2: " + p2_score);
		
	}

	if (p1_score == 3){

 		console.log("Game Over! Player1 wins");

	} else if (p2_score == 3){

		console.log("Game Over! Player2 wins");

	} else {
		console.log();
		console.log("Player1, please enter a weapon!");
		player1();

	}
}


//This functin gets the result of Player1
function player1(){

	prompt.get(['player1'], function (err, result) {

	 	//Makes sure the entered ammounts are rock, paper or scissors
		if(illegal_words(result.player1)){
			console.log();
		    console.log("Player2, please enter a weapon!");
		    
			player2(result.player1);

		} else {
			console.log();
			console.log("It seems you can't spell. Please type either rock, paper, or scissors!");
			beginGame();
		}

	}
	)
	;
}

//This function gets the result of Player2
function player2(results_player1){

	prompt.get(['player2'], function (err, result) {
	     

	 	//Makes sure the entered ammounts are rock, paper or scissors
		if(illegal_words(result.player2)){
			compare(results_player1, result.player2);
		} else {
			console.log();
			console.log("It seems you can't spell. Please type either rock, paper, or scissors!");
			beginGame();
		}

	}
	)
	;
}


//This function checks who won
function compare(option1, option2) {

	//Win logic. 
	var option1 = option1.toLowerCase()
	var option2 = option2.toLowerCase()

	if (option1 == option2) {
		console.log("It's a Tie! Try again!")

	} else if (option1 == "rock" && option2 == "paper") {
		console.log("Player2 wins this round!")
		p2_score ++;

	} else if (option1 == "scissors" && option2 =="rock") {
		console.log("Player2 wins this round!")
		p2_score ++;

	} else if (option1 == "paper" && option2 =="scissors") {
		console.log("Player2 wins this round!")
		p2_score ++;

	} else {
		console.log("Player1 wins this round!")
		p1_score ++;
	}

	beginGame()
}   

//This fuction checks for illegal words

function illegal_words(word){

	if (word.toLowerCase() == "rock" || word.toLowerCase() == "paper" || word.toLowerCase()== "scissors"){
		return true;
	
	} 	return false
}


// function areValid
// if or if
// 	true
// 	false

// // Below is for test

// function test_illegal_words(testword){

// //if after running to test word is lowercase
// }




// function define_results(expected, actual){
// 	if (expected == actual)
// 		console.log("Passed! Expected " + expected + " but got " + actual);
//   	} else {
//   		console.log("Failed! Expected " + expected + " but got " + actual)
//   	}
//   	end
// end






