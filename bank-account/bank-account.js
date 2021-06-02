//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.saldo = 0;
    this.contaAberta = false;
  }

  open() {
    if (this.contaAberta == true) {
      throw new ValueError();
    } else {
      this.contaAberta = true;
      this.saldo = 0;
    }
  }

  close() {
    if (this.contaAberta == false) {
      throw new ValueError();
    } else this.contaAberta = false;
    this.saldo = 0;
  }

  deposit(entrada) {
    if (this.contaAberta == false || entrada < 0) {
      throw new ValueError();
    } else {
      this.saldo += entrada;
    }
  }

  withdraw(saida) {
    if (this.contaAberta == true) {
      let result = (this.saldo -= saida);

      if (result < 0 || saida < 0) {
        throw new ValueError();
      } else {
        this.saldo = result
      }
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.contaAberta) {
      return this.saldo;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
