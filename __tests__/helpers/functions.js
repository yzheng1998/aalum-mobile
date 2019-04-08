export const testsGenerator = (inputs, outputs) =>
  inputs.map((input, i) => ({ input, expected: outputs[i] }))
