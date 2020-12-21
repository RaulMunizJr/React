# Jest

- sum.js
```
function sum(a, b) {
  return a + b;}
module.exports = sum;
```

- sum.test.js
```
const sum = require('./sum');
test('addition: 1+2=3', () =>{
  expect(sum(1,2)).toBe(3);
});
```

### Common Matchers

- toBe
```
// toBe which uses === to test exact equality.
test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4);
});
```


- toEqual

> To check equality of the floating point numbers, use toBeCloseTo instead of toEqual. This will avoid the tiny rounding error that occurs while using toEqual
```
// toEqual which recursively checks every field of an object or array.
test('obj assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
// Can also test for opposite of a matcher using ***not.toBe***.
```

### Truthiness
- Sometimes you need to differentiate ***undefined***, ***null***, and ***false***, but in some case, no need to treat these differently.

```
// Here are the helpers that let you be explicit about what you want.

* toBeNull matches only null

* toBeUndefined matches only undefined

* toBeDefined: opposite of toBeUndefined

* toBeTruthy matches anything that an if statement treats as true

* toBeFalsy matches anything that an if statement treats as false


test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```