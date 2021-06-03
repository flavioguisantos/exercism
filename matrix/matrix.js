//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const Matrix = function (matrixString) {
  this.matrix = [];

  matrixString.split("\n").forEach((rowString) => {
    let rowList = [];
    rowString
      .split(" ")
      .forEach((character) => rowList.push(parseInt(character)));
    this.matrix.push(rowList);
  });

  this.rows = this.matrix;

  this.columns = [];
  for (let i = 0; i < this.matrix[0].length; i++) {
    let columnList = [];
    for (let j = 0; j < this.matrix.length; j++) {
      columnList.push(this.matrix[j][i]);
    }
    this.columns.push(columnList);
  }
};
