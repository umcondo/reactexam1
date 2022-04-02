const OddEvenResult = ({ count }) => {
  //   console.log(count);
  //   console.log("rendering");
  return <> {count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;
