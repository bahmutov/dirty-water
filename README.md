# dirty-water v0.0.1

> Measures JavaScript "dirt" in HTML / EJS / AngularJs template files

**Why?**

Because one should not mix JavaScript with HTML. Or CSS with HTML.
Or generate HTML in JavaScript. Or drink dirty water.

Also, we are in Boston, so [Dirty Water - The Standells](https://www.youtube.com/watch?v=kqKHqWaTv9g)

### installation

Requires [nodejs](http://nodejs.org/)

```sh
npm install -g dirty-water
```



### use

```sh
dirty-water *.ejs

// prints
dirty-water - Measures JavaScript "dirt" in HTML / EJS / AngularJs template files
sample.ejs 13 EJS lines 3 js lines
sample2.ejs 14 EJS lines 8 js lines
```



### Small print

Author: Gleb Bahmutov Copyright &copy; 2013

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet / open issue on Github



## History


0.0.1 / 2013-12-04
==================

  * accepting multiple files / wildcards
  * started testing
  * working on EJS parsing

0.0.0 / 2013-12-04
==================

  * better complexity json
  * jshinting gruntfile
  * added pre-commit check
  * grunt passing


