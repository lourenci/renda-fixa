import IncomeTax from '../../src/services/IncomeTax'

describe('IncomeTax', () => {
  describe('#forValue', () => {
    describe('when the income tax is less or equal than 180 days', () => {
      it('returns 22.5% of the value', () => {
        expect(new IncomeTax(180).forValue(50)).toBe(11.25)
      })
    })

    describe('when the income tax is between 181 and 360 days', () => {
      it('returns 20% of the value', () => {
        expect(new IncomeTax(181).forValue(50)).toBe(10)
        expect(new IncomeTax(360).forValue(50)).toBe(10)
      })
    })

    describe('when the income tax is between 361 and 720 days', () => {
      it('returns 17.5% of the value', () => {
        expect(new IncomeTax(361).forValue(50)).toBe(8.75)
        expect(new IncomeTax(720).forValue(50)).toBe(8.75)
      })
    })

    describe('when the income tax is greater than 720 days', () => {
      it('returns 15% of the value', () => {
        expect(new IncomeTax(721).forValue(50)).toBe(7.5)
      })
    })
  })
})
