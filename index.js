let humanScore = 0
let computerScore = 0
let theHumanChoice = ''
let theComputerChoice = ''
let count = 0

process.stdin.on('data', (humanChoiceNumber) => {
    theHumanChoice = ['Rock', 'Paper', 'Scissors'][choice(humanChoiceNumber)]
    theComputerChoice = ['Rock', 'Paper', 'Scissors'][
        choice(Math.round(Math.random()))
    ]
    winOrNot(theHumanChoice, theComputerChoice, humanScore, computerScore)
    console.log('humanScore: ', humanScore, 'computerScore: ', computerScore)
    if (count === 5) {
        if (humanScore > computerScore) console.log('The Human won!')
        else if (humanScore === computerScore) console.log('Draw')
        else console.log('The Computer won!')
        process.exit()
    }
})

const choice = (choice) => (choice % 2 === 0 ? 0 : choice % 3 === 0 ? 1 : 2)

const winOrNot = (theHumanChoice, theComputerChoice) => {
    switch (theHumanChoice) {
        case 'Rock':
            switch (theComputerChoice) {
                case 'Rock':
                    humanScore = humanScore
                    computerScore = computerScore
                    break
                case 'Paper':
                    humanScore = humanScore - 1
                    computerScore = computerScore + 1
                    break
                case 'Scissors':
                    humanScore = humanScore + 1
                    computerScore = computerScore - 1
            }
            break
        case 'Paper':
            switch (theComputerChoice) {
                case 'Rock':
                    humanScore = humanScore + 1
                    computerScore = computerScore - 1
                    break
                case 'Paper':
                    humanScore = humanScore
                    computerScore = computerScore
                    break
                case 'Scissors':
                    humanScore = humanScore - 1
                    computerScore = computerScore + 1
            }
            break
        case 'Scissors':
            switch (theComputerChoice) {
                case 'Rock':
                    humanScore = humanScore - 1
                    computerScore = computerScore + 1
                    break
                case 'Paper':
                    humanScore = humanScore + 1
                    computerScore = computerScore - 1
                    break
                case 'Scissors':
                    humanScore = humanScore
                    computerScore = computerScore
            }
            break
        default:
    }

    console.log(
        'theHumanChoice: ',
        theHumanChoice,
        '| theComputerChoice: ',
        theComputerChoice,
        '| humanScore: ',
        humanScore,
        '| computerScore: ',
        computerScore
    )

    count++
}
