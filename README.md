# tombola.js

Random/chance generation methods, geared towards creating procedural generation, generative art/music etc.

-

**Basic Generation**

tombola.range( min, max );

tombola.dice( sides, die );

tombola.fudge( strength, die );

tombola.chance( chance, possibility );

tombola.percent( percentage );

-

**Weighting**

tombola.weightedNumber( [weight1, weight2, etc...] );

tombola.weightedItem( [item1, item2, etc...] , [weight1, weight2, etc...] );

tombola.weightedFunction( [function1, function2, etc...] , [weight1, weight2, etc...] );

-

**Clusters**

tombola.cluster( min, max, spread, quantity );

tombola.clusterFudge( min, max, strength, die, quantity );

-

**Persistent Deck**

var DECK = new tombola.deck( [item1, item2, etc...] );

DECK.draw( index? );

DECK.look( index? );

DECK.insert( index? );

DECK.shuffle();

DECK.show();
