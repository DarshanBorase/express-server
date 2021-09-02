const printDiamondPattern = (noOfRows: number): void => {
  if (noOfRows >= 2 && noOfRows <= 9) {
    let pattern: string = '';
    for (let i = 1; i <= noOfRows; i++) {
        for (let j = noOfRows; j > i; j--) {
          pattern += '';
        }

        for (let k = 0; k < i * 2 - 1; k++) {
          pattern += '*';
        }
        pattern += '/n';
    }
    for (let i = 1; i <= noOfRows - 1; i++) {
        for (let j = 0; j < i; j++) {
          pattern += '';
        }
        for (let k = (noOfRows - i) * 2 - 1; k > 0; k--) {
          pattern += '';
        }
        pattern += '\n';
    }
    console.log(pattern);
  } else
  console.log('No of rows should not be greater than 9 and smaller than 2');
};
 export default printDiamondPattern;