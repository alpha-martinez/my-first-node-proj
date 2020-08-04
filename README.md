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


