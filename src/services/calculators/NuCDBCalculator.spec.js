import NuCDBCalculator from './NuCDBCalculator'

describe('NuCDBCalculator', () => {
  let subject
  beforeEach(() => { subject = new NuCDBCalculator(3000, 29, 0.07) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(3016.31)
    })
  })

  describe('#amountTaxes', () => {
    it('returns the sum of IOF and Income Tax taxes', () => {
      expect(subject.amountTaxes()).toEqual(4.05)
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
