const InvestimentTypes = [
  {
    'name': 'Tesouro Direto Selic',
    'index': null,
    'taxes': [
      {'name': 'IncomeTax', 'description': 'Imposto de Renda'},
      {'name': 'FinancialOperationTax', 'description': 'IOF'}
    ]
  },
  {
    'name': 'LCI',
    'index': 'CDI'
  },
  {
    'name': 'LCA',
    'index': 'CDI'
  },
  {
    'name': 'CDB',
    'index': 'CDI',
    'taxes': [
      {'name': 'IncomeTax', 'description': 'Imposto de Renda'}
    ]
  }
]

const investimentTypes = (state = InvestimentTypes) => state

export default investimentTypes
