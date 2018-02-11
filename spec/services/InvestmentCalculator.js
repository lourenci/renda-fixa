import InvestmentCalculator from 'Services/InvestmentCalculator'

const investmentCalculator = (amount, daysOfInvestment, annualRate, taxes) => {
  return new InvestmentCalculator(amount, daysOfInvestment, annualRate, taxes)
}

describe('InvestmentCalculator', () => {
  let subject
  beforeEach(() => { subject = investmentCalculator(5000, 29, 0.07, ['IOFTax', 'IncomeTax']) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(5027.19)
    })
  })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      expect(subject.netAmount()).toEqual(5020.44)
    })
  })

  describe('#amountTaxes', () => {
    it('returns the amount of taxes of investment', () => {
      expect(subject.amountTaxes()).toEqual(6.75)
    })
  })

  describe('#netPercentYear', () => {
    it('returns the net percentage per year', () => {
      expect(subject.netPercentYear()).toEqual(0.001441)
    })
  })
})
