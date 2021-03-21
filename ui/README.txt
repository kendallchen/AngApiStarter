
Be sure to install angular cli version below locally:
    npm install @angular/cli@11.2.5

if you get the error when running "ng serve":
    Cannot find module '@angular-devkit/build-angular/package.json'
just run:
    npm install --save-dev @angular-devkit/build-angular

if you get the error when running "ng serve":
    Cannot find module 'typescript'
just run: 
    npm install typescript

if you get the error when running "ng serve":
    Cannot find module '@angular/compiler-cli'
just run:
    npm install --save-dev @angular/compiler-cli

----------- upgrade commands -------------------
npm outdated
npm update @angular/material @angular/cdk
npm install @angular/material@latest
npm install jasmine-marbles@latest 