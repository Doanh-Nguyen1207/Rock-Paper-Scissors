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
    if (theHumanChoice === theComputerChoice) return
    switch (theHumanChoice) {
        case 'Rock':
            if (theComputerChoice === 'Paper') {
                humanScore = humanScore - 1
                computerScore = computerScore + 1
            } else {
                humanScore = humanScore + 1
                computerScore = computerScore - 1
            }
            break
        case 'Paper':
            if (theComputerChoice === 'Rock') {
                humanScore = humanScore + 1
                computerScore = computerScore - 1
            } else {
                humanScore = humanScore - 1
                computerScore = computerScore + 1
            }
            break
        case 'Scissors':
            if (theComputerChoice === 'Paper') {
                humanScore = humanScore + 1
                computerScore = computerScore - 1
            } else {
                humanScore = humanScore - 1
                computerScore = computerScore + 1
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
