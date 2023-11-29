const {substitution} = require("../src/substitution.js");
const {expect} = require("chai");

describe("substitution", () => {
    it("should encode a message by using the given substitution alphabet",() => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should have all unique parameters",() => {
        const actual = substitution("You are an excellent spy", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
    it("should return false if the given alphabet isn't exactly 26 characters long",() => {
        const actual = substitution("message", "short")
    })
})