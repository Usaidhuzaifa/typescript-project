import inquirer from "inquirer";
let gameTries = 10;
while (gameTries >= 1) {
    console.log("\n \n -------- guess a random No from 1 to 10 ---------");
    const randomNo = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNo);
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "write your number"
        }
    ]);
    const { userGuess } = answer;
    console.log(` ------------ userGuess(${userGuess}),--RandomGeneratedNo(${randomNo})"--------------`);
    if (userGuess == randomNo) {
        console.log("------ yeaaaah you Guess the right Number --- YOU WIN !!!!!!--------  ");
    }
    else {
        console.log("--------- please Try Next time ----------");
    }
    gameTries -= 1;
    console.log(`--------- you have ${gameTries} left ----------`);
}
