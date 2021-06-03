// //
// // This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// // convenience to get you started writing code faster.
// //

// export class BankAccount {
//   constructor() {
//     this.saldo = 0

//   }

//   open() {
//     this.saldo
//   }

//   close() {
    
//     if(!this.saldo){
//       throw new ValueError
//     }else{
//       this.accountOpen = false;
//       this.accountBallance = 0;
//     }
//   }

//   deposit(d) {

//     this.saldo += d

//   }

//   withdraw(r) {
//     this.saldo -= r
//   }

//   get balance() {
//     return this.saldo
//   }
// }

// export class ValueError extends Error {
//   constructor() {
//     super('Bank account error');
//   }
// }


export class BankAccount {
  
  constructor() {
    this.accountOpen = false;
    this.accountBallance = 0;
  }

  open() {
    if(this.accountOpen){
      throw new ValueError;
    }
    else{
      this.accountOpen = true;
      this.accountBallance = 0;
    }
  }

  close() {
    if(!this.accountOpen){
      throw new ValueError;
    }
    else{
      this.accountOpen = false;
      this.accountBallance = 0;
    }
  }

  deposit(value) {
    if(value < 0 || !this.accountOpen){
      throw new ValueError
    }
    else{
      this.accountBallance += value;
    }
  }

  withdraw(value) {
    if(value > this.accountBallance || value < 0){
      throw new ValueError
    }
    else{
      this.accountBallance -= value;
    }
  }

  get balance() {
    if(this.accountOpen){
      return this.accountBallance
    }
    else{
       throw new ValueError
    }
  }

}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  } 
}