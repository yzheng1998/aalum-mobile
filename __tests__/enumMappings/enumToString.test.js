import { enumToString } from '../../enumMappings'
import { strings, enums } from './enumMappingsData'
import { testsGenerator } from '../helpers/functions'

const tests = testsGenerator(enums, strings)

describe('stringToEnum', () => {
  tests.map(data =>
    test(`maps ${data.input} to ${data.expected}`, () => {
      expect(enumToString(data.input)).toBe(data.expected)
    })
  )
})
