// MODULE INVENTORY

//----------------------/ FUNCTION inventory /
function inventory(){    
	
	let leadArr = []; // Player's array 
       leadArr[0] = 'Cigar'; // default inital item
       leadArr[1] === undefined;
       leadArr[2] === undefined;
       leadArr[3] === undefined;
       leadArr[4] === undefined;

	
	displayInventory(); // function 'displayInventory'
	addToInventory();   // function 'addToInventory'
	
	
//----------------------/ FUNCTION displayInventory /
	
function displayInventory(){
	console.log("______________________________________")
	console.log("\n\tINVENTORY LIST")
	for (let i = 0; i < leadArr.length; i++)
        console.log("Your usable items: ", leadArr[i])
        console.log("______________________________________\n")
	    }


//----------------------/ FUNCTION addToInventory /

//pushing the rest of the elements in the array
leadArr.push(leadArr[0]);
leadArr.push(leadArr[1]);
leadArr.push(leadArr[2]);
leadArr.push(leadArr[3]);
leadArr.push(leadArr[4]);

function addToInventory(){
// Replace last item with the new one if more than 5
   if (leadArr.length === 6){const choice5 = parseInt(readlineSync.question(`\n[1] << Replace your last item with ${leadArr[4]}? >>
       \n[2] << Exit without replacing the item. >>
       \nPlease make your choice: \n\n`));

switch (choice5) {
    case 1:

	{
    leadArr.pop(leadArr[4])// pop last element
	console.log("\nLast item on the list has been removed and replaced with " + leadArr[5])
	leadArr.push(leadArr[5])
	console.log("\n\tINVENTORY LIST")
	console.log(leadArr)
	console.log("")	   
	};
		
	case 2:
	{console.log ("\nExit to the previous menu.")
	leadArr.pop()
	console.log("\n\tINVENTORY LIST")
	console.log(leadArr)
	console.log("")
	};
	
		
    default:
    console.log("\nINVALID SELECTION");

   }
  }
 } 
} 

module.exports = inventory;
