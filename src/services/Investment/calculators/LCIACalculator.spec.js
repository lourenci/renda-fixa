import LCIACalculator from './LCIACalculator'

describe('LCIACalculator', () => {
  let subject
  beforeEach(() => { subject = new LCIACalculator(3000, 29, 0.000187) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(3016.31)
    })
  })

  describe('#amountTaxes', () => {
    it('returns the sum of IOF Tax', () => {
      expect(subject.amountTaxes()).toEqual(0.49)
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
