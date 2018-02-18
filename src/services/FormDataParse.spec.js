import FormDataParse from './FormDataParse'

describe('FormDataParse', () => {
  const formElement = () => {
    const formElement = document.createElement('form')
    const input1 = document.createElement('input')
    input1.name = 'input1'
    input1.value = 'value1'
    formElement.appendChild(input1)
    const input2 = document.createElement('input')
    input2.name = 'input2'
    input2.value = ''
    formElement.appendChild(input2)
    return formElement
  }

  describe('#toJSON', () => {
    it('returns a form parsed to JSON', () => {
      expect(FormDataParse(new FormData(formElement())).toJSON()).toEqual({
        'input1': 'value1',
        'input2': ''
      })
    })
  })
})
