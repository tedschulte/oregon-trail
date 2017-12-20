(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        //health set as default true
        function Traveler(name, food, isHealthy) {
            this.name = name;
            this.food = food;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            if (Math.random() > 0.5) {
                this.food += 100;
            }
            return this.food;
        };
        ;
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food -= 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        ;
        return Traveler;
    }());
    function rand() {
        return Math.round(Math.random() * 100);
    }
    // Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    var Bob = new Traveler("Bob", rand(), true);
    var Joe = new Traveler("Joe", rand(), true);
    var Jane = new Traveler("Jane", rand(), true);
    var Rita = new Traveler("Rita", rand(), true);
    var Joan = new Traveler("Joan", rand(), true);
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            return "sorry";
        };
        Wagon.prototype.isQuarantined = function () {
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var traveler = _a[_i];
                if (!traveler.isHealthy) {
                    return true;
                }
            }
            return false;
        };
        ;
        Wagon.prototype.getFood = function () {
            var sum = 0;
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var traveler = _a[_i];
                sum += traveler.food;
            }
            return sum;
        };
        ;
        return Wagon;
    }());
    //Create wagon with an empty passenger list and a capacity of 4.
    var wagon = new Wagon(4, []);
    //Make 3 of 5 the travelers eat by calling their eat methods
    console.log("Is " + Bob.name + " still healthy after attempting to eat? " + Bob.eat());
    console.log("Is " + Joe.name + " still healthy after attempting to eat? " + Joe.eat());
    console.log("Is " + Jane.name + " still healthy after attempting to eat? " + Jane.eat());
    //Make the remaining 2 travelers hunt
    console.log("What is " + Rita.name + " food total after hunt? " + Rita.hunt());
    console.log("What is " + Joan.name + " food total after hunt? " + Joan.hunt());
    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // of attempting to be being added to the wagon using the wagons addPassenger method.
    var passengers = [Bob, Joe, Jane, Rita, Joan];
    for (var _i = 0, passengers_1 = passengers; _i < passengers_1.length; _i++) {
        var passenger = passengers_1[_i];
        if (Math.random() > 0.5) {
            wagon.addPassenger(passenger);
        }
    }
    // Run the isQuarantined method for the wagon
    console.log("Wagon quarantined? " + wagon.isQuarantined());
    // Run the getFood method for the wagon
    console.log("The total amount of food for the wagon is " + wagon.getFood());
    /*
    * Play the game
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    */
})();
