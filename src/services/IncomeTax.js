const taxes = [
  { days: 721, percent: 15 },
  { days: 361, percent: 17.5 },
  { days: 181, percent: 20 },
  { days: 0, percent: 22.5 },
]

class IncomeTax {
  constructor (days) {
    this.days = days
  }

  ofValue (value) {
    const tax = taxes.find((tax) => tax.days <= this.days)
    return value * (tax.percent / 100)
  }
}

export default IncomeTax
