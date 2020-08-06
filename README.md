## Steps taken to do Node

### First things first
* Go into your terminal and make sure you download nodee by using node install or if you want to check if it's already installed then use ``` node -v ``` to double check.

* Create a .gitignore folder and input node_modules inside this file, so it doesn't upload npm packages to github.

### Creat a file called Node Module
* Once node has been installed, create a file called ```myModule.js``` to get started. Run 

```npm init -y```

* Afterwards, you'll create index.js and connect it to your ```myModule.js``` folder by saying ```const myModule = require('./myModule.js)```and you'll start running 

```node index.js```

when you want to see your code in your terminal. 


### One Liner Jokes

I used this npm package and it was real simple to use. You start by installing it ```npm install one-liner-joke --save```

then you want to connect it to your index.js folder and to do that you input
```let oneLinerJoke = require('one-liner-joke');```
and start looking at their jokes but just using console.log

``` let getRandomJoke = oneLinerJoke.getRandomJoke(); console.log(getRandomJoke); ```

Input in your terminal ```index.js``` and you'll see all types of jokes they included in this package.


--------------------------------------------------------------------------------------------------
# Steps taken to start a NODE/EXPRESS APP

## Step 1:

When creating a new project, you want to initialize node by using ```npm init```.
Once that is done, you want to add a .gitignore in your project and input node_modules/. This will block any important node modules not to be uploaded to github and other people won't be able to see it. 

## Stept 2: 

After step 1 is done, you want to do ```npm i express``` and ```npm install express-ejs-layouts```. This creates modules/packages and you will see them in your folder. 

## Setting up Express

You have to declare express and initialize it as well by:

```javascript
const express = require('express')
const app = express()
```

and you want to setup an app.listen to listen to the port

```javascript
app.listen(8000, () => {
  console.log("Server up and listening on port 8000")
})
```

# Express router - messages or files will show up in port whn a specific path is hit 

```javascript

app.get('/', function(req, res) {
  res.send("You are on the home page")
})
```

## EJS Layout 

You can use this content with javascript mixed HTML files using the ejs extension (.ejs)

```javascript
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('home');
});
```

## Express Controllers

You use this when you have mutiple files and you want to call them out without using so many app.get('/); You'd use router.get because you'll export those specific files. 

```javascript
var express = require('express');
var router = express.Router();

router.get('/animals', function(req, res) {
  res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;
});
```