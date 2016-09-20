

//-------------------------------------------------------------------------------------------
//  TOMBOLA SETUP
//-------------------------------------------------------------------------------------------

function Tombola() {
}
var tombola = new Tombola();


//-------------------------------------------------------------------------------------------
//  RANGE ROLL
//-------------------------------------------------------------------------------------------

// Returns a random whole number between 'min' and 'max' //

Tombola.prototype.range = function(min,max) {
    return Math.round(min + (Math.random() * (max - min))); // int
};

// Returns a random float number between 'min' and 'max' //

Tombola.prototype.rangeFloat = function(min,max) {
    return min + (Math.random() * (max - min)); // float
};

// Returns an array populated with random whole numbers between 'min' and 'max' //

Tombola.prototype.rangeArray = function(min,max,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.range(min,max));
    }
    return a; // int array
};

// Returns an array populated with random float numbers between 'min' and 'max' //

Tombola.prototype.rangeFloatArray = function(min,max,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.range(min,max));
    }
    return a; // float array
};


//-------------------------------------------------------------------------------------------
//  DICE ROLL
//-------------------------------------------------------------------------------------------

// Returns a random whole number from simulated dice rolls //

Tombola.prototype.dice = function(die,sides) {
    die = Math.round(die);
    sides = Math.round(sides);
    var t = 0;
    for (var i=0; i<die; i++) {
        t += (1 + Math.floor(Math.random() * sides));
    }
    return t; // int
};

// Returns an array populated with random whole numbers from simulated dice rolls //

Tombola.prototype.diceArray = function(die,sides,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.dice(die,sides));
    }
    return a; // int array
};


//-------------------------------------------------------------------------------------------
//  FUDGE ROLL
//-------------------------------------------------------------------------------------------

// Returns a random whole positive or negative number from simulated fudge dice rolls //
// 'strength' of 1 and 'die' of 3 gives a possible range of -3 to 3 //

Tombola.prototype.fudge = function(die,strength) {
    die = Math.round(die);
    strength = Math.round(strength) || 1;
    var t = 0;
    for (var i=0; i<die; i++) {
        t += (-strength + Math.floor(Math.random() * ((strength * 2) + 1)));
    }
    return t; // int
};

// Returns a random float positive or negative number from simulated fudge dice rolls //
// 'strength' of 0.1 and 'die' of 3 gives a possible range of -0.3 to 0.3 //

Tombola.prototype.fudgeFloat = function(die,strength) {
    die = Math.round(die);
    strength = strength || 1;
    var t = 0;
    for (var i=0; i<die; i++) {
        t += (-strength + (Math.random() * (strength * 2)));
    }
    return t; // float
};

// Returns an array populated with random whole positive or negative numbers from simulated fudge dice rolls //

Tombola.prototype.fudgeArray = function(die,strength,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.fudge(die,strength));
    }
    return a; // int array
};

// Returns an array populated with random float positive or negative numbers from simulated fudge dice rolls //

Tombola.prototype.fudgeFloatArray = function(die,strength,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.fudgeFloat(die,strength));
    }
    return a; // float array
};

//-------------------------------------------------------------------------------------------
//  CHANCE ROLL
//-------------------------------------------------------------------------------------------

// Returns true or false the results of a chance roll //
// a 'chance' of 1 and 'possibility' of 5 means there's a 1 in 5 chance of returning true //

Tombola.prototype.chance = function(chance,possibility) {
    var n = Math.random() * possibility;
    return (n < chance); // bool
};

// Returns an array populated with true or false results from chance rolls //

Tombola.prototype.chanceArray = function(chance,possibility,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.chance(chance,possibility));
    }
    return a; // bool array
};


//-------------------------------------------------------------------------------------------
//  PERCENT ROLL
//-------------------------------------------------------------------------------------------

// Returns true or false the results of a percent roll //
// a 'percent' of 25 means there's a 25% chance of returning true //

Tombola.prototype.percent = function(percent) {
    var n = Math.random() * 100;
    return (n < percent); // bool
};

// Returns an array populated with true or false results from percent rolls //

Tombola.prototype.percentArray = function(percent,length) {
    var a = [];
    for (var i=0; i<length; i++) {
        a.push(this.percent(percent));
    }
    return a; // bool array
};


//-------------------------------------------------------------------------------------------
//  ITEM
//-------------------------------------------------------------------------------------------

// Returns a randomly selected item with equal probability //
// 'items' is an array of items to be chosen from //

Tombola.prototype.item = function(items) {
    var l = items.length;
    var n = Math.floor(Math.random() * l);
    return items[n]; // item
};


//-------------------------------------------------------------------------------------------
//  WEIGHTED NUMBER
//-------------------------------------------------------------------------------------------

// Returns a random whole number with a weighted probability //
// 'weights' is an array of probability weights, four weights would mean a number between 1 - 4 is generated //
// 'weights' of [20,10,10] will return a number between 1 and 3, with 1 being twice as likely an outcome as either 2 or 3 //

Tombola.prototype.weightedNumber = function(weights) {
    var l = weights.length;
    var totalWeight = 0;
    for (var i=0; i<l; i++) {
        totalWeight += weights[i];
    }
    var n = Math.random() * totalWeight;
    var w = 0;
    for (i=0; i<l; i++) {
        w += weights[i];
        if (n <= w) {
            return i+1; // int
        }
    }
};


//-------------------------------------------------------------------------------------------
//  WEIGHTED ITEM
//-------------------------------------------------------------------------------------------

// Returns a randomly selected item with a weighted probability //
// 'items' is an array of items to be chosen from //
// 'weights' is an array of probability weights, setting the probability of each item being selected e.g [5,20,1,0.1] //

Tombola.prototype.weightedItem = function(items,weights) {
    var l = items.length;
    var totalWeight = 0;
    for (var i=0; i<l; i++) {
        totalWeight += weights[i] || 0;
    }
    var n = Math.random() * totalWeight;
    var w = 0;
    for (i=0; i<l; i++) {
        w += weights[i] || 0;
        if (n <= w) {
            return items[i]; // item
        }
    }
};


//-------------------------------------------------------------------------------------------
//  WEIGHTED FUNCTION
//-------------------------------------------------------------------------------------------

// Calls a randomly selected function with a weighted probability //
// 'functions' is an array of functions to be chosen from //
// 'weights' is an array of probability weights, setting the probability of each function being selected e.g [5,20,1,0.1] //

Tombola.prototype.weightedFunction = function(functions,weights) {
    var l = functions.length;
    var totalWeight = 0;
    for (var i=0; i<l; i++) {
        totalWeight += weights[i] || 0;
    }
    var n = Math.random() * totalWeight;
    var w = 0;
    for (i=0; i<l; i++) {
        w += weights[i] || 0;
        if (n <= w) {
            functions[i](); // function call
            break;
        }
    }
};


//-------------------------------------------------------------------------------------------
//  CLUSTER
//-------------------------------------------------------------------------------------------

// Returns an array of whole numbers which are randomly clustered within a min/max range //
// an evenly distributed cluster width is set with 'spread' //

Tombola.prototype.cluster = function(quantity,min,max,spread) {
    var c = this.range(min,max);
    var a = [];
    for (var i=0; i<quantity; i++) {
        a.push(c + this.range(-spread,spread));
    }
    return a; // int array
};

// Returns an array of whole numbers which are randomly clustered within a min/max range //
// uneven cluster width is set with 'die' and 'strength' (die x strength = max possible width) //
// the distribution is more weighted around the center using fudge rolls, more die = greater center weight //

Tombola.prototype.clusterFudge = function(quantity,min,max,die,strength) {
    strength = strength || 1;
    var c = this.range(min,max);
    var a = [];
    for (var i=0; i<quantity; i++) {
        a.push(c + this.fudge(die,strength));
    }
    return a; // int array
};


//-------------------------------------------------------------------------------------------
//  PERSISTENT DECK
//-------------------------------------------------------------------------------------------

// Creates a deck (hat/tombola) which can be drawn from, added to or shuffled //
// 'contents' is an array of items to populate the deck with //


Tombola.prototype.deck = function(contents) {
    return new RandomDeck(contents);
};


function RandomDeck(contents) {
    this.contents = contents || [];
}

// Returns an item from the deck, randomly or at a given index, and removes that item from the deck //
RandomDeck.prototype.draw = function(index) {
    if (this.contents.length>0) {
        index = index || Math.floor(Math.random() * this.contents.length);
        var item = this.contents[index];
        this.contents.splice(index,1);
        return item;
    } else {
        return null;
    }
};

// Returns an item from the deck, randomly or at a given index, the item stays in the deck //
RandomDeck.prototype.look = function(index) {
    if (this.contents.length>0) {
        index = index || Math.floor(Math.random() * this.contents.length);
        return this.contents[index];
    } else {
        return null;
    }
};

// Adds an item to the deck, randomly or at a given index //
RandomDeck.prototype.insert = function(item, index) {
    index = index || Math.round(Math.random() * this.contents.length);
    this.contents.splice(index,0,item);
};

// Shuffles the deck order //
RandomDeck.prototype.shuffle = function() {
    var a = [];
    var l = this.contents.length;
    for (var i=0; i<l; i++) {
        a.push(this.draw());
    }
    this.contents = a;
};

// Returns an array of all contents of the deck //
RandomDeck.prototype.show = function() {
    return this.contents;
};


//-------------------------------------------------------------------------------------------
//  WEIGHTED DECK
//-------------------------------------------------------------------------------------------

// Creates a deck (hat/tombola) which can be drawn from, added to or shuffled //
// 'contents' is an array of items to populate the deck with, 'weights' add weighting to
// the chance, and 'instances' allows for multiple instances of each object. //


Tombola.prototype.weightedDeck = function(contents, options) {
    return new WeightedDeck(contents, options);
};

function WeightedDeck(contents, options) {
    options = options || {};
    this.contents = contents || [];
    this.weights = options.weights || [];
    this.instances = options.instances || [];

    var i;
    if (this.weights.length===0) {
        for (i=0; i<contents.length; i++) {
            this.weights.push(1);
        }
    }
    if (this.instances.length===0) {
        for (i=0; i<contents.length; i++) {
            this.instances.push(1);
        }
    }
}

// Returns an item from the deck, randomly or at a given index, and removes that item from the deck //
WeightedDeck.prototype.draw = function(index) {
    if (this.contents.length>0) {

        // no given index, do random weighting //
        var l = this.contents.length;
        if (!(index >=0 && index<l)) {
            var totalWeight = 0;
            for (var i=0; i<l; i++) {
                totalWeight += this.weights[i] || 0;
            }
            var n = Math.random() * totalWeight;
            var w = 0;
            for (i=0; i<l; i++) {
                w += this.weights[i] || 0;
                if (n <= w) {
                    index = i;
                    break;
                }
            }
        }
        var item = this.contents[index];

        // remove an instance //
        this.instances[index] -= 1;
        if (this.instances[index]<1) {
            this.contents.splice(index,1);
            this.weights.splice(index,1);
            this.instances.splice(index,1);
        }

        return item;
    } else {
        return null;
    }
};

// Returns an item from the deck, randomly or at a given index, the item stays in the deck //
WeightedDeck.prototype.look = function(index) {
    if (this.contents.length>0) {

        // no given index, do random weighting //
        var l = this.contents.length;
        if (!(index >=0 && index<l)) {
            var totalWeight = 0;
            for (var i=0; i<l; i++) {
                totalWeight += this.weights[i] || 0;
            }
            var n = Math.random() * totalWeight;
            var w = 0;
            for (i=0; i<l; i++) {
                w += this.weights[i] || 0;
                if (n <= w) {
                    index = i;
                    break;
                }
            }
        }
        return this.contents[index];
    } else {
        return null;
    }
};

// Adds an item to the deck, randomly or at a given index //
WeightedDeck.prototype.insert = function(item, options) {
    options = options || {};
    var index = options.index || Math.round(Math.random() * this.contents.length);
    var weight = options.weight || 1;
    var instances = options.instances || 1;
    this.contents.splice(index,0,item);
    this.weights.splice(index,0,weight);
    this.instances.splice(index,0,instances);
};

// Shuffles the deck order //
WeightedDeck.prototype.shuffle = function() {
    var a = [];
    var b = [];
    var c = [];
    var l = this.contents.length;
    for (var i=0; i<l; i++) {
        var index = Math.floor(Math.random() * this.contents.length);
        a.push(this.contents[index]);
        b.push(this.weights[index]);
        c.push(this.instances[index]);
        this.contents.splice(index,1);
        this.weights.splice(index,1);
        this.instances.splice(index,1);
    }
    this.contents = a;
    this.weights = b;
    this.instances = c;
};

// Returns an array of all contents of the deck //
WeightedDeck.prototype.show = function() {
    return this.contents;
};


// npm export //
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Tombola;
}