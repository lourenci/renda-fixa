const formElementParse = FormElement => {
  return {
    toJSON: () => {
      return Array.prototype.filter.call(FormElement.elements, element => element.name).reduce((json, element) => {
        json[element.name] = element.value
        return json
      }, {})
    }
  }
}

export default formElementParse
