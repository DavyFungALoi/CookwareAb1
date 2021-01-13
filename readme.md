# This is the AB testing library for Direct Impact V01.02

# Things you to do to use this template
- npm install
- fill the .env to the name of the experiment you fancy, will be added to the body class and used in all the css you write, also will trigger hiding the content while the experiment is loading.

Note that the env file is meant to contain the experiment name atm so it is uploaded to the repo. Secrets will be added to the repo (which may not be nice in some scenarios)

Ready to go! Do

- npm run start (runs in development mode, inyecting styles and so on)
- npm run build to get production ready code (to copy paste in tag manager)

## Bugfixes in v 1.02

- Cross platform env variables should work now. Inline env setting is done via the cross-env package. TESTING ON  WINDOWS SHOULD WORK!
## How to take it to production?

- You need to inyect this script in your browser, I use scriptly, inyects it on pageview (not loaded yet) on the domain you want.

If you plan to use scriptly, I can share the script, just follow [this link](https://scripty.abhisheksatre.com/#/share/script_1604061759579)

```javascript
s = document.createElement("script");
s.src = "http://localhost:10001/main.js";
document.getElementsByTagName("body")[0].appendChild(s);
```



# PENDING BUGS

- Less watcher doesn't work properly on less IMPORTS, so if you split the less, the only one that will automatically trigger reload will be the entry point (index.less)
  [Provisional fix would be to manually import it in test js on development only via a js conditionaly run component. NOT NICE]

- When using ES6 arrow functions mixed with Jquery such as 
``` javascript 

$.(".selector").each(()=>{
    console.log("this",this)
}) 
```

This is not properly scoped on compilation, so better use the less fancy but reliable 


``` javascript 

$.(".selector").each(function(){
    console.log("this",this)
}) 

```