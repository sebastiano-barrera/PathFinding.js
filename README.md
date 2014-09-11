PathFinding.js (Team Diana fork)
================================
#### A comprehensive path-finding library and test environment in javascript. ####

(A fork of the nice, readable, maintainable and generally cool [Pathfinding.js](https://github.com/qiao/PathFinding.js) by [@qiao](https://github.com/qiao))

Introduction
------------

The aim of this project is to provide a path-finding library and test environment that makes it easy to test and tinker with various pathfinding algorithms and heuristics. It may run on Node.js or the browser.

The main web app is inside the `visual` directory.

The main web application
--------------------

In order to use the main web application, it is _necessary_, first of all, to install the necessary dependencies from npm, then run `make` to build the `pathfinding-browser.js` file and place it in the appropriate path:

```sh
npm install
make
```

Differences in the library
------------------------

The library portion of the project has been slightly modified. All the (few) changes can be summed up by the following points:

* it stores the height of each node (square)
* `Grid` has a method to "paint a hill" of a given radius, around a given point
* `Node` has a new method `clone`, that is now used by `Grid.clone` to properly copy all the data contained in each `Node` object (just a helper methods to avoid weird issues, the algorithm works on a copy created with `Grid.clone` and it used to discard all heights)

For the rest, the library is pretty much unchanged and compatible, and you can refer to the [README.md of the original repo](https://github.com/qiao/PathFinding.js) if you want more information on how to use the library.

Development
------------

Layout:

    .
    |-- lib          # browser distribution
    |-- src          # source code (algorithms only)
    |-- test         # test scripts
    |-- utils        # build scripts
    `-- visual       # visualization

You will need to install `node.js` and use `npm` to install the dependencies: 

    npm install -d 

To build the browser distribution 
(It will use [node-browserify](https://github.com/substack/node-browserify) to generate a browser distribution,
and use [UglifyJS](https://github.com/mishoo/UglifyJS) to compress):

    make

To run the tests
(algorithms only, not including the visualization) with
[mocha](http://visionmedia.github.com/mocha/) and [should.js](https://github.com/visionmedia/should.js) 

    make test

Original [Pathfinding.js](https://github.com/qiao/PathFinding.js) License
-------

[MIT License](http://www.opensource.org/licenses/mit-license.php)

&copy; 2011-2012 Xueqiao Xu &lt;xueqiaoxu@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
