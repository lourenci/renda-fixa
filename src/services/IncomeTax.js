class IncomeTax {
  constructor (days) {
    this.days = days
  }

  forValue (value) {
    if (this.days <= 180) {
      return this._twentyTwoPercentOfValue(value)
    }
    if (this.days <= 360) {
      return this._twentyPercentOfValue(value)
    }
    if (this.days <= 720) {
      return this._seventeenPointFivePercentOfValue(value)
    }

    return this._fiveteenPercentOfValue(value)
  }

  _twentyTwoPercentOfValue (value) {
    return value * 0.225
  }

  _twentyPercentOfValue (value) {
    return value * 0.20
  }

  _seventeenPointFivePercentOfValue (value) {
    return value * 0.175
  }

  _fiveteenPercentOfValue (value) {
    return value * 0.15
  }
}

export default IncomeTax
