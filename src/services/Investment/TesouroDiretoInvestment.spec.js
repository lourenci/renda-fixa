import TesouroDiretoInvestment from './TesouroDiretoInvestment'
import TesouroDiretoCalculator from './calculators/TesouroDiretoCalculator'
import { selic } from '../indexes'
jest.mock('../indexes', () => ({
  selic: jest.fn()
}))

describe('TesouroDiretoInvestment', () => {
  let subject
  beforeEach(() => {
    selic.mockReturnValue(0.07)
    subject = new TesouroDiretoInvestment(1000, 25)
  })

  describe('#calculator', () => {
    it('returns a TesouroDiretoCalculator instance with daily Selic rate', () => {
      expect(subject.calculator()).toBeInstanceOf(TesouroDiretoCalculator)
      expect(subject.calculator().dailyRate).toBe(0.000187)
    })
  })
})
