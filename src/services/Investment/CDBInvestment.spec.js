import CDBInvestment from './CDBInvestment'
import NuCDBCalculator from './calculators/NuCDBCalculator'
import { cdi } from 'Services/indexes'
jest.mock('../indexes', () => ({
  cdi: jest.fn()
}))

describe('CDBInvestment', () => {
  let subject
  beforeEach(() => {
    cdi.mockReturnValue(0.069)
    subject = new CDBInvestment(1000, 25, 0.98)
  })

  describe('#calculator', () => {
    it('returns a NuCDBCalculator instance with profitibility of cdi in daily rate', () => {
      expect(subject.calculator()).toBeInstanceOf(NuCDBCalculator)
      expect(subject.calculator().dailyRate).toBe(0.000181)
    })
  })
})
