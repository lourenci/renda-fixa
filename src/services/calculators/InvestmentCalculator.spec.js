import InvestmentCalculator from './InvestmentCalculator'
import TesouroDiretoCalculator from 'Services/calculators/TesouroDiretoCalculator'
import LCIACalculator from 'Services/calculators/LCIACalculator'
import NuCDBCalculator from 'Services/calculators/NuCDBCalculator'
import PoupancaCalculator from 'Services/calculators/PoupancaCalculator'
import { selic, cdi } from '../indexes'
jest.mock('../indexes', () => ({
  selic: jest.fn(),
  cdi: jest.fn()
}))

beforeEach(() => {
  selic.mockReturnValue(0.07)
  cdi.mockReturnValue(0.069)
})

describe('InvestmentCalculator', () => {
  const subject = (investmentName, amount, days, profitibility) => {
    return new InvestmentCalculator(investmentName, amount, days, profitibility).calculator()
  }

  describe('#calculator', () => {
    describe('when the investment is Tesouro Direto Selic', () => {
      it('returns a TesouroDiretoCalculator instance with daily Selic rate', () => {
        expect(subject('Tesouro Direto Selic', 1000, 25)).toBeInstanceOf(TesouroDiretoCalculator)
        expect(subject('Tesouro Direto Selic', 1000, 25).dailyRate).toBe(0.000187)
      })
    })

    describe('when the investment is LCI', () => {
      it('returns a LCIACalculator instance with profitibility of cdi in daily rate', () => {
        expect(subject('LCI', 1000, 25, 0.98)).toBeInstanceOf(LCIACalculator)
        expect(subject('LCI', 1000, 25, 0.98).dailyRate).toBe(0.000181)
      })
    })

    describe('when the investment is LCA', () => {
      it('returns a LCIACalculator instance with profitibility of cdi in daily rate', () => {
        expect(subject('LCA', 1000, 25, 0.98)).toBeInstanceOf(LCIACalculator)
        expect(subject('LCA', 1000, 25, 0.98).dailyRate).toBe(0.000181)
      })
    })

    describe('when the investment is NuConta', () => {
      it('returns a NuCDBCalculator instance with daily cdi rate', () => {
        expect(subject('NuConta', 1000, 25)).toBeInstanceOf(NuCDBCalculator)
        expect(subject('NuConta', 1000, 25).dailyRate).toBe(0.000185)
      })
    })

    describe('when the investment is CDB', () => {
      it('returns a NuCDBCalculator instance with profitibility of cdi in daily rate', () => {
        expect(subject('CDB', 1000, 25, 0.98)).toBeInstanceOf(NuCDBCalculator)
        expect(subject('CDB', 1000, 25, 0.98).dailyRate).toBe(0.000181)
      })
    })

    describe('when the investment is Poupança', () => {
      describe('when selic index is more than 8,5% by year', () => {
        beforeEach(() => { selic.mockReturnValue(0.086) })

        it('returns a PoupancaCalculator instance with 0,5% by month plus TR tax in daily rate', () => {
          expect(subject('Poupança', 1000, 25)).toBeInstanceOf(PoupancaCalculator)
          expect(subject('Poupança', 1000, 25).dailyRate).toBe(0.000166)
        })
      })

      describe('when selic index is equal or less than 8,5% by year', () => {
        beforeEach(() => { selic.mockReturnValue(0.085) })

        it('returns a PoupancaCalculator instance with 70% of selic plus TR tax in daily rate', () => {
          expect(subject('Poupança', 1000, 25)).toBeInstanceOf(PoupancaCalculator)
          expect(subject('Poupança', 1000, 25).dailyRate).toBe(0.000160)
        })
      })
    })
  })
})
