const FormDataParse = (FormData) => {
  return {
    toJSON: () => {
      let json = {}
      FormData.forEach((value, key) => {
        json[key] = value
      })
      return json
    }
  }
}

export default FormDataParse
