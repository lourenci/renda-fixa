import { annualRateToDaily, futureValue } from '../../src/services/financialMath'

describe('financialMath', () => {
  describe('#annualRateToDaily', () => {
    it('returns the annual rate converted to daily rate', () => {
      expect(annualRateToDaily(0.07)).toEqual(0.000187)
    })
  })

  describe('#futureValue', () => {
    it('returns the future value to amount', () => {
      expect(futureValue(5000, 365, annualRateToDaily(0.07))).toEqual(5353.16)
    })
  })
})
