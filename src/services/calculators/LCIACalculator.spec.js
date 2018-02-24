import LCIACalculator from './LCIACalculator'

describe('LCIACalculator', () => {
  let subject
  beforeEach(() => { subject = new LCIACalculator(3000, 29, 0.07) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(3016.31)
    })
  })

  describe('#amountTaxes', () => {
    describe('when the investment is for less than 30 days', () => {
      it('returns the amount of investment\'s taxes including IOF tax', () => {
        expect(subject.amountTaxes()).toEqual(0.49)
      })
    })

    describe('when the investment is for more than 29 days', () => {
      beforeEach(() => { subject = new LCIACalculator(3000, 250, 0.07) })

      it('returns the amount of investment\'s taxes without IOF tax', () => {
        expect(subject.amountTaxes()).toEqual(0)
      })
    })
  })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      expect(subject.netAmount()).toEqual(3015.82)
    })
  })

  describe('#netPercentYear', () => {
    it('returns the net percentage per year', () => {
      expect(subject.netPercentYear()).toEqual(0.0673)
    })
  })
})
