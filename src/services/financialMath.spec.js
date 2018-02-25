import { annualRateToDaily, dailyRateToAnnual, futureValue, rate } from './financialMath'

describe('financialMath', () => {
  describe('#annualRateToDaily', () => {
    describe('when precision is specified', () => {
      it('returns the annual rate converted to daily rate with the precision specified', () => {
        expect(annualRateToDaily(0.07, 10)).toEqual(0.0001879583)
      })
    })

    describe('when precision isn\'t specified', () => {
      it('returns the annual rate converted to six-precision daily rate', () => {
        expect(annualRateToDaily(0.07)).toEqual(0.000187)
      })
    })
  })

  describe('#dailyRateToAnnual', () => {
    it('returns the daily rate converted to six-precision annual rate', () => {
      expect(dailyRateToAnnual(0.000187)).toEqual(0.06963)
    })
  })

  describe('#futureValue', () => {
    it('returns the two-rounded future value for amount', () => {
      expect(futureValue(5000, 365, annualRateToDaily(0.07))).toEqual(5353.16)
    })
  })

  describe('#rate', () => {
    it('returns the six-precision rate of investment', () => {
      expect(rate(1000, 1157.63, 3)).toEqual(0.050001)
    })
  })
})
