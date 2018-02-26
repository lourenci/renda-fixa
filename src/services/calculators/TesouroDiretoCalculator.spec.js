import TesouroDiretoCalculator from './TesouroDiretoCalculator'

describe('TesouroDiretoCalculator', () => {
  let subject
  beforeEach(() => { subject = new TesouroDiretoCalculator(3000, 29, 0.07) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(3016.31)
    })
  })

  describe('#amountTaxes', () => {
    it('returns the sum of IOF, Income Tax and Bovespa taxes', () => {
      expect(subject.amountTaxes()).toEqual(4.77)
    })
  })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      expect(subject.netAmount()).toEqual(3011.54)
    })
  })

  describe('#netPercentYear', () => {
    it('returns the net percentage per year', () => {
      expect(subject.netPercentYear()).toEqual(0.0487)
    })
  })
})
