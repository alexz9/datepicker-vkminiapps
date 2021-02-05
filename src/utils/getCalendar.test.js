import getCalendar from './getCalendar';

describe("getCalendar", ()=>{
  test("should be a valid object structure", ()=>{
    expect(getCalendar()).toEqual(expect.any(Object));
    expect(getCalendar()).toEqual(expect.objectContaining({
      days: expect.any(Array),
      month: expect.any(Number),
      year: expect.any(Number),
    }));
  });
  test("should be returned valid month number", ()=>{
    expect(getCalendar(0).month).toBe(0);
    expect(getCalendar(1).month).toBe(1);
    expect(getCalendar(-1).month).toBe(11);
    expect(getCalendar(14).month).toBe(2);
  });
  test("should be valid days count in month", ()=>{
    const date = new Date();
    const days_1 = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const days_2 = new Date(date.getFullYear(), 2, 0).getDate();

    expect(getCalendar().days.filter(item=>item.value).length).toBe(days_1);
    expect(getCalendar(1).days.filter(item=>item.value).length).toBe(days_2);
  });

  test("should be valid begin in week", ()=>{
    const date = new Date();
    const day_1 = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const day_2 = new Date(date.getFullYear(), 5, 1).getDay();
  
    expect(getCalendar().days.filter(item=>!item.value).length + 1).toBe(day_1);
    expect(getCalendar(5).days.filter(item=>!item.value).length + 1).toBe(day_2);
  });

  test("should be valid today number", ()=>{
    const today = new Date().getDate();
    
    expect(getCalendar().days.filter(item=>item.isToday)[0].value).toBe(today);
  });
});