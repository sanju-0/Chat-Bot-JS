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
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "Are you a BOT!") {
        return "Yes! I am :)"
    }
    else if (input == "Can you play game?") {
        return "Yes, I can play rock paper scissors game!"
    }
    else if (input == "i need help") {
        return "I am here only for helping you :) Go ahead ask you problem!"
    }
    else if (input == "how are you") {
        return "I am fine! I hope you also safe and secure or happy with your family"
    }
    else if (input == "i am sad") {
        return "OOPS :( I am also sad after hear this :| but here I have a joke for you - Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them."
    }
    else {
        return "Try asking something else!";
    }
}