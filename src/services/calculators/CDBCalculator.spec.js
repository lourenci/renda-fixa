import CDBCalculator from './CDBCalculator'

describe('CDBCalculator', () => {
  let subject
  beforeEach(() => { subject = new CDBCalculator(3000, 29, 0.07) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(3016.31)
    })
  })

  describe('#amountTaxes', () => {
    describe('when the investment is for less than 30 days', () => {
      it('returns the amount of taxes of investment including IOF tax', () => {
        expect(subject.amountTaxes()).toEqual(4.05)
      })
    })

    describe('when the investment is for more than 29 days', () => {
      beforeEach(() => { subject = new CDBCalculator(3000, 250, 0.07) })

      it('returns the amount of taxes of investment without IOF', () => {
        expect(subject.amountTaxes()).toEqual(28.71)
      })
    })
  })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      expect(subject.netAmount()).toEqual(3012.26)
    })
  })

  describe('#netPercentYear', () => {
    it('returns the net percentage per year', () => {
      expect(subject.netPercentYear()).toEqual(0.0517)
    })
  })
})
