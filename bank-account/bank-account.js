//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.saldo = 0
  }

  open() {
    return this.saldo
  }

  close() {

  }

  deposit(params) {
    this.saldo == params 

  }

  withdraw() {

  }

  get balance() {
    return this.saldo
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
