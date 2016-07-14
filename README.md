# tombola.js

Random/chance generation methods, geared towards creating procedural generation, generative art/music etc.

-

**Basic Generation**

```javascript
tombola.range( min, max );
```
>returns: integer

```javascript
tombola.dice( sides, die );
```
>returns: integer

```javascript
tombola.fudge( strength, die );
```
>returns: integer

```javascript
tombola.chance( chance, possibility );
```
>returns: boolean

```javascript
tombola.percent( percentage );
```
>returns: boolean

-

**Weighting**

```javascript
tombola.weightedNumber( [weight1, weight2, etc...] );
```
>returns: integer

```javascript
tombola.weightedItem( [item1, item2, etc...] , [weight1, weight2, etc...] );
```
>returns: item from array

```javascript
tombola.weightedFunction( [function1, function2, etc...] , [weight1, weight2, etc...] );
```
>returns: executes a given function

-

**Clusters**

```javascript
tombola.cluster( min, max, spread, quantity );
```
>returns: integer array

```javascript
tombola.clusterFudge( min, max, strength, die, quantity );
```
>returns: integer array

-

**Persistent Deck**

```javascript
var DECK = new tombola.deck( [item1, item2, etc...] );
```

```javascript
DECK.draw( index? );
```
>returns: item

```javascript
DECK.look( index? );
```
>returns: item

```javascript
DECK.insert( index? );
```

```javascript
DECK.shuffle();
```

```javascript
DECK.show();
```
>returns: item array
