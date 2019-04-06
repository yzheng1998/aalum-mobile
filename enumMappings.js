import _ from 'lodash'

/* 
Functions that convert between strings and enums
D stands for Dash
H stands for Hyphen
A stands for Apostrophe
S stands for Slash
8 stands for Amperstand


The way the stringToEnum and enumToString functions were 
implemented, was automized so that we have universal standardized
enums, and we don't have to hard-code every enum. The way we did that
was we would take the string, capitalize it, then replace 
special characters with symbols as above. 

Then, if we wanted to convert enums to strings, we would
replace these symbols with their character equivalent, then
take it to Title Case. This worked well for almost everything,
but some cases, such as abbreviations, would still be converted
to Title Case, so e.g. OBGYN would actually be converted
to Obgyn, which is wrong, so we added some hard-coded
special case "replaces" to accommodate that.


We sometimes had to add spaces around these special cases 
or hyphens or stuff to make sure that if "Coo" for example
was present in aother word, such as "Coordinator", it wouldn't
also be converted to "COOrdinator"

*/

export const stringToEnum = str =>
  str
    .toUpperCase()
    .replace(new RegExp(' - ', 'g'), '_D_')
    .replace(new RegExp('-', 'g'), '_H_')
    .replace(new RegExp('/', 'g'), '_S_')
    .replace(new RegExp("'", 'g'), '_A_')
    .replace(new RegExp('&', 'g'), '_8_')
    .replace(new RegExp(' ', 'g'), '_')

export const enumToString = enm => {
  if (!enm) {
    return ''
  }
  const toTitleCase = str =>
    str.toLowerCase().replace(/(?:^|[\s-/])\w/g, match => match.toUpperCase())
  return toTitleCase(
    enm
      .replace(new RegExp('_H_', 'g'), '-')
      .replace(new RegExp('_8_', 'g'), '&')
      .replace(new RegExp('_D_', 'g'), ' - ')
      .replace(new RegExp('_A_', 'g'), "'")
      .replace(new RegExp('_S_', 'g'), '/')
      .replace(new RegExp('_', 'g'), ' ')
  )
    .replace(' Of ', ' of ')
    .replace('R&d ', 'R&D ')
    .replace(' Cto', ' CTO')
    .replace('- Coo', '- COO')
    .replace(' Cmo', ' CMO')
    .replace(' Cfo', ' CFO')
    .replace(' Ceo', ' CEO')
    .replace(' Obgyn', ' OBGYN')
    .replace('/Mis', '/MIS')
    .replace('It ', 'IT ')
}

const stringListToEnumList = list => list.map(str => stringToEnum(str))

export const genderList = [
  'Woman',
  'Man',
  'Agender',
  'Trans Woman',
  'Trans Man',
  'Nonbinary',
  'Genderqueer',
  'Genderfluid',
  'Transfeminine',
  'Transmasculine'
]

export const genderEnumList = stringListToEnumList(genderList)

export const ethnicityList = [
  'Caucasian',
  'Black/African American',
  'Hispanic/Latino',
  'East Asian',
  'South Asian',
  'Southeast Asian',
  'American Indian/Alaska Native',
  'Native Hawaiian/Other Pacific Islander',
  'Middle Eastern'
]

export const ethnicityEnumList = stringListToEnumList(ethnicityList)

export const professionList = [
  'Account Executive',
  'Actor',
  'Actuary',
  'Administrator',
  'Advertising Specialist',
  'Agent/Broker',
  'Analyst',
  'Announcer/Newscaster',
  'Architect',
  'Archivist/Curator',
  'Artist-Commercial',
  'Artist-Fine',
  'Artist/Entertainer',
  'Astronomer',
  'Athlete',
  'Auditor',
  'Banker',
  'Business Development',
  'Buyer/Purchaser',
  'Chef',
  'Chemist',
  'Chiropractor',
  'Choreographer',
  'Clergy',
  'Coach',
  'Computer/Network Operator',
  'Construction/Trades Person',
  'Consultant',
  'Consultant - Healthcare',
  'Consultant - Human Resources',
  'Consultant - Management Consultant',
  'Consultant - Other',
  'Consultant - Technology',
  'Corporate Development',
  'Correctional/Probation Officer',
  'Counselor',
  'Customer Service Representative',
  'Dancer',
  'Dentist/Orthodontist',
  'Designer',
  'Detective/Investigator',
  'Dietician',
  'Diplomat',
  'Director',
  'Drafter',
  'Economist',
  'Editor',
  'Education - Administrator',
  'Education - Faculty',
  'Education - Student',
  'Educator/Trainer',
  'Elected Government Official',
  'Engineer',
  'Entertainer',
  'Entrepreneur',
  'Entrepreneur/Founder/Owner',
  'Event Planner',
  'Farmer/Rancher',
  'Finance - Accountant/Controller',
  'Finance - Analyst',
  'Finance - Commercial Banker',
  'Finance - Corporate Investment Banker',
  'Finance - Equity Research',
  'Finance - Insurance',
  'Finance - Investment Portfolio Management',
  'Finance - Investor Relations',
  'Finance - Lending',
  'Finance - Mergers & Acquisitions',
  'Finance - Other',
  'Finance - Private Client Services',
  'Finance - Private Equity',
  'Finance - Public Investment Banker',
  'Finance - Sales/Trader',
  'Finance - Treasury',
  'Finance - Venture Capitalist',
  'Firefighter',
  'Fund Developer',
  'Geologist',
  'Health Care Professional',
  'Historian',
  'Holistic Health Practitioner',
  'Homemaker',
  'Human Resources/Recruitment',
  'IT Systems/MIS',
  'Intelligence Specialist',
  'Interpreter/Translator',
  'Judge',
  'Law Enforcement - Police Officer/Sheriff',
  'Legal - Corporate Attorney',
  'Legal - Litigation Attorney',
  'Legal - Other Attorney',
  'Legal Assistant',
  'Legislative Aide',
  'Legislator',
  'Librarian',
  'Lobbyist/Activist',
  'Manufacturing',
  'Marketing - Brand/Product Management',
  'Marketing - Communications',
  'Marketing - Market Research',
  'Marketing - Other',
  'Marketing - Product Development',
  'Marketing - Public Relations',
  'Mathematician/Statistician',
  'Mediator',
  'Medical - Doctor - Anesthesiologist',
  'Medical - Doctor - Emergency Medicine',
  'Medical - Doctor - Internal Medicine',
  'Medical - Doctor - Neurologist',
  'Medical - Doctor - OBGYN',
  'Medical - Doctor - Opthamologist',
  'Medical - Doctor - Other',
  'Medical - Doctor - Pathologist',
  'Medical - Doctor - Pediatrician',
  'Medical - Doctor - Plastic Surgeon',
  'Medical - Doctor - Psychiatrist',
  'Medical - Doctor - Radiologist',
  'Medical - Doctor - Surgeon',
  'Medical - Physician Assistant',
  'Medical Technologist',
  'Mental Health Professional',
  'Meteorologist',
  'Management - Corporate Officer',
  'Management - Corporate Officer - Board Member',
  'Management - Corporate Officer - CEO',
  'Management - Corporate Officer - CFO',
  'Management - Corporate Officer - CMO',
  'Management - Corporate Officer - COO',
  'Management - Corporate Officer - CTO',
  'Management - Executive Director/General Manager',
  'Military Officer',
  'Military Personnel',
  'Ministry',
  'Musician',
  'Nurse',
  'Occupational Therapist',
  'Office Worker',
  'Operations/Production Manager',
  'Organizer',
  'Other',
  'Paralegal',
  'Pharmacist',
  'Photographer',
  'Physical Therapist',
  'Pilot/Ship Captain',
  'Planner',
  'Podiatrist',
  'Politician',
  'Producer',
  'Professor',
  'Program Coordinator',
  'Program Officer',
  'Programmer',
  'Product Manager',
  'Project Manager',
  'Publisher',
  'R&D Manager',
  'Real Estate Agent',
  'Reporter/Correspondent',
  'Researcher',
  'Retired',
  'Sales/Account Manager',
  'Scientist',
  'Social Scientist',
  'Social Worker',
  'Speech Pathologist',
  'Strategy - Planning',
  'Supply Chain Manager',
  'Systems Analyst',
  'Teacher',
  'Technical/Field Support Representative',
  'Technician',
  'Therapist',
  'Tour Guide/Operator',
  'Travel Agent',
  'Underwriter',
  'Veterinarian',
  'Vintner',
  'Volunteer',
  'Writer - Creative',
  'Writer - Technical'
]

export const professionEnumList = stringListToEnumList(professionList)

export const languageList = [
  'English',
  'Afrikaans',
  'Albanian',
  'Amharic',
  'Arabic',
  'Armenian',
  'Azerbaijani',
  'Basque',
  'Belarusian',
  'Bengali',
  'Bosnian',
  'Bulgarian',
  'Burmese',
  'Catalan',
  'Cebuano',
  'Chichewa',
  'Chinese',
  'Corsican',
  'Croatian',
  'Czech',
  'Danish',
  'Dutch',
  'Esperanto',
  'Estonian',
  'Filipino',
  'Finnish',
  'French',
  'Frisian',
  'Galician',
  'Georgian',
  'German',
  'Greek',
  'Gujarati',
  'Haitian Creole',
  'Hausa',
  'Hawaiian',
  'Hebrew',
  'Hindi',
  'Hmong',
  'Hungarian',
  'Icelandic',
  'Igbo',
  'Indonesian',
  'Irish',
  'Italian',
  'Japanese',
  'Javanese',
  'Kannada',
  'Kazakh',
  'Khmer',
  'Korean',
  'Kurdish',
  'Kyrgyz',
  'Lao',
  'Latin',
  'Latvian',
  'Lithuanian',
  'Luxembourgish',
  'Macedonian',
  'Malagasy',
  'Malay',
  'Malayalam',
  'Maltese',
  'Maori',
  'Marathi',
  'Mongolian',
  'Nepali',
  'Norwegian',
  'Pashto',
  'Persian',
  'Polish',
  'Portuguese',
  'Punjabi',
  'Romanian',
  'Russian',
  'Samoan',
  'Scots Gaelic',
  'Serbian',
  'Sesotho',
  'Shona',
  'Sindhi',
  'Sinhala',
  'Slovak',
  'Slovenian',
  'Somali',
  'Spanish',
  'Sundanese',
  'Swahili',
  'Swedish',
  'Tajik',
  'Tamil',
  'Telugu',
  'Thai',
  'Turkish',
  'Ukrainian',
  'Urdu',
  'Uzbek',
  'Vietnamese',
  'Welsh',
  'Xhosa',
  'Yiddish',
  'Yoruba',
  'Zulu'
]

export const languageEnumList = stringListToEnumList(languageList)

export const bodyTypeList = ['Slender', 'Athletic', 'Average', 'Full-figured']

export const bodyTypeEnumList = stringListToEnumList(bodyTypeList)

export const interestList = [
  'Boating',
  'Skiing',
  'Computers',
  'Sports',
  'Gardening'
]

export const interestEnumList = stringListToEnumList(interestList)

export const degreeList = [
  'Current College Student',
  'Bachelor of Arts Degree',
  'Bachelor of Science',
  "Master's Degree",
  'Doctorate',
  "Associate's Degree"
]

export const degreeEnumList = stringListToEnumList(degreeList)

const degreeAbbrStringToEnumObj = {
  Student: 'CURRENT_COLLEGE_STUDENT',
  'B.A.': 'BACHELOR_OF_ARTS_DEGREE',
  'B.S.': 'BACHELOR_OF_SCIENCE',
  "Master's": 'MASTER_A_S_DEGREE',
  Doctorate: 'DOCTORATE',
  "Associate's": 'ASSOCIATE_A_S_DEGREE'
}

const degreeAbbrEnumToStringObj = _.invert(degreeAbbrStringToEnumObj)

export const degreeAbbrList = Object.keys(degreeAbbrStringToEnumObj)

// special converters for degree abbreviations due to duplicate keys
export const degreeAbbrEnumToString = enm => degreeAbbrEnumToStringObj[enm]

export const degreeAbbrStringToEnum = enm => degreeAbbrEnumToStringObj[enm]
