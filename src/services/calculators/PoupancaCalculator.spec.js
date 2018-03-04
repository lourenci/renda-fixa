import PoupancaCalculator from './PoupancaCalculator'

describe('PoupancaCalculator', () => {
  let subject
  beforeEach(() => { subject = new PoupancaCalculator(3000, 29, 0.000166) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(3014.48)
    })
  })

  describe('#amountTaxes', () => {
    it('returns no tax', () => {
      expect(subject.amountTaxes()).toEqual(0)
    })
  })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      expect(subject.netAmount()).toEqual(3014.48)
    })
  })

  describe('#netPercentYear', () => {
    it('returns the net percentage per year', () => {
      expect(subject.netPercentYear()).toEqual(0.0616)
    })
  })
})
