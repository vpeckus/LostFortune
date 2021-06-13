/*
                                          Lost Fortune Word Game
										  written by Vaidas Peckus
*/

//-----------------------------------------------------------------------
//                          MODULE invetnory from file
//-----------------------------------------------------------------------

var myModule = require('') // enter modInventoryLostFortune file directory here
var inventory = new myModule();


//---------------------------/ Player's variables /--------------------------

let mySix = ['Spirit Light', 'Spirit Shadow', 'Spirit Water', 'Spirit Fire', 'Spirit Earth', 'Spirit Air']; // Player name array 

var leadR = ''; // Leader's name

let leadArr = ['Cigar','','','','']; // initialize the array

//------------------------/Player's system stats /---------------------------

let numHeroes = 1; // Player count
let heroesHealthPoints = 10000; // Player health
let playerSpecPower = true; // Player special move
let reviveTeam = 0; // Revive any killed player
let telePort = 2; // Teleport from and to the scene by the leader


//------------------------/ Enemy system stats /-----------------------------

let numCyborgTin = 3; // Number of cyborgtins
let enemyHealthPoints = 25000; // 25000 per 1 cyborgtin


//-------------------------/ System currency /-------------------------------

let greenanium = 0; // In game currency
const killCyborgTin = 600; // Greenanium earned per each cyborgtin kill
let bonusSpecPower = 50; // Greenanium gained for per 1 use of special power


//---------------------------/ Print intro /---------------------------------

console.log (`
\t\t----------------------------------------------------------------------------------
\t\t|LLLLLLLLLLLLLLLLLLL                                                  LLLLLLLLLLL|
\t\t|LLLLLLLLLLLLL                  L       LLLLL   LLLLL  LLLLLLL          LLLLLLLLL|
\t\t|LLLLLLLL                      L      LL    LL LL       LL                  LLLLL|
\t\t|LLLLL                        L      LL    LL  LLLLL   LL                     LLL|
\t\t|LLL                         LL     LL    LL      LL  LL                       LL|
\t\t|LL                         LL     LL    LL L    LL  LL                         L|
\t\t|L                         LLLLLLL LLLLLL  LLLLLL   LL                          L|
\t\t|                                                                               L|
\t\t|                    LLLLL LLLLL LLLL  LLLLLL L    L L   L LLLLL               LL|
\t\t|                   LL    L   L L   L   L    L    L LL  L L                   LLL|
\t\t|                  LLLL  L   L L LL    L    L    L L LLL LLLL                LLLL|
\t\t|L                LL    L   L L  L    L    L    L L  LL L                  LLLLLL|
\t\t|LL              LL    LLLLL L   L   L    LLLLL  L   L LLLLL             LLLLLLLL|
\t\t|LLLL                                                                 LLLLLLLLLLL|
\t\t|LLLLLL                 . = THE CYBORGTINS RETURN = .              LLLLLLLLLLLLLL|
\t\t|LLLLLLLL            Kraken Soft All Rights Reserved 2021     LLLLLLLLLLLLLLLLLLl|    
\t\t----------------------------------------------------------------------------------
\n`);

//----------------------/ FUNCTION displayIntroduction /---------------------

// Remove 'undefined' after the a is passed through 'displayIntroduction'
function displayIntroduction() {
    return `       With great bang the portal opened. Amid dark smoke and blazing lightning rods emerged 7 heroes. Their

names where Spirit Light, Spirit Shadow, Spirit Water, Spirit Fire, Spirit Earth and Spirit Air. The crew secured

the drop zone and scanned the area. Their leader Sunamon Purple standing in the midst of them

acknowledged the successful drop. "Smooth sailing", he uttered lighting the cigar.

      The crew did many missions before for the Kore Dominion but nothing like this. Usually the company would plan

and let the crew prepare at least three weeks in advance. To top it off, shorting everyone's well deserved break,

increased group's irritability.

      Planet Sat6 was a shithole. Rough terrain accompanied by cold and heavy rains. Most commercial enterprises have

long closed shop and left somewhere else to make their profit. However, Kore Dominion had their own devious agenda.

Military grade cyborgtins to be exact. Lethal killing machines powered by man-made robotics and infused with underworlds

dark energy. Kore Dominion had a reputation; no matter the cost or the consequences. Their goal of delivering final product

that is tested and kill ready. Everything has a price, so it seems. Rouge cyborgtins in God forsaken planet and pissed off

crew looking to destroy them.

      Boom, boom kraaaahhhh! Fiery explosion ripping the dense air followed by the echo of fear. Three rouge cyborgtins

appeared out of thick smoke approaching the crew. With raging precision they surrounded Spirit Earth and Spirit Air.

"Help them !" yelled Sunamon Purple. As Spirit Light, Spirit Shadow, Spirit Water and Spirit Fire were closing the distance

to their teammates one of the cyborgtins fired a beam particle, piercing through Spirit Earth and Spirit Air killing them

instantly. Sunamon Purple knowing that same fate could be approaching the rest of his crew, summoned the dark energy.

Materializing within the underworld descerning  through the fabric of reality came a flash so bright no eyes could behold

its true power. Suddenly, 2 cyborgtins where ripped in half, falling to the ground like scrap metal. "Watch your six!"

yelled Spirit Light to Sunamon Purple.\n`

}
console.log(displayIntroduction()); // Invoke 'displayIntroduction'

//------------------------/ STATS AFTER THE INTRO /--------------------------

// Calculate losses, gains and power-ups after the intro
greenanium += 2 * killCyborgTin; // Score gained by enemy killed 
numCyborgTin = numCyborgTin - 2; // Subtract enemies killed
playerSpecPower = false; // Leader used up his special move
telePort -= 1; // One teleport used
enemyHealthPoints = enemyHealthPoints * numCyborgTin; // Enemy available health


//----------------------------/ displayMenu /--------------------------

// 4 MAIN OPTIONS <---------------------------
function displayMenu(){
    console.log("\n-----------------------------------------[SELECT AN OPTION]----------------------------------------");

    console.log("\n[ NOTE: EACH OPTION DISPLAY'S IT'S ANSWER AND WILL ALWAYS BE THE SAME NO MATTER THE PLAY #. ]\n")
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")

// OPTION #1
    console.log(`\n[1] << Cyborgtin's focus was on the crew. It engaged locking the targets on all of them. With swift 

thinking ${leadR} made the move towards the enemy.>>\n`); 

// OPTION #2
//-----------------------------------------------------------------------------------------------------------------
    console.log(`\n[2] << Cyborgtin's focus was on the crew. It engaged locking the targets on all of them. With swift 

thinking ${leadR} engaged the portal beam back to their ship.>>\n`); 

// OPTION #3
//-----------------------------------------------------------------------------------------------------------------
    console.log(`\n[3] << Cyborgtin's focus was on the crew. It engaged locking the targets on all of them. With swift

thinking ${leadR} cloaked the whole team.>>\n`); 

// OPTION #4
//-----------------------------------------------------------------------------------------------------------------
    console.log('\n[4] << The ' + mySix[0] + ", " + mySix[1] + ", " + mySix[2] + " and " + mySix[3] + " stood there doing nothing." + ` 

"He can take care of himslef. He is our leader isn't he?", they yelled out.>>\n`);

    console.log("---------------------------------------------------------------------------------------------------");
}

//-----------------------/ FUNCTION displayStats /---------------------------

// To console the stats after the intro 
function displayStats(){
    console.log ("______________________________________________/ Game Stats /________________________________________________________\n");
    console.log ("/ CURRENCY TAB /");
    console.log ("Base Greenanium Earned: ", greenanium);
    console.log ("Bonus Special Move Used: ", bonusSpecPower);
    console.log ("Total Greenanium Earned: ", greenanium + bonusSpecPower);
    console.log ("");
    console.log ("/ PLAYER HEALTH /");
    console.log ("Player Lives: ", numHeroes);
    console.log ("Player Total Health Points: ", numHeroes * heroesHealthPoints);
    console.log ("");
    console.log ("/ PLAYER SPECIAL ATTRIBUTES /");
    // iterate through the the leaders array to show intialy available items
    for (let i = 0; i < leadArr.length; i++) {
        console.log("Player usable items: ", leadArr[i])
    };
    console.log ("\nPlayer Special Power: ", playerSpecPower);
    console.log ("Revive Killed Teammate Move: ", reviveTeam);
    console.log ("Teleport Avialbility: ", telePort);
    console.log ("");
    console.log ("/ ENEMY HEALTH /");
    console.log ("Number of Enemies Alive: ", numCyborgTin);
    console.log ("Enemy Total Health Points: ", enemyHealthPoints);
    console.log ("____________________________________________________________________________________________________________________");
    }
displayStats();// Invoke function 'displayStats' after the intro


//------------------------------/ FUNCTION getLeader /------------------------

// Prompt user to change the leader's name
function getLeader(){
    var readlineSync = require('readline-sync');
    var leadR = readlineSync.question("\nEnter you name: ");
    return leadR;
    }
leadR = getLeader();
leadR = leadR.toUpperCase(); // Input to upper case
console.log(`\n${leadR}, choose one of the options from the MENU:`)

//-------------------------/ FUNCTION doDamage /------------------------

// Calculate player's health based on option selcted

function doDamage(){
	if(heroesHealthPoints === 0)
    console.log(leadR + ", you have 0 lives left!\n\nGAME OVER!");
	}

//-------------------------------/      /------------------------------
//                               | MAIN |
//-------------------------------\      \------------------------------

let playAgain = 'y';

while (playAgain == 'y') { 
    const readlineSync = require('readline-sync');
  
    displayMenu(); // Invoke function 'MENU' 


//--------------------------------------------------------------------------------------
//                                   SWITCH STATEMENT #1
//--------------------------------------------------------------------------------------

    console.log("\n------------------------------");
    const choice = parseInt(readlineSync.question("Please make your choice: "));

    switch (choice) {
//--------------------------------------------------------------------------------------
//                                      CASE 1
//--------------------------------------------------------------------------------------
 
case 1:
    console.log(`\nPLAYER TOOK TURN: ${leadR} blocks robots deadly blast directed at the crew. ${leadR} takes 5000 damage points.\n`)
 
// Adjust stats after option is selected
    playerSpecPower = false; 
	numHeroes = 1;
	numCyborgTin = 1;
	greenanium = 1250;
	bonusSpecPower = 0;
	heroesHealthPoints = 5000; //player takes hit 10000 - 5000 = 5000
    enemyHealthPoints = 25000;
	reviveTeam = 0;
	telePort = 1;
    doDamage();

    console.log(`\n[1] << Display ${leadR}'s inventory. >>`); 
    console.log(`\n[2] << Get the med pack from ${mySix[1]}? >>`);


    console.log("\n------------------------------");
    const choice2 = parseInt(readlineSync.question("Please make your choice: "));

    switch (choice2) {
	
//--------------------------------------------------------------------------------------
//                                      CASE #1 1b
//--------------------------------------------------------------------------------------
	case 1:
	
    myModule(); // invoke mod 'inventory'
	leadArr.pop(leadArr[2]); // push of previous elements from prior cases
	
	continue;
	
//--------------------------------------------------------------------------------------
//                                      CASE #2 2b
//--------------------------------------------------------------------------------------

	case 2:

    console.log (`\nPLAYER TOOK TURN: ${mySix[1]} gives the med pack to ${leadR}.\n`); 

    // Results after option 1 is selected	
	leadArr[1] = 'Med Pack'; // push all new elements once 'myModule' is invoked
	myModule();
	displayStats(); // dipslay stats before option 1 is again replayed

    // case #1 continue
    continue;

	default:
    console.log("\nINVALID SELECTION");
    }// end bracket for choice2

//--------------------------------------------------------------------------------------
//                                      CASE 2
//--------------------------------------------------------------------------------------
 
case 2:
    console.log(`\nPLAYER TOOK TURN: Back at the ship, ${leadR} and the crew regroup. Next, they check all of their supplies.\n`)
    
	doDamage();
	playerSpecPower = false; 
    numHeroes = 1;
	heroesHealthPoints = 10000;
	numCyborgTin = 1;
	greenanium = 1250;
	bonusSpecPower = 0;
    enemyHealthPoints = 25000;
	reviveTeam = 0;
	telePort = 0; // remaining teleport used
	
    // 2 options to choose from in statement 2
    console.log(`\n[1] << Display ${leadR}'s inventory. >>`); 
    console.log(`\n[2] << Restock on supplies before heading back out to Sat6? >>`);

    console.log("\n------------------------------");
    const choice3 = parseInt(readlineSync.question("Please make your choice: "));

    switch (choice3) {

//--------------------------------------------------------------------------------------
//                                      CASE #2 1b
//--------------------------------------------------------------------------------------
	case 1:
	
    
    myModule(); // invoke mod 'inventory'
	leadArr.pop(leadArr[1]); // push of previous elements from prior cases
	
	continue;
	
//--------------------------------------------------------------------------------------
//                                      CASE #2 2b
//--------------------------------------------------------------------------------------

	case 2:
    console.log ("\nPLAYER TOOK TURN: " + leadR + " picks up 2 teleports, 1 mini gun and food for the crew.\n");
	leadArr[1] = 'Mini Gun';
	leadArr[2] = 'Food Pack';
	telePort = 2;
	myModule();
    displayStats(); 


    continue; // case #2 continue

	default:
    console.log("\nINVALID SELECTION");

    }// end bracket for choice3


//--------------------------------------------------------------------------------------
//                                      CASE 3
//--------------------------------------------------------------------------------------
 
case 3:
    console.log(`\nPLAYER TOOK TURN: Under the cloack, ${leadR} spots a strange artifact besides his feet.\n`)
    
	doDamage();
	playerSpecPower = false; 
    numHeroes = 1;
	heroesHealthPoints = 10000;
	numCyborgTin = 1;
	greenanium = 1250;
	bonusSpecPower = 0;
    enemyHealthPoints = 25000;
	reviveTeam = 0;
	telePort = 1; // adjust the teleport value 
	
// 2 options to choose from in statement 3
console.log(`\n[1] << Display ${leadR}'s inventory. >>`); 
console.log(`\n[2] << Pick up the strange artifact laying by your feet? >>`);

    console.log("\n------------------------------");
    const choice4 = parseInt(readlineSync.question("Please make your choice: "));

    switch (choice4) {

//--------------------------------------------------------------------------------------
//                                      CASE #3 1b
//--------------------------------------------------------------------------------------
	case 1:
	
    
    myModule(); // invoke mod 'inventory'
	leadArr.pop(leadArr[1]); // push of previous elements from prior cases
	leadArr.pop(leadArr[2]);
	
	continue;
	
//--------------------------------------------------------------------------------------
//                                      CASE #3 2b
//--------------------------------------------------------------------------------------

	case 2:
    console.log ("\nPLAYER TOOK TURN: " + leadR + " picks up the strange artifact.\n");
	leadArr[1] = 'Strange Artifact';
	myModule();
    displayStats(); 


    continue; // case #3 continue

	default:
    console.log("\nINVALID SELECTION");

    }// end bracket for choice4

//--------------------------------------------------------------------------------------
//                                      CASE 4
//--------------------------------------------------------------------------------------
 
case 4:

    console.log(`\nPLAYER TOOK TURN: ${leadR} was crushed by deadly blow from cyborgtin. The crew stood there in awe.

"What did just happen?" one asked. Signaa......break......AaAaaAHhhHhHh..BOoOM...BOoOoOM...Ka...BOoOoOOOM!!!!

They all exploded in bits and pieces scattered across the rough terrain. They did not know that ${leadR} had 

explosive device rigged in each suit in case of such critical assist failure. No leader, no mission! 

Who's your daddy now?! MUahaHahaHA!!!!!!!!!!\n`)

	leadArr = 0;
	numHeroes = 0;
	numCyborgTin = 1;
	greenanium = 1250;
	bonusSpecPower = 0;
	heroesHealthPoints = 0;
    enemyHealthPoints = 25000;
	reviveTeam = 0;
	telePort = 0;
    displayStats();

// Test how many slots are taken in the array
{
console.log("\nARRAY LENGTH TEST: ", leadArr.length)
console.log("----------------------------")
console.log(leadArr);
}

console.log("\nGAME OVER " + leadR + "!");
console.log("\nGOODBYE!"); 
	
//--------------------------------------------------------------------------------------
//                                     DEFAULT
//--------------------------------------------------------------------------------------
 
default:
    console.log("\nINVALID SELECTION");

}

//--------------------------------------------------------------------------------------
//                               EXITING THE MAIN LOOP
//--------------------------------------------------------------------------------------

    console.log("\nGAME OVER " + leadR + "!\n");
    playAgain = readlineSync.question("Would you like to play again?(y/n)? ");
}

// Test how many slots are taken in the array
{
console.log("\nARRAY LENGTH TEST: ", leadArr.length);
console.log("----------------------------");
console.log(leadArr);
}

console.log("\nGOODBYE!");
