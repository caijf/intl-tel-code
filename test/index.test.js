import intlTelCode from '../src';

describe("intlTelCode", () => {
  it("should be defined", () => {
    expect(intlTelCode).toBeDefined();
  });

  it("properties", () => {
    intlTelCode.forEach(item => {
      expect(item.code).toBeTruthy();
      expect(item.en).toBeTruthy();
      expect(item.cn).toBeTruthy();
      expect(item.py).toBeTruthy();
    })
  })
});
