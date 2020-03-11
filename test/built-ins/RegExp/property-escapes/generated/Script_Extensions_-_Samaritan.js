// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Samaritan`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000800, 0x00082D],
    [0x000830, 0x00083E]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Samaritan}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Samaritan}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Samr}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Samr}"
);
testPropertyEscapes(
  /^\p{scx=Samaritan}+$/u,
  matchSymbols,
  "\\p{scx=Samaritan}"
);
testPropertyEscapes(
  /^\p{scx=Samr}+$/u,
  matchSymbols,
  "\\p{scx=Samr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0007FF],
    [0x00082E, 0x00082F],
    [0x00083F, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Samaritan}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Samaritan}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Samr}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Samr}"
);
testPropertyEscapes(
  /^\P{scx=Samaritan}+$/u,
  nonMatchSymbols,
  "\\P{scx=Samaritan}"
);
testPropertyEscapes(
  /^\P{scx=Samr}+$/u,
  nonMatchSymbols,
  "\\P{scx=Samr}"
);
