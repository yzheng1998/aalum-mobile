import _ from 'lodash'

const genderStringToEnumObj = {
  Woman: 'WOMAN',
  Man: 'MAN',
  Agender: 'AGENDER',
  'Trans Woman': 'TRANSWOMAN',
  'Trans Man': 'TRANSMAN',
  Nonbinary: 'NONBINARY',
  Genderqueer: 'GENDERQUEER',
  Genderfluid: 'GENDERFLUID',
  Transfeminine: 'TRANSFEMININE',
  Transmasculine: 'TRANSMASCULINE'
}

export const genderList = Object.keys(genderStringToEnumObj)

const ethnicityStringToEnumObj = {
  Caucasian: 'CAUCASIAN',
  'Black/African American': 'BLACK',
  'Hispanic/Latino': 'HISPANIC',
  'East Asian': 'EASTASIAN',
  'South Asian': 'SOUTHASIAN',
  'American Indian/Alaska Native': 'AMERICANINDIAN',
  'Native Hawaiian/Other Pacific Islander': 'PACIFICISLANDER'
}

export const ethnicityList = Object.keys(ethnicityStringToEnumObj)

const languageStringToEnumObj = {
  English: 'ENGLISH',
  Spanish: 'SPANISH',
  Chinese: 'CHINESE'
}

export const languageList = Object.keys(languageStringToEnumObj)

const bodyTypeStringToEnumObj = {
  Slender: 'SLENDER',
  Athletic: 'ATHLETIC',
  Average: 'AVERAGE',
  'Full-figured': 'FULLFIGURED'
}

export const bodyTypeList = Object.keys(bodyTypeStringToEnumObj)

const interestStringToEnumObj = {
  boating: 'BOATING',
  skiing: 'SKIING',
  computers: 'COMPUTERS',
  sports: 'SPORTS',
  gardening: 'GARDENING'
}

export const interestList = Object.keys(interestStringToEnumObj)

// merges all individual objects into one object

const degreeFullStringToEnumObj = {
  'Current College Student': 'CURRENT',
  "Bachelor's of Arts Degree": 'BACHLORSART',
  "Bachelor's of Science": 'BACHLORSSCIENCE',
  "Master's Degree": 'MASTERS',
  Doctorate: 'DOCTORATE',
  "Associate's Degree": 'ASSOCIATES'
}

export const degreeFullList = Object.keys(degreeFullStringToEnumObj)

const degreeAbbrStringToEnumObj = {
  Current: 'CURRENT',
  'B.A.': 'BACHLORSART',
  'B.S.': 'BACHLORSSCIENCE',
  "Master's": 'MASTERS',
  Doctorate: 'DOCTORATE',
  "Associate's": 'ASSOCIATES'
}

export const degreeAbbrList = Object.keys(degreeAbbrStringToEnumObj)

const professionStringToEnumObj = {
  Doctor: 'DOCTOR',
  Lawyer: 'LAWYER',
  Engineer: 'ENGINEER',
  Banker: 'BANKER'
}

export const professionList = Object.keys(professionStringToEnumObj)

const stringToEnumObj = {
  ...genderStringToEnumObj,
  ...ethnicityStringToEnumObj,
  ...languageStringToEnumObj,
  ...bodyTypeStringToEnumObj,
  ...interestStringToEnumObj,
  ...degreeFullStringToEnumObj,
  ...degreeAbbrStringToEnumObj,
  ...professionStringToEnumObj
}

// creates inversion of stringToEnumObj to make an enumToString Obj
const enumToStringObj = _.invert(stringToEnumObj)

// converts enum to string given name of enum type and the enum
export const enumToString = enm => enumToStringObj[enm]

// converts string to enum given name of enum type and the string
export const stringToEnum = str => stringToEnumObj[str]
