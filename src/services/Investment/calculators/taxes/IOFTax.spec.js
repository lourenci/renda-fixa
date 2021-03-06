import IOFTax from './IOFTax'

describe('IOFTax', () => {
  describe('#percent', () => {
    describe('when the days of the investment is less than 30 days', () => {
      it('returns the correspondent percentage of the days', () => {
        expect(new IOFTax(29).percent()).toBe(3)
      })
    })

    describe('when the days of the investment is greater or equal than 30 days', () => {
      it('returns 0%', () => {
        expect(new IOFTax(30).percent()).toBe(0)
        expect(new IOFTax(31).percent()).toBe(0)
      })
    })
  })

  describe('#percentOfValue', () => {
    describe('when the days of the investment is less than 30 days', () => {
      it('returns the value deducted by correspondent percentage of the days', () => {
        expect(new IOFTax(28).percentOfValue(100)).toBe(6)
      })
    })

    describe('when the days of the investment is greater or equal than 30 days', () => {
      it('returns 0', () => {
        expect(new IOFTax(30).percentOfValue(100)).toBe(0)
        expect(new IOFTax(31).percentOfValue(100)).toBe(0)
      })
    })
  })
})
