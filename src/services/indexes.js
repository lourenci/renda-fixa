import indexes from './indexes.json'

export const selic = () => indexes.find(index => index.name === 'Selic').value
export const cdi = () => indexes.find(index => index.name === 'CDI').value
