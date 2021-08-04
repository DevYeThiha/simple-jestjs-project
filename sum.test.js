const sum = require("./sum")

describe("example tests", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    })
    
    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    })
})

describe("truthy or falsey", () => {
    it("null", () => {
        const n = "";
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        // expect(n).toBeNull();
        // expect(n).not.toBeUndefined();
    })
})

describe("number", () => {
    it("two plus two",() => {
        const value = 2 +2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    })

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.2999999);
    })
})

describe("strings",() => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/);
    })
});

describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]
    expect(shoppingLists).toContain('milk');
})

function compileAndriodCode(){
    throw new Error("you are using the wrong JDK")
}

describe("exceptions", () => {
    it("compiling andriod goes as expected", () => {
        expect(compileAndriodCode).toThrow(Error);
        expect(compileAndriodCode).toThrow("you are using the wrong JDK");
    })
})