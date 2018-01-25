import IOFTax from '../../../src/services/taxes/IOFTax'

describe('IOFTax', () => {
  describe('#percent', () => {
    describe('when it is 1-day investiment', () => {
      it('returns 96%', () => {
        expect(new IOFTax(1).percent()).toBe(96)
      })
    })

    describe('when it is 2-day investiment', () => {
      it('returns 93%', () => {
        expect(new IOFTax(2).percent()).toBe(93)
      })
    })

    describe('when it is 3-day investiment', () => {
      it('returns 90%', () => {
        expect(new IOFTax(3).percent()).toBe(90)
      })
    })

    describe('when it is 4-day investiment', () => {
      it('returns 86%', () => {
        expect(new IOFTax(4).percent()).toBe(86)
      })
    })

    describe('when it is 5-day investiment', () => {
      it('returns 83%', () => {
        expect(new IOFTax(5).percent()).toBe(83)
      })
    })

    describe('when it is 6-day investiment', () => {
      it('returns 80%', () => {
        expect(new IOFTax(6).percent()).toBe(80)
      })
    })

    describe('when it is 7-day investiment', () => {
      it('returns 76%', () => {
        expect(new IOFTax(7).percent()).toBe(76)
      })
    })

    describe('when it is 8-day investiment', () => {
      it('returns 73%', () => {
        expect(new IOFTax(8).percent()).toBe(73)
      })
    })

    describe('when it is 9-day investiment', () => {
      it('returns 70%', () => {
        expect(new IOFTax(9).percent()).toBe(70)
      })
    })

    describe('when it is 10-day investiment', () => {
      it('returns 66%', () => {
        expect(new IOFTax(10).percent()).toBe(66)
      })
    })

    describe('when it is 11-day investiment', () => {
      it('returns 63%', () => {
        expect(new IOFTax(11).percent()).toBe(63)
      })
    })

    describe('when it is 12-day investiment', () => {
      it('returns 60%', () => {
        expect(new IOFTax(12).percent()).toBe(60)
      })
    })

    describe('when it is 13-day investiment', () => {
      it('returns 56%', () => {
        expect(new IOFTax(13).percent()).toBe(56)
      })
    })

    describe('when it is 14-day investiment', () => {
      it('returns 53%', () => {
        expect(new IOFTax(14).percent()).toBe(53)
      })
    })

    describe('when it is 15-day investiment', () => {
      it('returns 50%', () => {
        expect(new IOFTax(15).percent()).toBe(50)
      })
    })

    describe('when it is 16-day investiment', () => {
      it('returns 46%', () => {
        expect(new IOFTax(16).percent()).toBe(46)
      })
    })

    describe('when it is 17-day investiment', () => {
      it('returns 43%', () => {
        expect(new IOFTax(17).percent()).toBe(43)
      })
    })

    describe('when it is 18-day investiment', () => {
      it('returns 40%', () => {
        expect(new IOFTax(18).percent()).toBe(40)
      })
    })

    describe('when it is 19-day investiment', () => {
      it('returns 36%', () => {
        expect(new IOFTax(19).percent()).toBe(36)
      })
    })

    describe('when it is 20-day investiment', () => {
      it('returns 33%', () => {
        expect(new IOFTax(20).percent()).toBe(33)
      })
    })

    describe('when it is 21-day investiment', () => {
      it('returns 30%', () => {
        expect(new IOFTax(21).percent()).toBe(30)
      })
    })

    describe('when it is 22-day investiment', () => {
      it('returns 26%', () => {
        expect(new IOFTax(22).percent()).toBe(26)
      })
    })

    describe('when it is 23-day investiment', () => {
      it('returns 23%', () => {
        expect(new IOFTax(23).percent()).toBe(23)
      })
    })

    describe('when it is 24-day investiment', () => {
      it('returns 20%', () => {
        expect(new IOFTax(24).percent()).toBe(20)
      })
    })

    describe('when it is 25-day investiment', () => {
      it('returns 16%', () => {
        expect(new IOFTax(25).percent()).toBe(16)
      })
    })

    describe('when it is 26-day investiment', () => {
      it('returns 13%', () => {
        expect(new IOFTax(26).percent()).toBe(13)
      })
    })

    describe('when it is 27-day investiment', () => {
      it('returns 10%', () => {
        expect(new IOFTax(27).percent()).toBe(10)
      })
    })

    describe('when it is 28-day investiment', () => {
      it('returns 6%', () => {
        expect(new IOFTax(28).percent()).toBe(6)
      })
    })

    describe('when it is 29-day investiment', () => {
      it('returns 3%', () => {
        expect(new IOFTax(29).percent()).toBe(3)
      })
    })

    describe('when it is 30-day (or greater) investiment', () => {
      it('returns 0%', () => {
        expect(new IOFTax(30).percent()).toBe(0)
        expect(new IOFTax(31).percent()).toBe(0)
      })
    })
  })

  describe('#percentOfValue', () => {
    describe('when it is 1-day investiment', () => {
      it('returns 96% of the value', () => {
        expect(new IOFTax(1).percentOfValue(100)).toBe(96.00)
      })
    })

    describe('when it is 2-day investiment', () => {
      it('returns 93% of the value', () => {
        expect(new IOFTax(2).percentOfValue(100)).toBe(93.00)
      })
    })

    describe('when it is 3-day investiment', () => {
      it('returns 90% of the value', () => {
        expect(new IOFTax(3).percentOfValue(100)).toBe(90.00)
      })
    })

    describe('when it is 4-day investiment', () => {
      it('returns 86% of the value', () => {
        expect(new IOFTax(4).percentOfValue(100)).toBe(86.00)
      })
    })

    describe('when it is 5-day investiment', () => {
      it('returns 83% of the value', () => {
        expect(new IOFTax(5).percentOfValue(100)).toBe(83.00)
      })
    })

    describe('when it is 6-day investiment', () => {
      it('returns 80% of the value', () => {
        expect(new IOFTax(6).percentOfValue(100)).toBe(80.00)
      })
    })

    describe('when it is 7-day investiment', () => {
      it('returns 76% of the value', () => {
        expect(new IOFTax(7).percentOfValue(100)).toBe(76.00)
      })
    })

    describe('when it is 8-day investiment', () => {
      it('returns 73% of the value', () => {
        expect(new IOFTax(8).percentOfValue(100)).toBe(73.00)
      })
    })

    describe('when it is 9-day investiment', () => {
      it('returns 70% of the value', () => {
        expect(new IOFTax(9).percentOfValue(100)).toBe(70.00)
      })
    })

    describe('when it is 10-day investiment', () => {
      it('returns 66% of the value', () => {
        expect(new IOFTax(10).percentOfValue(100)).toBe(66.00)
      })
    })

    describe('when it is 11-day investiment', () => {
      it('returns 63% of the value', () => {
        expect(new IOFTax(11).percentOfValue(100)).toBe(63.00)
      })
    })

    describe('when it is 12-day investiment', () => {
      it('returns 60% of the value', () => {
        expect(new IOFTax(12).percentOfValue(100)).toBe(60.00)
      })
    })

    describe('when it is 13-day investiment', () => {
      it('returns 56% of the value', () => {
        expect(new IOFTax(13).percentOfValue(100)).toBe(56.00)
      })
    })

    describe('when it is 14-day investiment', () => {
      it('returns 53% of the value', () => {
        expect(new IOFTax(14).percentOfValue(100)).toBe(53.00)
      })
    })

    describe('when it is 15-day investiment', () => {
      it('returns 50% of the value', () => {
        expect(new IOFTax(15).percentOfValue(100)).toBe(50.00)
      })
    })

    describe('when it is 16-day investiment', () => {
      it('returns 46% of the value', () => {
        expect(new IOFTax(16).percentOfValue(100)).toBe(46.00)
      })
    })

    describe('when it is 17-day investiment', () => {
      it('returns 43% of the value', () => {
        expect(new IOFTax(17).percentOfValue(100)).toBe(43.00)
      })
    })

    describe('when it is 18-day investiment', () => {
      it('returns 40% of the value', () => {
        expect(new IOFTax(18).percentOfValue(100)).toBe(40.00)
      })
    })

    describe('when it is 19-day investiment', () => {
      it('returns 36% of the value', () => {
        expect(new IOFTax(19).percentOfValue(100)).toBe(36.00)
      })
    })

    describe('when it is 20-day investiment', () => {
      it('returns 33% of the value', () => {
        expect(new IOFTax(20).percentOfValue(100)).toBe(33.00)
      })
    })

    describe('when it is 21-day investiment', () => {
      it('returns 30% of the value', () => {
        expect(new IOFTax(21).percentOfValue(100)).toBe(30.00)
      })
    })

    describe('when it is 22-day investiment', () => {
      it('returns 26% of the value', () => {
        expect(new IOFTax(22).percentOfValue(100)).toBe(26.00)
      })
    })

    describe('when it is 23-day investiment', () => {
      it('returns 23% of the value', () => {
        expect(new IOFTax(23).percentOfValue(100)).toBe(23.00)
      })
    })

    describe('when it is 24-day investiment', () => {
      it('returns 20% of the value', () => {
        expect(new IOFTax(24).percentOfValue(100)).toBe(20.00)
      })
    })

    describe('when it is 25-day investiment', () => {
      it('returns 16% of the value', () => {
        expect(new IOFTax(25).percentOfValue(100)).toBe(16.00)
      })
    })

    describe('when it is 26-day investiment', () => {
      it('returns 13% of the value', () => {
        expect(new IOFTax(26).percentOfValue(100)).toBe(13.00)
      })
    })

    describe('when it is 27-day investiment', () => {
      it('returns 10% of the value', () => {
        expect(new IOFTax(27).percentOfValue(100)).toBe(10.00)
      })
    })

    describe('when it is 28-day investiment', () => {
      it('returns 6% of the value', () => {
        expect(new IOFTax(28).percentOfValue(100)).toBe(6.00)
      })
    })

    describe('when it is 29-day investiment', () => {
      it('returns 3% of the value', () => {
        expect(new IOFTax(29).percentOfValue(100)).toBe(3.00)
      })
    })

    describe('when it is 30-day (or greater) investiment', () => {
      it('returns 0% of the value', () => {
        expect(new IOFTax(30).percentOfValue(100)).toBe(0.00)
        expect(new IOFTax(31).percentOfValue(100)).toBe(0.00)
      })
    })
  })
})
