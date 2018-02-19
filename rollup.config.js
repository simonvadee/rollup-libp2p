const babel = require("rollup-plugin-babel");
const babelrc = require("babelrc-rollup").default;
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
const json = require("rollup-plugin-json");
const builtins = require("rollup-plugin-node-builtins");
const globals = require("rollup-plugin-node-globals");

const config = {
  sourcemap: true,
  input: "index.js",
  name: "TestLibP2P"
};

config.plugins = [
  json(),
  builtins(),
  commonjs(),
  globals(),
  babel(
    Object.assign(
      {
        include: [
          "node_modules/libp2p-crypto/**",
          "node_modules/libp2p-crypto-secp256k1/**",
          "node_modules/asn1.js/**",
          "node_modules/pem-jwk/**",
          "node_modules/multihashing-async/**",
          "node_modules/multihashes/**",
          "src/**"
        ]
      },
      babelrc()
    )
  ),
  nodeResolve({
    browser: true,
    preferBuiltins: true
  })
];

config.output = {
  format: "umd",
  file: "dist/index.js"
};

module.exports = config;
