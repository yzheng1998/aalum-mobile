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

const genderEnumToStringObj = _.invert(genderStringToEnumObj)
export const GenderList = Object.keys(genderStringToEnumObj)

const ethnicityStringToEnumObj = {
  Caucasian: 'CAUCASIAN',
  'Black/African American': 'BLACK',
  'Hispanic/Latino': 'HISPANIC',
  'East Asian': 'EASTASIAN',
  'South Asian': 'SOUTHASIAN',
  'American Indian/Alaska Native': 'AMERICANINDIAN',
  'Native Hawaiian/Other Pacific Islander': 'PACIFICISLANDER'
}

const ethnicityEnumToStringObj = _.invert(ethnicityStringToEnumObj)

const languageStringToEnumObj = {
  English: 'ENGLISH',
  Spanish: 'SPANISH',
  Chinese: 'CHINESE'
}

const languageEnumToStringObj = _.invert(languageStringToEnumObj)

const bodyTypeStringToEnumObj = {
  Slender: 'SLENDER',
  Athletic: 'ATHLETIC',
  Average: 'AVERAGE',
  'Full-figured': 'FULLFIGURED'
}

const bodyTypeEnumToStringObj = _.invert(bodyTypeStringToEnumObj)

const interestStringToEnumObj = {
  boating: 'BOATING',
  skiing: 'SKIING',
  computers: 'COMPUTERS',
  sports: 'SPORTS',
  gardening: 'GARDENING'
}

const interestEnumToStringObj = _.invert(interestStringToEnumObj)

// returns correct enum or string object given the name of enum type
const mapNameToObj = name => {
  switch (name) {
    case 'gender':
      return {
        strToEnm: genderStringToEnumObj,
        enmToStr: genderEnumToStringObj
      }
    case 'ethnicity':
      return {
        strToEnm: ethnicityStringToEnumObj,
        enmToStr: ethnicityEnumToStringObj
      }
    case 'languages':
      return {
        strToEnm: languageStringToEnumObj,
        enmToStr: languageEnumToStringObj
      }
    case 'bodyType':
      return {
        strToEnm: bodyTypeStringToEnumObj,
        enmToStr: bodyTypeEnumToStringObj
      }
    case 'interests':
      return {
        strToEnm: interestStringToEnumObj,
        enmToStr: interestEnumToStringObj
      }
    default:
      return null
  }
}

// converts enum to string given name of enum type and the enum
export const enumToString = (name, enm) => mapNameToObj(name).enmToStr[enm]

// converts string to enum given name of enum type and the string
export const stringToEnum = (name, str) => mapNameToObj(name).strToEnm[str]
