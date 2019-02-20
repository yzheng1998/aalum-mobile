export const inchesToString = inches =>
  `${Math.floor(inches / 12)}'${inches % 12}"`

export const stringToInches = str => {
  const vals = str.split("'")
  return 12 * vals[0] + vals[1]
}
