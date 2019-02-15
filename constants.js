export const buttonRadius = { top: 5, left: 5, bottom: 5, right: 5 }

export const inchesToString = inches =>
  `${Math.floor(inches / 12)}'${inches % 12}"`

export const stringToInches = str => {
  const vals = str.split("'")
  return 12 * vals[0] + vals[1]
}
