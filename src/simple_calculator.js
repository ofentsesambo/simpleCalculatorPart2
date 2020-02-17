"use strict"

let  arr = [];
class Calc {
    
    add() {
        var sum = 0;
        var i;
        for (i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }
        arr.push(sum)
        return sum;
      }
    
      
    multiply() {
        var product = 1;
        var i;
        for (i = 0; i < arguments.length; i++) {
          product *= arguments[i];
        }
        arr.push(product)
        return product;
      }

      last(){
          return arr[arr.length -1]
      }

      set_slot(){
        return arr[i] +1
      }

      get_slot(){
         return set_slot()

      }


}

let calculator = new Calc()


// console.log(calculator.add(3,7,8))
// console.log(calculator.multiply(5,2))
// console.log(calculator.last()*2)
// console.log(calculator.add(1,2))
// //console.log(calculator.last())

// console.log(calculator.multiply(calculator.last(),5))

console.log(calculator.set_slot(5))
console.log(calculator.get_slot(5))