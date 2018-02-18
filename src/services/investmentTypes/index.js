export const INVESTMENT_TYPES = [
  {
    name: 'Tesouro Direto Selic',
    index: null,
    calculator: 'TesouroDiretoCalculator',
    taxes: [
      { name: 'IOFTax', description: 'IOF' },
      { name: 'IncomeTax', description: 'Imposto de Renda' }
    ]
  },
  {
    name: 'LCI',
    index: 'CDI',
    taxes: [
      { name: 'IOFTax', description: 'IOF' }
    ]
  },
  {
    name: 'LCA',
    index: 'CDI',
    taxes: [
      { name: 'IOFTax', description: 'IOF' }
    ]
  },
  {
    name: 'CDB',
    index: 'CDI',
    taxes: [
      { name: 'IOFTax', description: 'IOF' },
      { name: 'IncomeTax', description: 'Imposto de Renda' }
    ]
  }
]
