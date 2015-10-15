dom-from
========

install
-------

`npm install --save dom-from`

Usage
-----

```html
<!DOCTYPE html>
<html>
    <head>
    <title>from dom!</title>
    </head>
<body>
    <div id="box"></div>
    <ul></ul>
    <div id="box2"></div>
    <script>
    var domFrom = require('dom-from'),
        box = document.getElementById('box'),
        li = document.createElement('li'),
        list = [];

    //Append an element create from an html string.
    box.appendChild(domFrom('<p>Paragraph</p>'));
    for(var i=0; i<3; i++){
        list[i] = li.cloneNode(true);
        list[i].innerHTML = i;
    }
    //Append an array, or array like list.
    document.querySelector('ul').appendChild(domFrom(list));
    //Get a node from a node.
    //Good for when you don't know what the input could be.
    document.querySelector('#box2').appendChild(domFrom(box.cloneNode(true)));

    </script>
  </body>
</html>
```

About
-----

dom-from also accepts array like objects. These would be things like a jQuery object, or some other thing that looks like an array with a **length** property, and numerical indexes.

The full list of normally accepted inputs:

-	A string
-	Array
-	Array like object
-	DOM nodes

Everything else is converted to string for your convenience.

Other DOMs
----------

Pass another dom implementation to to second argument of dom-from to override the document.

```javascript
var obj = domFrom('<p>thing</p>', myDocument);
```

This is the same as using the [domify](https://www.npmjs.com/package/domify) module.
