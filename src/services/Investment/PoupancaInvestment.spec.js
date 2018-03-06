import PoupancaInvestment from './PoupancaInvestment'
import PoupancaCalculator from './calculators/PoupancaCalculator'
import { selic } from '../indexes'
jest.mock('../indexes', () => ({
  selic: jest.fn()
}))

describe('PoupancaInvestment', () => {
  let subject
  beforeEach(() => { subject = new PoupancaInvestment(1000, 25) })

  describe('#calculator', () => {
    describe('when selic index is more than 8,5% by year', () => {
      beforeEach(() => { selic.mockReturnValue(0.086) })

      it('returns a PoupancaCalculator instance with 0,5% by month plus TR tax in daily rate', () => {
        expect(subject.calculator()).toBeInstanceOf(PoupancaCalculator)
        expect(subject.calculator().dailyRate).toBe(0.000166)
      })
    })

    describe('when selic index is equal or less than 8,5% by year', () => {
      beforeEach(() => { selic.mockReturnValue(0.085) })

      it('returns a PoupancaCalculator instance with 70% of selic plus TR index in daily rate', () => {
        expect(subject.calculator()).toBeInstanceOf(PoupancaCalculator)
        expect(subject.calculator().dailyRate).toBe(0.000160)
      })
    })
  })
})
