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

const stringToEnumObj = {
  ...genderStringToEnumObj,
  ...ethnicityStringToEnumObj,
  ...languageStringToEnumObj,
  ...bodyTypeStringToEnumObj,
  ...interestStringToEnumObj
}

const enumToStringObj = _.invert(stringToEnumObj)

// returns correct enum or string object given the name of enum type

// converts enum to string given name of enum type and the enum
export const enumToString = enm => enumToStringObj[enm]

// converts string to enum given name of enum type and the string
export const stringToEnum = str => stringToEnumObj[str]
