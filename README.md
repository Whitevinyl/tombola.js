# tombola.js

Random/chance generation methods, geared towards creating procedural generation, generative art/music etc.

-

**Basic Generation**

```javascript
tombola.range( min, max );
```
*returns: integer*

Randomly generates a whole number between 'min' & 'max'


```javascript
tombola.dice( sides, die );
```
*returns: integer*

Randomly generates a whole number from the total of simulates dice rolls.


```javascript
tombola.fudge( strength, die );
```
*returns: integer*

Randomly generates a positive or negative modifier (or zero), based on the concept of "FUDGE die".


```javascript
tombola.chance( chance, possibility );
```
*returns: boolean*

Randomly generates a true or false based on a probability fraction, e.g a 'chance' of 1 and 'possibility' of 5 will give the function a 1 in 5 chance of returning true.


```javascript
tombola.percent( percentage );
```
*returns: boolean*

Randomly generates a true or false based on a probability percentage. e.g a 'percentage' of 25 will give the function a 25% chance of returning true.


-

**Weighting**

```javascript
tombola.weightedNumber( [weight1, weight2, etc...] );
```
*returns: integer*

```javascript
tombola.weightedItem( [item1, item2, etc...] , [weight1, weight2, etc...] );
```
*returns: item from array*

```javascript
tombola.weightedFunction( [function1, function2, etc...] , [weight1, weight2, etc...] );
```
*returns: executes a given function*

-

**Clusters**

```javascript
tombola.cluster( min, max, spread, quantity );
```
*returns: integer array*

```javascript
tombola.clusterFudge( min, max, strength, die, quantity );
```
*returns: integer array*

-

**Persistent Deck**

```javascript
var DECK = new tombola.deck( [item1, item2, etc...] );
```

```javascript
DECK.draw( index? );
```
*returns: item*

```javascript
DECK.look( index? );
```
*returns: item*

```javascript
DECK.insert( index? );
```

```javascript
DECK.shuffle();
```

```javascript
DECK.show();
```
*returns: item array*
