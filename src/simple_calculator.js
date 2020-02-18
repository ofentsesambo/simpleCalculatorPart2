"use strict";

let slots = [], LAST = 0;

class Calc {
  add() {
    let sum = 0, i;
    for (i = 0; i < arguments.length; i++) {
      
      if(arguments[i] == "LAST"){
        sum += this.last()
      }

      // else if(arguments[i].includes("SLOT_")){
      //   pos = arguments[i].match(/\d+/g)
      //   sum += this.get_slot(pos)
      // }

      else
      sum += arguments[i];
    }
    slots.push(sum);
    return sum;
  }

  multiply() {
    let product = 1, i;
    for (i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }
    slots.push(product);
    return product;
  }

  last() {
    LAST = slots[slots.length - 1];
    return LAST;
  }

  set_slot(num1) {
    return slots[num1 - 1];
  }

  get_slot(num1) {
    return this.set_slot(num1);
  }
}
let calculator = new Calc();

console.log(calculator.add(1, 2));
console.log(calculator.set_slot(1));
console.log(calculator.add(7,5))

console.log(calculator.add("LAST", 3))



// console.log(calculator.add("SLOT_2", 2))
// console.log(calculator.get_slot(1));
// console.log(calculator.add(10, 20));
// console.log(calculator.set_slot(2));
// console.log(calculator.get_slot(2));
// console.log(calculator.add(100, 200));
// console.log(calculator.get_slot(1), " should be 3 ");
// console.log(calculator.get_slot(2), " should be 30");
// console.log(calculator.last(), " should be 300");
// let lastValue = calculator.last();
// console.log(calculator.add(lastValue, 10), "should be 310");

// module.exports = Calc
