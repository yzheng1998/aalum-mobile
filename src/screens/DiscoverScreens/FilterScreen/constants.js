import {
  languageList,
  professionList,
  stringToEnum
} from '../../../../enumMappings'

export const distanceSliderInfo = {
  title: 'DISTANCE',
  min: 1,
  minText: '1 mile',
  max: 100,
  maxText: '100+ miles',
  step: 1,
  suffix: 'mile'
}

export const ageSliderInfo = {
  title: 'AGE',
  min: 18,
  minText: '18',
  max: 60,
  maxText: '60+',
  step: 1,
  suffix: ''
}

export const heightSliderInfo = {
  title: 'HEIGHT',
  min: 0,
  max: 108,
  step: 1,
  suffix: ''
}

export const languageListInfo = {
  key: 'langauges',
  title: 'LANGUAGES',
  text: 'Search Languages...',
  items: languageList.map(l => ({ id: stringToEnum(l), name: l }))
}

export const professionListInfo = {
  key: 'professions',
  title: 'PROFESSIONS',
  text: 'Search Professions...',
  items: professionList.map(p => ({ id: stringToEnum(p), name: p }))
}
