"use strict"
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.tolocalestring
description: Array.prototype.toLocaleString called with primitive element in getter
info: |
  22.1.3.26 Array.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )

  ...
  10. Else
    a. Let R be ToString(Invoke(firstElement, "toLocaleString")).
    b. ReturnIfAbrupt(R).
  ...
  12.
    ...
    e. Else
      i.  Let R be ToString(Invoke(nextElement, "toLocaleString")).
      ii. ReturnIfAbrupt(R).
es6id: 22.1.3.26
flags: [onlyStrict]
---*/

var listSeparator = ["", ""].toLocaleString();

Object.defineProperty(Boolean.prototype, "toString", {
  get: function() {
    var v = typeof this;
    return function() {
      return v;
    };
  }
});

assert.sameValue([true, false].toLocaleString(), ("boolean" + listSeparator + "boolean"));
