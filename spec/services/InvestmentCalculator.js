import InvestmentCalculator from 'Services/InvestmentCalculator'

const investmentCalculator = (amount, daysOfInvestment, annualRate) => {
  return new InvestmentCalculator(amount, daysOfInvestment, annualRate)
}

describe('InvestmentCalculator', () => {
  let subject
  beforeEach(() => { subject = investmentCalculator(5000, 29, 0.07) })

  describe('#grossAmount', () => {
    it('returns the gross amount on the end of period', () => {
      expect(subject.grossAmount()).toEqual(5027.19)
    })
  })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      const taxes = ['IOFTax', 'IncomeTax']
      expect(subject.netAmount(taxes)).toEqual(5020.44)
    })
  })

  describe('#amountTaxes', () => {
    it('returns the amount of taxes of investment', () => {
      const taxes = ['IOFTax', 'IncomeTax']
      expect(subject.amountTaxes(taxes)).toEqual(6.75)
    })
  })
})
