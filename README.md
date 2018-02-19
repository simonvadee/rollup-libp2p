# rollup-libp2p

## Build

```
yarn
```
 or 
 ```
 npm install && npm run build
 ```
 
## Run tests

The test only imports the `libp2p-crypto library`

```
yarn test
```

## Issue

There is no build error when running rollup, but the generated file contains errors. When launching tests, the script will be
loaded in a browser (using karma) and you will see something like 
```
Uncaught TypeError: Cannot read property 'Reporter' of undefined
  at /Users/simonvadee/test-rollup-libp2p/node_modules/pem-jwk/node_modules/asn1.js/lib/asn1/base/buffer.js:2:0 <- index.js:46811
  ```
in your console. What happens is that the script attempts to instanciate a variable from a module which has not yet been instanciated.
My guess is that rollup does not handle well this kind of imports ( from `node_modules/asn1.js./lib/asn1/buffer.js`):
```
const Reporter = require('../base').Reporter;
```
when the directory structure is the following
```
lib
  asn1
    base
      buffer.js
      index.js
      reporter.js 
```

Is this a rollup issue or am I doing something wrong ?
