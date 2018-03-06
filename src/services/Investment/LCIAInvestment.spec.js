import LCIAInvestment from './LCIAInvestment'
import LCIACalculator from './calculators/LCIACalculator'
import { cdi } from 'Services/indexes'
jest.mock('../indexes', () => ({
  cdi: jest.fn()
}))

describe('LCIAInvestment', () => {
  let subject
  beforeEach(() => {
    cdi.mockReturnValue(0.069)
    subject = new LCIAInvestment(1000, 25, 0.98)
  })

  describe('#calculator', () => {
    it('returns a LCIACalculator instance with profitibility of cdi in daily rate', () => {
      expect(subject.calculator()).toBeInstanceOf(LCIACalculator)
      expect(subject.calculator().dailyRate).toBe(0.000181)
    })
  })
})
