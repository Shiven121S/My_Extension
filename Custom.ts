//% color="#739a6d" weight=1000
namespace myExtension {
    const ROCK = 1;
    const PAPER = 2;
    const SCISSOR = 3;
    /**
     * Rock, Paper, Scissors. 1=Rock, 2=Paper, 3=Scissors
     */
    //% block
    export function RPS(ask: number): void {

        if (ask < 0 || ask > 3) {
            console.error("Invalid choice");
            return;
        }

        let computerChoice = Math.floor((Math.random() * 3) + 1);
        
        if (ask == ROCK && computerChoice == ROCK) {
            console.log("Tie")
            console.log("ROCK")
        } else if (ask == ROCK && computerChoice == PAPER) {
            console.log("Computer Wins")
            console.log("PAPER")
        } else if (ask == ROCK && computerChoice == SCISSOR) {
            console.log("Player Wins")
            console.log("SCISSOR")
        } else if (ask == PAPER && computerChoice == ROCK) {
            console.log("Player Wins")
            console.log("ROCK")
        } else if (ask == PAPER && computerChoice == PAPER) {
            console.log("Tie")
            console.log("PAPER")
        } else if (ask == PAPER && computerChoice == SCISSOR) {
            console.log("Computer Wins")
            console.log("SCISSOR")
        } else if (ask == SCISSOR && computerChoice == ROCK) {
            console.log("Computer Wins")
            console.log("ROCK")
        } else if (ask == SCISSOR && computerChoice == PAPER) {
            console.log("Player Wins")
            console.log("PAPER")
        } else {
            console.log("Tie")
            console.log("SCISSOR")
        } 


    }



    /**
     * Finds percent. Enter Number first, percent value second. DO NOT enter "%" symbol.
     */
    //% block
    export function Find_The_Percent(ogNumber: number, percent: number): number {
        let input = ogNumber 
        let percentMod = percent/100
        return input*percentMod
    }

    
}