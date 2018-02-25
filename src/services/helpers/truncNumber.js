const truncNumber = (number, precision) => {
  const regex = new RegExp(`[0-9]*\\.[0-9]{1,${precision}}`)
  return regex.test(number) ? Number(number.toString().match(regex)[0]) : number
}

export default truncNumber
