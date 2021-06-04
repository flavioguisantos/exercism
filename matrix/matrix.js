//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
   this.matriz
   this.result = []
   this.str = str

  }

  get rows() {

    
   this.matriz = this.str.split('\n').map((p) => {
    return p.replace(' ', '')
  })

  for (var i = 0; i < this.matriz.length; i++) {
    this.result.push([...this.matriz[i]])
  }

  }
}
