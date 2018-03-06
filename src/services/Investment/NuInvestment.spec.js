import NuInvestment from './NuInvestment'
import NuCDBCalculator from './calculators/NuCDBCalculator'
import { cdi } from 'Services/indexes'
jest.mock('../indexes', () => ({
  cdi: jest.fn()
}))

describe('NuInvestment', () => {
  let subject
  beforeEach(() => {
    cdi.mockReturnValue(0.069)
    subject = new NuInvestment(1000, 25)
  })

  describe('#calculator', () => {
    it('returns a NuCDBCalculator instance with daily cdi rate', () => {
      expect(subject.calculator()).toBeInstanceOf(NuCDBCalculator)
      expect(subject.calculator().dailyRate).toBe(0.000185)
    })
  })
})
