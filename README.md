# node-ts-template
a boilerplate for a nodejs project with typescript, esbuild and mocha

Derived from following sources:

Nodejs + Typescript: https://fireship.io/lessons/typescript-nodejs-setup/
Bundle nodejs with esbuild: https://esbuild.github.io/getting-started/#your-first-bundle
Mocha test: https://www.testim.io/blog/mocha-for-typescript-testing/ + https://www.npmjs.com/package/ts-mocha

### Usage

`npm run build` : clear the dist folder with rimraf, transpile with tsc, bundle with esbuild. Will result in file `bundle.js`, which can be run with nodejs.

`npm test`: run all tests within the test folder

