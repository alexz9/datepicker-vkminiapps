import toDate from './toDate';

describe("toDate", ()=>{
  test("should be instanceof Date", ()=>{
    expect(toDate(new Date())).toBeInstanceOf(Date);
    expect(toDate(123455)).toBeInstanceOf(Date);
    expect(toDate(0)).toBeInstanceOf(Date);
    expect(toDate("12.02.2021")).toBeInstanceOf(Date);
    expect(toDate("qwe")).toBeInstanceOf(Date);
    expect(toDate("12.02")).toBeInstanceOf(Date);
    expect(toDate(NaN)).toBeInstanceOf(Date);
    expect(toDate({})).toBeInstanceOf(Date);
    expect(toDate([])).toBeInstanceOf(Date);
  });

  test("should be a NaN", ()=>{
    expect(toDate("qwe").getTime()).toBeNaN();
    expect(toDate("12.02").getTime()).toBeNaN();
    expect(toDate(NaN).getTime()).toBeNaN();
    expect(toDate({}).getTime()).toBeNaN();
    expect(toDate([]).getTime()).toBeNaN();
  });

  test("should be correct Date", ()=>{
    const now = new Date();
    expect(toDate(now)).toEqual(now);
    expect(toDate(123455)).toEqual(new Date(123455));
    expect(toDate(0)).toEqual(new Date(0));
    expect(toDate("12.02.2021")).toEqual(new Date(2021, 1, 12));
  });
});