const taxes = [
  { day: 721, percent: 15 },
  { day: 361, percent: 17.5 },
  { day: 181, percent: 20 },
  { day: 0, percent: 22.5 }
]

class IncomeTax {
  constructor (days) {
    this.days = days
  }

  percentOfValue (value) {
    const tax = taxes.find((tax) => tax.day <= this.days)
    return value * (tax.percent / 100)
  }
}

export default IncomeTax
