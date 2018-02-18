import { annualRateToDaily, dailyRateToAnnual, futureValue, rate } from './financialMath'

describe('financialMath', () => {
  describe('#annualRateToDaily', () => {
    describe('when decimal places is specified', () => {
      it('returns the annual rate converted to daily rate with the decimal places specified', () => {
        expect(annualRateToDaily(0.07, 10)).toEqual(0.0001879583)
      })
    })

    describe('when decimal places isn\'t specified', () => {
      it('returns the annual rate converted to daily rate', () => {
        expect(annualRateToDaily(0.07)).toEqual(0.000187)
      })
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
