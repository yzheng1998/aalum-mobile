import {
  genderList,
  ethnicityList,
  professionList,
  languageList,
  interestList,
  degreeList
} from '../../enumMappings'

export const strings = genderList.concat(
  ethnicityList,
  professionList,
  languageList,
  interestList,
  degreeList
)

export const enums = [
  'WOMAN',
  'MAN',
  'AGENDER',
  'TRANS_WOMAN',
  'TRANS_MAN',
  'NONBINARY',
  'GENDERQUEER',
  'GENDERFLUID',
  'TRANSFEMININE',
  'TRANSMASCULINE',
  'CAUCASIAN',
  'BLACK_S_AFRICAN_AMERICAN',
  'HISPANIC_S_LATINO',
  'EAST_ASIAN',
  'SOUTH_ASIAN',
  'SOUTHEAST_ASIAN',
  'AMERICAN_INDIAN_S_ALASKA_NATIVE',
  'NATIVE_HAWAIIAN_S_OTHER_PACIFIC_ISLANDER',
  'MIDDLE_EASTERN',
  'ACCOUNT_EXECUTIVE',
  'ACTOR',
  'ACTUARY',
  'ADMINISTRATOR',
  'ADVERTISING_SPECIALIST',
  'AGENT_S_BROKER',
  'ANALYST',
  'ANNOUNCER_S_NEWSCASTER',
  'ARCHITECT',
  'ARCHIVIST_S_CURATOR',
  'ARTIST_H_COMMERCIAL',
  'ARTIST_H_FINE',
  'ARTIST_S_ENTERTAINER',
  'ASTRONOMER',
  'ATHLETE',
  'AUDITOR',
  'BANKER',
  'BUSINESS_DEVELOPMENT',
  'BUYER_S_PURCHASER',
  'CHEF',
  'CHEMIST',
  'CHIROPRACTOR',
  'CHOREOGRAPHER',
  'CLERGY',
  'COACH',
  'COMPUTER_S_NETWORK_OPERATOR',
  'CONSTRUCTION_S_TRADES_PERSON',
  'CONSULTANT',
  'CONSULTANT_D_HEALTHCARE',
  'CONSULTANT_D_HUMAN_RESOURCES',
  'CONSULTANT_D_MANAGEMENT_CONSULTANT',
  'CONSULTANT_D_OTHER',
  'CONSULTANT_D_TECHNOLOGY',
  'CORPORATE_DEVELOPMENT',
  'CORRECTIONAL_S_PROBATION_OFFICER',
  'COUNSELOR',
  'CUSTOMER_SERVICE_REPRESENTATIVE',
  'DANCER',
  'DENTIST_S_ORTHODONTIST',
  'DESIGNER',
  'DETECTIVE_S_INVESTIGATOR',
  'DIETICIAN',
  'DIPLOMAT',
  'DIRECTOR',
  'DRAFTER',
  'ECONOMIST',
  'EDITOR',
  'EDUCATION_D_ADMINISTRATOR',
  'EDUCATION_D_FACULTY',
  'EDUCATION_D_STUDENT',
  'EDUCATOR_S_TRAINER',
  'ELECTED_GOVERNMENT_OFFICIAL',
  'ENGINEER',
  'ENTERTAINER',
  'ENTREPRENEUR',
  'ENTREPRENEUR_S_FOUNDER_S_OWNER',
  'EVENT_PLANNER',
  'FARMER_S_RANCHER',
  'FINANCE_D_ACCOUNTANT_S_CONTROLLER',
  'FINANCE_D_ANALYST',
  'FINANCE_D_COMMERCIAL_BANKER',
  'FINANCE_D_CORPORATE_INVESTMENT_BANKER',
  'FINANCE_D_EQUITY_RESEARCH',
  'FINANCE_D_INSURANCE',
  'FINANCE_D_INVESTMENT_PORTFOLIO_MANAGEMENT',
  'FINANCE_D_INVESTOR_RELATIONS',
  'FINANCE_D_LENDING',
  'FINANCE_D_MERGERS__8__ACQUISITIONS',
  'FINANCE_D_OTHER',
  'FINANCE_D_PRIVATE_CLIENT_SERVICES',
  'FINANCE_D_PRIVATE_EQUITY',
  'FINANCE_D_PUBLIC_INVESTMENT_BANKER',
  'FINANCE_D_SALES_S_TRADER',
  'FINANCE_D_TREASURY',
  'FINANCE_D_VENTURE_CAPITALIST',
  'FIREFIGHTER',
  'FUND_DEVELOPER',
  'GEOLOGIST',
  'HEALTH_CARE_PROFESSIONAL',
  'HISTORIAN',
  'HOLISTIC_HEALTH_PRACTITIONER',
  'HOMEMAKER',
  'HUMAN_RESOURCES_S_RECRUITMENT',
  'IT_SYSTEMS_S_MIS',
  'INTELLIGENCE_SPECIALIST',
  'INTERPRETER_S_TRANSLATOR',
  'JUDGE',
  'LAW_ENFORCEMENT_D_POLICE_OFFICER_S_SHERIFF',
  'LEGAL_D_CORPORATE_ATTORNEY',
  'LEGAL_D_LITIGATION_ATTORNEY',
  'LEGAL_D_OTHER_ATTORNEY',
  'LEGAL_ASSISTANT',
  'LEGISLATIVE_AIDE',
  'LEGISLATOR',
  'LIBRARIAN',
  'LOBBYIST_S_ACTIVIST',
  'MANUFACTURING',
  'MARKETING_D_BRAND_S_PRODUCT_MANAGEMENT',
  'MARKETING_D_COMMUNICATIONS',
  'MARKETING_D_MARKET_RESEARCH',
  'MARKETING_D_OTHER',
  'MARKETING_D_PRODUCT_DEVELOPMENT',
  'MARKETING_D_PUBLIC_RELATIONS',
  'MATHEMATICIAN_S_STATISTICIAN',
  'MEDIATOR',
  'MEDICAL_D_DOCTOR_D_ANESTHESIOLOGIST',
  'MEDICAL_D_DOCTOR_D_EMERGENCY_MEDICINE',
  'MEDICAL_D_DOCTOR_D_INTERNAL_MEDICINE',
  'MEDICAL_D_DOCTOR_D_NEUROLOGIST',
  'MEDICAL_D_DOCTOR_D_OBGYN',
  'MEDICAL_D_DOCTOR_D_OPTHAMOLOGIST',
  'MEDICAL_D_DOCTOR_D_OTHER',
  'MEDICAL_D_DOCTOR_D_PATHOLOGIST',
  'MEDICAL_D_DOCTOR_D_PEDIATRICIAN',
  'MEDICAL_D_DOCTOR_D_PLASTIC_SURGEON',
  'MEDICAL_D_DOCTOR_D_PSYCHIATRIST',
  'MEDICAL_D_DOCTOR_D_RADIOLOGIST',
  'MEDICAL_D_DOCTOR_D_SURGEON',
  'MEDICAL_D_PHYSICIAN_ASSISTANT',
  'MEDICAL_TECHNOLOGIST',
  'MENTAL_HEALTH_PROFESSIONAL',
  'METEOROLOGIST',
  'MANAGEMENT_D_CORPORATE_OFFICER',
  'MANAGEMENT_D_CORPORATE_OFFICER_D_BOARD_MEMBER',
  'MANAGEMENT_D_CORPORATE_OFFICER_D_CEO',
  'MANAGEMENT_D_CORPORATE_OFFICER_D_CFO',
  'MANAGEMENT_D_CORPORATE_OFFICER_D_CMO',
  'MANAGEMENT_D_CORPORATE_OFFICER_D_COO',
  'MANAGEMENT_D_CORPORATE_OFFICER_D_CTO',
  'MANAGEMENT_D_EXECUTIVE_DIRECTOR_S_GENERAL_MANAGER',
  'MILITARY_OFFICER',
  'MILITARY_PERSONNEL',
  'MINISTRY',
  'MUSICIAN',
  'NURSE',
  'OCCUPATIONAL_THERAPIST',
  'OFFICE_WORKER',
  'OPERATIONS_S_PRODUCTION_MANAGER',
  'ORGANIZER',
  'OTHER',
  'PARALEGAL',
  'PHARMACIST',
  'PHOTOGRAPHER',
  'PHYSICAL_THERAPIST',
  'PILOT_S_SHIP_CAPTAIN',
  'PLANNER',
  'PODIATRIST',
  'POLITICIAN',
  'PRODUCER',
  'PROFESSOR',
  'PROGRAM_COORDINATOR',
  'PROGRAM_OFFICER',
  'PROGRAMMER',
  'PRODUCT_MANAGER',
  'PROJECT_MANAGER',
  'PUBLISHER',
  'R_8_D_MANAGER',
  'REAL_ESTATE_AGENT',
  'REPORTER_S_CORRESPONDENT',
  'RESEARCHER',
  'RETIRED',
  'SALES_S_ACCOUNT_MANAGER',
  'SCIENTIST',
  'SOCIAL_SCIENTIST',
  'SOCIAL_WORKER',
  'SPEECH_PATHOLOGIST',
  'STRATEGY_D_PLANNING',
  'SUPPLY_CHAIN_MANAGER',
  'SYSTEMS_ANALYST',
  'TEACHER',
  'TECHNICAL_S_FIELD_SUPPORT_REPRESENTATIVE',
  'TECHNICIAN',
  'THERAPIST',
  'TOUR_GUIDE_S_OPERATOR',
  'TRAVEL_AGENT',
  'UNDERWRITER',
  'VETERINARIAN',
  'VINTNER',
  'VOLUNTEER',
  'WRITER_D_CREATIVE',
  'WRITER_D_TECHNICAL',
  'ENGLISH',
  'AFRIKAANS',
  'ALBANIAN',
  'AMHARIC',
  'ARABIC',
  'ARMENIAN',
  'AZERBAIJANI',
  'BASQUE',
  'BELARUSIAN',
  'BENGALI',
  'BOSNIAN',
  'BULGARIAN',
  'BURMESE',
  'CATALAN',
  'CEBUANO',
  'CHICHEWA',
  'CHINESE',
  'CORSICAN',
  'CROATIAN',
  'CZECH',
  'DANISH',
  'DUTCH',
  'ESPERANTO',
  'ESTONIAN',
  'FILIPINO',
  'FINNISH',
  'FRENCH',
  'FRISIAN',
  'GALICIAN',
  'GEORGIAN',
  'GERMAN',
  'GREEK',
  'GUJARATI',
  'HAITIAN_CREOLE',
  'HAUSA',
  'HAWAIIAN',
  'HEBREW',
  'HINDI',
  'HMONG',
  'HUNGARIAN',
  'ICELANDIC',
  'IGBO',
  'INDONESIAN',
  'IRISH',
  'ITALIAN',
  'JAPANESE',
  'JAVANESE',
  'KANNADA',
  'KAZAKH',
  'KHMER',
  'KOREAN',
  'KURDISH',
  'KYRGYZ',
  'LAO',
  'LATIN',
  'LATVIAN',
  'LITHUANIAN',
  'LUXEMBOURGISH',
  'MACEDONIAN',
  'MALAGASY',
  'MALAY',
  'MALAYALAM',
  'MALTESE',
  'MAORI',
  'MARATHI',
  'MONGOLIAN',
  'NEPALI',
  'NORWEGIAN',
  'PASHTO',
  'PERSIAN',
  'POLISH',
  'PORTUGUESE',
  'PUNJABI',
  'ROMANIAN',
  'RUSSIAN',
  'SAMOAN',
  'SCOTS_GAELIC',
  'SERBIAN',
  'SESOTHO',
  'SHONA',
  'SINDHI',
  'SINHALA',
  'SLOVAK',
  'SLOVENIAN',
  'SOMALI',
  'SPANISH',
  'SUNDANESE',
  'SWAHILI',
  'SWEDISH',
  'TAJIK',
  'TAMIL',
  'TELUGU',
  'THAI',
  'TURKISH',
  'UKRAINIAN',
  'URDU',
  'UZBEK',
  'VIETNAMESE',
  'WELSH',
  'XHOSA',
  'YIDDISH',
  'YORUBA',
  'ZULU',
  'BOATING',
  'SKIING',
  'COMPUTERS',
  'SPORTS',
  'GARDENING',
  'CURRENT_COLLEGE_STUDENT',
  'BACHELOR_OF_ARTS_DEGREE',
  'BACHELOR_OF_SCIENCE',
  'MASTER_A_S_DEGREE',
  'DOCTORATE',
  'ASSOCIATE_A_S_DEGREE'
]
