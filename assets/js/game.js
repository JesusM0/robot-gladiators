var playerName = window.prompt("Name Thy Mech!");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Logging player name, health, and attack here
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Kojiro";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert users that the round is starting
    window.alert("Welcome to the Arena, Gladiators!")

    // Ask player whether to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "fight" || promptFight === "FIGHT") {
    // Suntract value of 'playerAttack' form value of 'enemyHealth and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has perished!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left!");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has perished!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left!");
    }
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm user skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes to skip is chosen...
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight!");
        // Subtract money for skipping
        playerMoney = playerMoney - 2;
    }

    // If no to skip is chosen...
    else{
        fight();
    }
} else {
    window.alert("You must choose a valid option. Try again!");
}
};

fight();