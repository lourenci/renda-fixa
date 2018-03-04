import { selic, cdi, tr } from './indexes'

jest.mock('./indexes.json', () => ([
  { 'name': 'Selic', 'value': 0.07 },
  { 'name': 'CDI', 'value': 0.0665 },
  { 'name': 'TR', 'value': 0.0000 }
]))

describe('#selic', () => {
  it('returns the Selic index', () => {
    expect(selic()).toBe(0.07)
  })
})

describe('#cdi', () => {
  it('returns the CDI index', () => {
    expect(cdi()).toBe(0.0665)
  })
})

describe('#tr', () => {
  it('returns the TR index', () => {
    expect(tr()).toBe(0.0000)
  })
})
