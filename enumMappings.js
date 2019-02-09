const reverseObj = obj => {
  const newObj = {}
  Object.keys(obj).map(k => {
    newObj[obj[k]] = k
    return null
  })
  return newObj
}

const GenderStringToEnumObj = {
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

const GenderEnumToStringObj = reverseObj(GenderStringToEnumObj)
export const GenderList = Object.keys(GenderStringToEnumObj)

const EthnicityStringToEnumObj = {
  Caucasian: 'CAUCASIAN',
  'Black/African American': 'BLACK',
  'Hispanic/Latino': 'HISPANIC',
  'East Asian': 'EASTASIAN',
  'South Asian': 'SOUTHASIAN',
  'American Indian/Alaska Native': 'AMERICANINDIAN',
  'Native Hawaiian/Other Pacific Islander': 'PACIFICISLANDER'
}

const EthnicityEnumToStringObj = reverseObj(EthnicityStringToEnumObj)

const LanguageStringToEnumObj = {
  English: 'ENGLISH',
  Spanish: 'SPANISH',
  Chinese: 'CHINESE'
}

const LanguageEnumToStringObj = reverseObj(LanguageStringToEnumObj)

const BodyTypeStringToEnumObj = {
  Slender: 'SLENDER',
  Athletic: 'ATHLETIC',
  Average: 'AVERAGE',
  'Full-figured': 'FULLFIGURED'
}

const BodyTypeEnumToStringObj = reverseObj(BodyTypeStringToEnumObj)

const InterestStringToEnumObj = {
  boating: 'BOATING',
  skiing: 'SKIING',
  computers: 'COMPUTERS',
  sports: 'SPORTS',
  gardening: 'GARDENING'
}

const InterestEnumToStringObj = reverseObj(InterestStringToEnumObj)

const mapNameToObj = name => {
  switch (name) {
    case 'gender':
      return {
        strToEnm: GenderStringToEnumObj,
        enmToStr: GenderEnumToStringObj
      }
    case 'ethnicity':
      return {
        strToEnm: EthnicityStringToEnumObj,
        enmToStr: EthnicityEnumToStringObj
      }
    case 'languages':
      return {
        strToEnm: LanguageStringToEnumObj,
        enmToStr: LanguageEnumToStringObj
      }
    case 'bodyType':
      return {
        strToEnm: BodyTypeStringToEnumObj,
        enmToStr: BodyTypeEnumToStringObj
      }
    case 'interests':
      return {
        strToEnm: InterestStringToEnumObj,
        enmToStr: InterestEnumToStringObj
      }
    default:
      return null
  }
}

export const enumToString = (name, enm) => {
  const obj = mapNameToObj(name).enmToStr
  return obj[enm]
}

export const stringToEnum = (name, str) => {
  const obj = mapNameToObj(name).strToEnm
  return obj[str]
}
