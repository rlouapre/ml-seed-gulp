 ml-seed-gulp
=====================

---------------

This is an Angular.js App and is powered by [Boom Angular Generator](https://npmjs.org/package/generator-boom).  
This repository helps for getting started with AngularJS with MarkLogic REST api using the following components:  
- gulp as build system  
- eslint as JavaScript linter  
- Bootstrap 3 css (sass version)  


Installation
---------

**Documentation in progress**  

Install the Boom Generator first.

```sh
    git clone [clone-url] app
    cd app
```

Install [Boom Angular Generator](https://npmjs.org/package/generator-boom)

```sh
    npm install -g generator-boom
```

Then install all develpment dependencies

```sh
    npm start
```

Finally, fire up the server

```
    gulp
```

**Thats it!**

***Additional changes in gulp script***
- Add http proxy for MarkLogic REST api in dev mode. Update settings.marklogic.baseRestUri in ```gulpfile.js```  
- NodeJS proxy ressources [1], [2].  
- Requires node-sass 0.8.3 or above [3].  
- Requires eslint (should be automatically installed by gulp-eslint)  

[1] - https://blog.nodejitsu.com/http-proxy-middlewares/  
[2] - https://github.com/nodejitsu/node-http-proxy  
[3] - https://github.com/andrew/node-sass/releases/tag/v0.8.3  

----------

