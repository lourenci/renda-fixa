import truncNumber from './truncNumber'

describe('#truncNumber', () => {
  describe('when the returned number is a float number', () => {
    it('returns the number trunced by precision', () => {
      expect(truncNumber(5.003935, 3)).toEqual(5.003)
    })
  })

  describe('when the returned number is a integer number', () => {
    it('returns the number', () => {
      expect(truncNumber(5, 3)).toEqual(5)
    })
  })
})
