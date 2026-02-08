const customRegex = {
  emailFormat: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passwordFormat: {
    atLeastOneUppercase: /[A-Z]/,
    atLeastOneLowercase: /[a-z]/,
    atLeastOneNumber: /[0-9]/,
    specialCharacter: /[^a-zA-Z0-9]/
  }
}

export {
  customRegex
}