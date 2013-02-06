jQuery-copy
===========

##Description

Quickly clone() elements multiple times

.copy( [ number of copies [, withDataAndEvents [, deepWithDataAndEvents ] ] ] )

.copy( [ withDataAndEvents [, deepWithDataAndEvents ] ] )

##Documentation

**number of copies** (Default: *1*)

Type: Integer

The number of copies to of the selected elements to clone()

**withDataAndEvents** (Default: *false*)

Type:  Boolean

A Boolean indicating whether event handlers and data should be copied along with the elements.


**deepWithDataAndEvents** (Default: *value of withDataAndEvents*)

Type: Boolean

A Boolean indicating whether event handlers and data for all children of the cloned element should be copied.


##Examples

```javascript
  var el = $("<div/>"),
  c = el.copy();
```
The above returns a single cloned element.

```javascript
  var el = $("<div/>"),
  c = el.copy(3);
```
The above returns 3 cloned div elements.

```javascript
  var el = $("<div/>"),
  c = el.copy(true,false);
```
The above returns a single copied div element without copying events and data for their children.

```javascript
  var el = $("<div/>"),
  c = el.copy(3,true);
```
The above returns 3 deep copied div elements with event handlers and data for them and their children.
