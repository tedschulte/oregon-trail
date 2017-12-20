(function () {

    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;
    }

    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;
        //health set as default true
        constructor(name: string, food: number, isHealthy: boolean) {
            this.name = name;
            this.food = food;
            this.isHealthy = isHealthy;
        }

        hunt(): number {
            if (Math.random() > 0.5) {
                this.food += 100;
            }
            return this.food;
        };

        eat(): boolean {
            if (this.food >= 20) {
                this.food -= 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };

    }

    function rand() {
        return Math.round(Math.random() * 100)
    }
    // Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)

    let Bob = new Traveler("Bob", rand(), true);
    let Joe = new Traveler("Joe", rand(), true);
    let Jane = new Traveler("Jane", rand(), true);
    let Rita = new Traveler("Rita", rand(), true);
    let Joan = new Traveler("Joan", rand(), true);

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[];

        constructor(capacity: number, passengerArray: Traveler[]) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }

        addPassenger(traveler: Traveler): string {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            return "sorry";
        }

        isQuarantined(): boolean {
            for (let traveler of this.passengerArray) {
                if (!traveler.isHealthy) {
                    return true;
                }
            }
            return false;
        };

        getFood(): number {
            let sum: number = 0;
            for (let traveler of this.passengerArray) {
                sum += traveler.food;
            }
            return sum;
        };

    }
    //Create wagon with an empty passenger list and a capacity of 4.
    let wagon = new Wagon(4, []);

    //Make 3 of 5 the travelers eat by calling their eat methods
    console.log(`Is ${Bob.name} still healthy after attempting to eat? ${Bob.eat()}`);
    console.log(`Is ${Joe.name} still healthy after attempting to eat? ${Joe.eat()}`);
    console.log(`Is ${Jane.name} still healthy after attempting to eat? ${Jane.eat()}`);

    //Make the remaining 2 travelers hunt
    console.log(`What is ${Rita.name} food total after hunt? ${Rita.hunt()}`);
    console.log(`What is ${Joan.name} food total after hunt? ${Joan.hunt()}`);

    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // of attempting to be being added to the wagon using the wagons addPassenger method.

    let passengers = [Bob, Joe, Jane, Rita, Joan];

    for (let passenger of passengers) {
        if (Math.random() > 0.5) {
            wagon.addPassenger(passenger);
        }
    }

    // Run the isQuarantined method for the wagon
    console.log(`Wagon quarantined? ${wagon.isQuarantined()}`);

    // Run the getFood method for the wagon
    console.log(`The total amount of food for the wagon is ${wagon.getFood()}`);

    /*
    * Play the game
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects 
    */

})();

