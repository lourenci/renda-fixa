export const INVESTMENT_TYPES = [
  {
    name: 'Tesouro Direto Selic',
    index: 'Selic',
    fixed: 100,
    calculator: 'TesouroDiretoCalculator'
  },
  {
    name: 'NuConta',
    index: 'CDI',
    fixed: 100,
    calculator: 'NuCDBCalculator'
  },
  {
    name: 'LCI',
    index: 'CDI',
    calculator: 'LCIACalculator'
  },
  {
    name: 'LCA',
    index: 'CDI',
    calculator: 'LCIACalculator'
  },
  {
    name: 'CDB',
    index: 'CDI',
    calculator: 'NuCDBCalculator'
  }
]
