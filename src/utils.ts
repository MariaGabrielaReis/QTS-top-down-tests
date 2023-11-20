class Utils {
  stringToDate(date: string) {
    const year = Number(date.split("/")[2]);
    const month = Number(date.split("/")[1]);
    const day = Number(date.split("/")[0]);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
    const timeZone = -3;
    return new Date(year, month - 1, day, timeZone);
  }

  stubPeriodInMonths(initialDate: Date, finalDate: Date) {
    return 0;
  }
}

const utils = new Utils();

export { utils };
