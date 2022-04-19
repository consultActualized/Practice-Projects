const options = ["paper","rock","scissors"];

function player1() {
  return options[rand(3)]
}

function player2() {
  return options[rand(3)]
}

function rand(value) {
  return Math.floor(Math.random()*value);
}

function rpsEval(player1,player2) {
  console.log("player 1 picked: " + player1);
  console.log("player 2 picked: " + player2);
  var result = [];

  player1 == player2 ?                            // check same options
    result.push("try again"):                     // return try again
      player1 == options[0] ?                     // check Player 1 = paper
        player2 == options[1] ?                   // check player 2 = rock
        result.push("player1",player1) :          //append result
        result.push("player2",player2) :          //append result
      player1 == options[1] ?                     //check player 1 = rock
        player2 == options[2] ?                   //check player 2 = scissors
        result.push("player1",player1) :          //append result
        result.push("player2",player2) :          //append result
      player1 == options[2] ?                     //check player 1 = scissors
        player2 == options[0] ?                   //check player 2 = paper
        result.push("player1",player1) :          //append result
        result.push("player2",player2) :          //append result
        "";
return result;
}

// call this function to  run the game and see who wins
function rps() {
  var result = rpsEval(player1(),player2());
  result.length > 1 ?
  console.log("and the winner is: "+ result[0] + "-->" + result[1]) :
  console.log(result[0]);

}
