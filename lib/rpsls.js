//where we will put our exported RPS & RPSLS fns

export function rps(shot){

    const options = ['rock','paper','scissors'];
    const opponent = options[Math.floor(Math.random() * 3)]

    if(shot == null || shot == undefined){
        const answer = {"player": opponent };
        return answer;
    }

    let result = "tie";
    const input = shot.toLowerCase();

    if (!options.includes(input)) {
        return new RangeError;
    }

    if(input == "rock"){
        if (opponent == "paper"){
            result = "lose";
        }
        else if(opponent == "scissors"){
            result = "win"
        }
    }

    if(input == "paper"){
        if (opponent == "scissors"){
            result = "lose";
        }
        else if(opponent == "rock"){
            result = "win"
        }
    }

    if(input == "scissors"){
        if (opponent == "rock"){
            result = "lose";
        }
        else if(opponent == "paper"){
            result = "win"
        }
    }
    const endMessage ={"player":shot,"opponent":opponent,"result":result}
    return endMessage
}

export function rpsls(shot){

    const options = ['rock','paper','scissors', 'lizard', 'spock'];
    const opponent = options[Math.floor(Math.random() * 5)]

    if(shot == null || shot == undefined){
        const answer = {"player": opponent };
        return answer;
    }

    let result = "tie";
    const input = shot.toLowerCase();

    if (!options.includes(input)) {
        return new RangeError;
    }

    if(input == "rock"){
        if (opponent == "paper" || opponent == "spock"){
            result = "lose";
        }
        else if(opponent == "scissors" || opponent == "lizard"){
            result = "win"
        }
    }

    if(input == "paper"){
        if (opponent == "scissors" || opponent == "lizard"){
            result = "lose";
        }
        else if(opponent == "rock" || opponent == "spock"){
            result = "win"
        }
    }

    if(input == "scissors"){
        if (opponent == "rock" || opponent == "spock"){
            result = "lose";
        }
        else if(opponent == "paper" || opponent == "lizard"){
            result = "win"
        }
    }

    if(input == "lizard"){
        if (opponent == "scissors" || opponent == "rock"){
            result = "lose";
        }
        else if(opponent == "paper" || opponent == "spock"){
            result = "win"
        }
    }

    if(input == "spock"){
        if (opponent == "paper" || opponent == "lizard"){
            result = "lose";
        }
        else if(opponent == "rock" || opponent == "scissors"){
            result = "win"
        }
    }

    /*
    if (opponent == 'spock') {
        opponent = 'Spock';
    }*/

    const endMessage ={"player": shot, "opponent": opponent, "result": result}
    return endMessage
}