const printEquilateralPattern = (no_of_rows) => {
    if (no_of_rows.length < 1 || no_of_rows.length > 1) return console.log("Invalid argument") ;
    if (no_of_rows[0] >= 2 && no_of_rows[0] <= 9) {
      let string = "";
      // equilateral pyramid
      for (let i = 1; i <= no_of_rows[0]; i++) {
          // printing spaces
          for (let j = no_of_rows; j > i; j--) {
            string += " ";
          }
          
          // printing star
          for (let k = 0; k < i * 2 - 1; k++) {
            string += "*";
          }
          string += "\n";
      }
      return string;
    }else
    console.log("No of rows should not be greater than 9 and smaller than 2");
  }
  console.log(printEquilateralPattern(process.argv.splice("2")));