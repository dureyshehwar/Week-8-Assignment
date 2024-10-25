//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.
 
//* Step 1:Use at least one array.
//myGroceryList ..... (array)

// Step 2: Use at least two classes.
// class myGroceryList 
class myGroceryList {  //myGroceryList ..... (array)

  constructor(fruits , veges){
    this.fruits = fruits;
    this.veges = veges;
  }
}
 
// class Menu
class Menu{
    constructor (){
        ///myList.... array
        this.myList=[];
    }
 //see a Menu
  
 showMianMenu
 return
 // Add List
 // delete myGroceryList
 // View myGroceryList

 //Add myGroceryList:
 //prompt for a fruits:
 //prompt for aa veges:
 // create a new myGroceryList and push into a array:
 addmyGroceryList(){
    let listfruits = prompt("Enter myGroceryList fruits: ");
    let listveges = prompt(" Enter myGroceryList veges:");
    this.myList.push (new myGroceryList(listfruits,listveges))
}

// delete myGroceryList:
deletemyGroceryList(){
    let myGroceryListIndex = prompt("Enter myGroceryList index to delete:");
    this.myList.splice(myGroceryListIndex, 1);
}

//View myGroceryList:
viewmyList(){  
    let displaymyList = '';
    for(let i = 0; i < this.myList.length; i++ ){
        
        displaymyList += `
       ${i +1}) ${this.myList[i].fruits} ${this.myList[i].veges}`
    }
alert (`
displaymyList wishlist:
----------------------
${displaymyList}
  
`);

} 

//see a Menu
//I put a Method to display the main menu options and get user input
  showMainMenu() {
    return  prompt(`
      Main Menu:
      -------------------------
0) Exit Menu
1) addmyGroceryList
2) deletemyGroceryList
3) viewmyList
 `);

}
////Start the Menu functionality
start(){
    // Initial user selection from the main menu
    let selection = this.showMainMenu();

     // Loop to keep the menu open until the user chooses to exit(selection 0)
    while(selection != 0){
        // Process the user’s selection and call appropriate functions

        switch(selection){

            case "1": this.addmyGroceryList();  // Call to add item(s) to grocery list
            break;

            case "2": this.deletemyGroceryList(); // Call to delete item(s) from grocery list
            break;

            case "3": this.viewmyList(); // Call to view the current grocery list
            break;

            default: selection = 0;// If an invalid option is selected, set selection to 0 to exit
        }
      selection = this.showMainMenu();  // Show the menu again for the next action
    }
    alert ("Exiting menu .....Have a Good day.") // Display a goodbye message upon exiting the menu
}
}

/// initiate the Menu and invoke the start Method.

let menu = new Menu();
menu. start();




