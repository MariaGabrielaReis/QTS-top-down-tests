class BankSlip {
  stubCalculateAmountToPay(
    value: number,
    expirationDate: Date,
    paymentDate: Date,
  ) {
    return value;
  }
}

const bankSlip = new BankSlip();

export { bankSlip };
