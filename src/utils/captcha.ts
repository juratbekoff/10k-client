export const captchaSolver = (math_problem: string) => {
  let separate = math_problem.split(" ");

  if (separate.length !== 3) {
    console.error("Invalid mathematical expression");
    return NaN;
  }

  let [operand1, operator, operand2] = separate;

  switch (operator) {
    case "+":
      return Number(operand1) + Number(operand2);
    case "-":
      return Number(operand1) - Number(operand2);
    case "*":
      return Number(operand1) * Number(operand2);
    case "/":
      return Number(operand1) / Number(operand2);
    default:
      console.error("Invalid operator");
      return NaN;
  }
};
