import { utils } from "./utils";

class BankSlip {
  calculateAmountToPay(value: number, expirationDate: Date, paymentDate: Date) {
    if (expirationDate < paymentDate) {
      const delayPeriod = utils.stubPeriodInMonths(expirationDate, paymentDate);
      return value + value * (1 / 100) * delayPeriod;
    }
    return value;
  }
}

const bankSlip = new BankSlip();

export { bankSlip };
