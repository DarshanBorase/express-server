const printEquilateralPattern = (noOfRows: number): void => {
  if (noOfRows >= 2 && noOfRows <= 9) {
    let pattern = '';
    for (let i: number = 1; i <= noOfRows; i++) {
        for (let j: number = noOfRows; j > i; j--) {
          pattern += '';
        }
        for (let k: number = 0; k < i * 2 - 1; k++) {
          pattern += '*';
        }
        pattern += '/n';
    }
    console.log(pattern);
  } else
  console.log('No of rows should not be greater than 9 and smaller than 2');
};
export default printEquilateralPattern;

