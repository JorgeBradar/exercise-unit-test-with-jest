test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
        expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
 })

test("One dollar should be 146.26 yen", function() {

     const { fromDollarToYen } = require('./app.js');

     const yen = fromDollarToYen(3.5);

     const expected = 3.5 * 146.26; 
       expect(fromDollarToYen(3.5)).toBe(511.90999999999997);
 })

test("One yen should be 0.00556 pounds", function() {

    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5);
    
    const expected = 3.5 * 0.00556; 
             expect(fromYenToPound(3.5)).toBe(0.019459999999999998); 
})
