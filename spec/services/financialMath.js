import { annualRateToDaily, dailyRateToAnnual, futureValue, rate } from 'Services/financialMath'

describe('financialMath', () => {
  describe('#annualRateToDaily', () => {
    it('returns the annual rate converted to daily rate', () => {
      expect(annualRateToDaily(0.07)).toEqual(0.000187)
    })
  })

  describe('#dailyRateToAnnual', () => {
    it('returns the daily rate converted to annual rate', () => {
      expect(dailyRateToAnnual(0.000187)).toEqual(0.06963)
    })
  })

  describe('#futureValue', () => {
    it('returns the future value to amount', () => {
      expect(futureValue(5000, 365, annualRateToDaily(0.07))).toEqual(5353.16)
    })
  })

  describe('#rate', () => {
    it('returns the rate of investment', () => {
      expect(rate(1000, 1157.63, 3)).toEqual(0.050001)
    })
  })
})
