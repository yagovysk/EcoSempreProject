export const formatInput = {
  phone(value) {
    const unformattedValue = value.replace(/\D/g, '')

    const formattedValue = unformattedValue.replace(
      /^(\d{2})(\d{0,1})(\d{0,4})(\d{0,4})$/,
      (_, ddd, nonDigit, firstPart, secondPart) => {
        let formatted = '(' + ddd

        if (nonDigit) {
          formatted += ') ' + nonDigit
        }

        if (firstPart) {
          formatted += ' ' + firstPart
        }

        if (secondPart) {
          formatted += '-' + secondPart
        }

        return formatted
      },
    )

    return formattedValue
  },
  cep(value) {
    const cep = value.replace(/\D/g, '')
    return cep.replace(/^(\d{5})(\d{0,3})$/, '$1-$2')
  },
}
