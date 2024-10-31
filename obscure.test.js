const obscureCreditCard = require("./CreditCard"); // Import the function (we’ll create it later)

describe("Credit Card Obfuscation", () => {
  test("Obscures all but last 4 digits for a valid 16-digit credit card", () => {
    expect(obscureCreditCard("1234567812345678")).toBe("************5678");
  });

  test("Obscures all but last 4 digits for a valid 12-digit credit card", () => {
    expect(obscureCreditCard("123456781234")).toBe("********1234");
  });

  test("Returns 'Invalid Credit Card' for a 10-digit input", () => {
    expect(obscureCreditCard("1234567890")).toBe("Invalid Credit Card");
  });

  test("Returns 'Invalid Credit Card' for a 17-digit input", () => {
    expect(obscureCreditCard("12345678123456789")).toBe("Invalid Credit Card");
  });
});
