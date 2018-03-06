const taxes = [
  { day: 30, percent: 0 },
  { day: 29, percent: 3 },
  { day: 28, percent: 6 },
  { day: 27, percent: 10 },
  { day: 26, percent: 13 },
  { day: 25, percent: 16 },
  { day: 24, percent: 20 },
  { day: 23, percent: 23 },
  { day: 22, percent: 26 },
  { day: 21, percent: 30 },
  { day: 20, percent: 33 },
  { day: 19, percent: 36 },
  { day: 18, percent: 40 },
  { day: 17, percent: 43 },
  { day: 16, percent: 46 },
  { day: 15, percent: 50 },
  { day: 14, percent: 53 },
  { day: 13, percent: 56 },
  { day: 12, percent: 60 },
  { day: 11, percent: 63 },
  { day: 10, percent: 66 },
  { day: 9, percent: 70 },
  { day: 8, percent: 73 },
  { day: 7, percent: 76 },
  { day: 6, percent: 80 },
  { day: 5, percent: 83 },
  { day: 4, percent: 86 },
  { day: 3, percent: 90 },
  { day: 2, percent: 93 },
  { day: 1, percent: 96 }
]

const findTaxByDays = (days) => taxes.find((tax) => tax.day <= days)

class IOFTax {
  constructor (days) {
    this.days = days
  }

  percent () {
    return findTaxByDays(this.days).percent
  }

  percentOfValue (value) {
    const tax = findTaxByDays(this.days)
    const percentOfValue = value * (tax.percent / 100)
    return Number(percentOfValue.toFixed(2))
  }
}

export default IOFTax
