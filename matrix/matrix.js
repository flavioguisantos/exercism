export class Matrix {
  constructor(str) {
    this.rows = str.split("\n").map((p) => {
      let test = p.split(" ");
      let result = [];

      for (let i = 0; i < test.length; i++) {
        result.push(parseInt(test[i]));
      }
      return result;
    });

    this.columns = [];
    for (let i = 0; i < this.rows[0].length; i++) {
      let columnList = [];
      for (let j = 0; j < this.rows.length; j++) {
        columnList.push(this.rows[j][i]);
      }
      this.columns.push(columnList);
    }
  }
}
