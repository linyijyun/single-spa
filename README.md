# single-spa
This is an example of one Vue and one React and one Angular microfrontend , and teaching to create root config application

## Install the npm packages
Navigate to the base folder(this is root-config), React-App, vue-app and angular-app folders and run the command
```js
  $ npm install
```
  
## Run the application
- Navigate to the angular-app folder and run the below command
  ```js
  $ ng serve
  ```
- Navigate to the React-App folder and run the below command
  ```js
  $ npm start
  ```
- Navigate to the vue-app folder and run the below command
  ```js
  $ npm run serve
  ```
If you have "Syntax Error: Error: No ESLint configuration found in" when you tried to npm run serve
you can see this link:
https://stackoverflow.com/questions/66215112/syntax-error-error-no-eslint-configuration-found-in-when-i-tried-to-npm-run

```js
$ npm install eslint -g -D
```
```js
$ eslint --init
```

## Final Step
- Navigate to the base folder and run the below command
  ```js
  $ npm start
  ```

In the browser open the application at http://localhost:9000
