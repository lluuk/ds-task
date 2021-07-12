import { validateEmail, validatePhoneNumber } from "@/utils/utils";

describe("ValidateEmail", () => {
  it("should return false if value is not correct email format", async () => {
    const result = validateEmail("111");
    expect(result).toBeFalsy();
  });

  it("should return true if value is correct email", async () => {
    const result = validateEmail("test@test.pl");
    expect(result).toBeTruthy();
  });
});

describe("ValidatePhoneNumber", () => {
  it("should return false if is not 9 digits in length", async () => {
    const result = validatePhoneNumber("111");
    expect(result).toBeFalsy();
  });

  it("should return false if is 9 non-numeric in length", async () => {
    const result = validatePhoneNumber("111aaabbb");
    expect(result).toBeFalsy();
  });

  it("should return true if is 9 digits in length", async () => {
    const result = validatePhoneNumber("111222333");
    expect(result).toBeTruthy();
  });
});
