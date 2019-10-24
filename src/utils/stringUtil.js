const lowerCaseFirstLetter = (str) => {
  if (!str) {
    return ''
  }
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export default {
  lowerCaseFirstLetter
}
