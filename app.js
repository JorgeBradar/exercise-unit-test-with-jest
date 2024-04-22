const sum = (a,b) => {
    return a + b
}
    const fromEuroToDollar = function(valueInEuro) {
        let valueInDollar = valueInEuro * 1.07;
        return valueInDollar;
 }

 module.exports = { sum, fromEuroToDollar }


 const fromDollarToYen  = function(valueInDollar) {
    let valueInYen = valueInDollar * 146.26;
     return valueInYen;
 }

 module.exports = { sum, fromDollarToYen  }


const fromYenToPound  = function(valueInYen) {
    let valueInPound = valueInYen * 0.00556;
     return valueInPound;
}


module.exports = { sum, fromYenToPound  }
