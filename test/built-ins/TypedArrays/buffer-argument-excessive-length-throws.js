// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-typedarray-buffer-byteoffset-length
description: >
  If offset + newByteLength > bufferByteLength, throw a RangeError exception.
info: >
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  14. Else,
    a. Let newLength be ? ToLength(length).
    b. Let newByteLength be newLength × elementSize.
    c. If offset+newByteLength > bufferByteLength, throw a RangeError exception.
  ...
includes: [testTypedArray.js]
---*/

var buffer = new ArrayBuffer(8);

testWithTypedArrayConstructors(function(TA) {
  assert.throws(RangeError, function() {
    new TA(buffer, 0, 16);
  });
});
