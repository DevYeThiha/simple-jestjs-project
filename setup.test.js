let animals = ['elephant', 'zebra', 'bear', 'tiger'];


// run before any test function started 
// beforeAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// })

// run every time before test function started
// beforeEach(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// })

// run every time after test function is finished
afterEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

// run after every test function if finished
// afterAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// })

describe("animals array", () => {

    // beforeEach, beforeAll, afterEach, afterAll function added in describe function only applied to test functions in that describe function
    
    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator")
    })

    it("should add animal to end of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey")
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4)
    })
})

// describe("testing something else", () => {
//     // only function skip other test functions
//     it.only("true should be truthy", () => {
//         expect(true).toBeTruthy()
//     })
// })