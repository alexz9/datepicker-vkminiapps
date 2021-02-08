import getMonthForCalendar from '../getMonthForCalendar';

describe("getMonthForCalendar", ()=>{
  let nowMonth, nowYear;
  beforeEach(()=>{
    nowMonth = new Date().getMonth();
    nowYear = new Date().getFullYear();
  })

  test("should be a number", ()=>{
    expect(getMonthForCalendar(null, null, null)).toEqual(expect.any(Number));
    expect(getMonthForCalendar(new Date(), new Date(), true)).toEqual(expect.any(Number));
  });

  test("should be greater then now month", ()=>{
    expect(getMonthForCalendar(new Date(nowYear, nowMonth + 1), new Date(nowYear, nowMonth + 2), true)).toBeGreaterThan(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth + 12), new Date(nowYear, nowMonth + 14), true)).toBeGreaterThan(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth + 1))).toBeGreaterThan(nowMonth);
  });

  test("should be less then now month", ()=>{
    expect(getMonthForCalendar(new Date(nowYear, nowMonth - 2), new Date(nowYear, nowMonth - 1), true)).toBeLessThan(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth - 1))).toBeLessThan(nowMonth);
  });

  test("should be equally now month", ()=>{
    expect(getMonthForCalendar(new Date(nowYear, nowMonth - 1), new Date(nowYear, nowMonth), true)).toBe(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth - 1), new Date(nowYear, nowMonth + 1), true)).toBe(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth), new Date(nowYear, nowMonth), true)).toBe(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth), new Date(nowYear, nowMonth + 1), true)).toBe(nowMonth);
    expect(getMonthForCalendar(new Date(nowYear, nowMonth))).toBe(nowMonth);
  });
});