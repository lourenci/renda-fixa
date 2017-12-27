const taxes = [
  { day: 721, percent: 15 },
  { day: 361, percent: 17.5 },
  { day: 181, percent: 20 },
  { day: 0, percent: 22.5 }
]

const findTaxByDays = (days) => taxes.find((tax) => tax.day <= days)

class IncomeTax {
  constructor (days) {
    this.days = days
  }

  percent () {
    return findTaxByDays(this.days).percent
  }

  percentOfValue (value) {
    const tax = findTaxByDays(this.days)
    return value * (tax.percent / 100)
  }
}

export default IncomeTax
