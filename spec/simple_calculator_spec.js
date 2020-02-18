let Calc = require("../src/simple_calculator.js").default
// let lator = new Calc()
// lator.add(0,0)

describe("add function", function(){
    it("adds two numbers and returns the sum", function(){
        expect(Calc.add(0,0)).toBe(0)
    })

    it("adds two negative numbers and returns the sum", function(){
        expect(Calc.add(-1,-1)).toBe(-2)
    })

    it("adds two numbers and returns the sum", function(){
        expect(Calc.add(4,5)).toBe(9)
    })

    it("adds multiple numbers and returns the sum", function(){
        expect(Calc.add(1,2,3,4)).toBe(10)
    })
})

describe("multiply function", function(){
    it("multiply two numbers and returns the product", function(){
        expect(Calc.multiply(1,2)).toBe(2)
    })

    it("multiply multiple numbers and returns the product", function(){
        expect(Calc.multiply(1,2,3,4)).toBe(24)
    })

    it("multiply negative numbers and returns the product", function(){
         expect(Calc.multiply(-1,-1)).toBe(1)
    })
})

// describe("last function ", function(){
//     it("it should return the last results")
//     expect(calculator.last().toBe(1))
// })

// describe("set slot function", function(){
//     it("it should allocate a memory slot to the results")
//     expect(calculator.set_slot().toBe())
// })

// describe("get slot function", function(){
//     it("it should get the value from the memory slot")
//     expect(calculator.get_slot().toBe())
// })