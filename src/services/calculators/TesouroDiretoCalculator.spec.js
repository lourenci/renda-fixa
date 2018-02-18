import TesouroDiretoCalculator from './TesouroDiretoCalculator'

const tesouroDiretoCalculator = (amount, daysOfInvestment, annualRate, taxes) => {
  return new TesouroDiretoCalculator(amount, daysOfInvestment, annualRate, taxes)
}

describe('TesouroDiretoCalculator', () => {
  let subject
  beforeEach(() => { subject = tesouroDiretoCalculator(5000, 29, 0.07, ['IOFTax', 'IncomeTax']) })

  describe('#netAmount', () => {
    it('returns the net amount on the end of period', () => {
      expect(subject.netAmount()).toEqual(5019.23)
    })
  })

  describe('#bovespaTax', () => {
    it('returns the 0.3% annual tax of Bovespa over the amount', () => {
      expect(subject.bovespaTax()).toEqual(1.21)
    })
  })
})
