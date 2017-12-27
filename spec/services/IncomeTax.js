import IncomeTax from '../../src/services/IncomeTax'

describe('IncomeTax', () => {
  describe('#percent', () => {
    describe('when the income tax is less or equal than 180 days', () => {
      it('returns 22.5%', () => {
        expect(new IncomeTax(180).percent()).toBe(22.5)
      })
    })

    describe('when the income tax is between 181 and 360 days', () => {
      it('returns 20%', () => {
        expect(new IncomeTax(181).percent()).toBe(20)
        expect(new IncomeTax(360).percent()).toBe(20)
      })
    })

    describe('when the income tax is between 361 and 720 days', () => {
      it('returns 17.5%', () => {
        expect(new IncomeTax(361).percent()).toBe(17.5)
        expect(new IncomeTax(720).percent()).toBe(17.5)
      })
    })

    describe('when the income tax is greater than 720 days', () => {
      it('returns 15%', () => {
        expect(new IncomeTax(721).percent()).toBe(15)
      })
    })
  })

  describe('#percentOfValue', () => {
    describe('when the income tax is less or equal than 180 days', () => {
      it('returns 22.5% of the value', () => {
        expect(new IncomeTax(180).percentOfValue(50)).toBe(11.25)
      })
    })

    describe('when the income tax is between 181 and 360 days', () => {
      it('returns 20% of the value', () => {
        expect(new IncomeTax(181).percentOfValue(50)).toBe(10)
        expect(new IncomeTax(360).percentOfValue(50)).toBe(10)
      })
    })

    describe('when the income tax is between 361 and 720 days', () => {
      it('returns 17.5% of the value', () => {
        expect(new IncomeTax(361).percentOfValue(50)).toBe(8.75)
        expect(new IncomeTax(720).percentOfValue(50)).toBe(8.75)
      })
    })

    describe('when the income tax is greater than 720 days', () => {
      it('returns 15% of the value', () => {
        expect(new IncomeTax(721).percentOfValue(50)).toBe(7.5)
      })
    })
  })
})
