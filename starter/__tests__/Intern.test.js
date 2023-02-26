const Intern = require("../lib/Intern");


describe("Intern class", () => {
  describe("Constructor", () => {
    it("should set school property via constructor", () => {
      const testValue = "UCLA";
      const e = new Intern("Foo", 1, "test@test.com", testValue);
      expect(e.school).toBe(testValue);
    });
  });

  describe("getRole method", () => {
    it("should return Intern", () => {
      const testValue = "Intern";
      const e = new Intern("Foo", 1, "test@test.com", "UCLA");
      expect(e.getRole()).toBe(testValue);
    });
  });

  describe("getSchool method", () => {
    it("should get school via getSchool()", () => {
      const testValue = "UCLA";
      const e = new Intern("Foo", 1, "test@test.com", testValue);
      expect(e.getSchool()).toBe(testValue);
    });
  });
});

