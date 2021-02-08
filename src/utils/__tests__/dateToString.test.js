import dateToString from '../dateToString';

describe("dateToString", ()=>{
  test("should be correct string", ()=>{
    expect(dateToString(new Date(2021, 2, 12))).toBe("12.03.2021");
    expect(dateToString(new Date(2021, 2, 1))).toBe("01.03.2021");
  });
});