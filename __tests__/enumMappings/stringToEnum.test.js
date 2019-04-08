import { stringToEnum } from '../../enumMappings'
import { strings, enums } from './enumMappingsData'
import { testsGenerator } from '../helpers/functions'

const tests = testsGenerator(strings, enums)

describe('stringToEnum', () => {
  tests.map(data =>
    test(`maps ${data.input} to ${data.expected}`, () => {
      expect(stringToEnum(data.input)).toBe(data.expected)
    })
  )
})
