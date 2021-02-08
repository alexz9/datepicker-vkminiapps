import isValidDate from '../isValidDate';

describe("isValidDate", ()=>{
  test("should be truthy", ()=>{
    expect(isValidDate(new Date())).toBeTruthy();
    expect(isValidDate(123455)).toBeTruthy();
    expect(isValidDate(0)).toBeTruthy();
    expect(isValidDate("12.02.2021")).toBeTruthy();
  });

  test("should be falsy", ()=>{
    expect(isValidDate("qwe")).toBeFalsy();
    expect(isValidDate("12.02")).toBeFalsy();
    expect(isValidDate(NaN)).toBeFalsy();
    expect(isValidDate({})).toBeFalsy();
    expect(isValidDate([])).toBeFalsy();
  });
});