function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Namasta!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "Are you a BOT!") {
        return "Yes! I am :)"
    }
    else if (input == "Can you play game?") {
        return "Yes, I can play rock paper scissors game!"
    }
    else {
        return "Try asking something else!";
    }
}