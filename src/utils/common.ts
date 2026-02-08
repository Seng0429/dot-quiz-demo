import { customRegex } from "./regex"
import { authErrorMessage } from "./constants"

const validInput = (input: string) => {
  const spaceRemovedInput = input.replace(/\s/g, '')
  if (spaceRemovedInput !== '' || spaceRemovedInput !== undefined || spaceRemovedInput !== null) return true
  return false
}

const verifyEmailFormat = (inputEmail: string) => {
  return customRegex.emailFormat.test(inputEmail)
}

const checkPasswordStrength = (password: string) => {
  const passwordCheckList = {
    atLeast8CharacterLong: password.length >= 8,
    haveLowerCase: customRegex.passwordFormat.atLeastOneLowercase.test(password),
    haveUpperCase: customRegex.passwordFormat.atLeastOneUppercase.test(password),
    atLeast1SpecialChar: customRegex.passwordFormat.specialCharacter.test(password),
    atLeast1Number: customRegex.passwordFormat.atLeastOneNumber.test(password)
  }

  let message = 'Password format:\n'

  if (passwordCheckList.atLeast8CharacterLong !== true) {
    message += authErrorMessage.notEnoughLength + '\n'
  }

  if (passwordCheckList.haveLowerCase !== true) {
    message += authErrorMessage.noLowerCase + '\n'
  }

  if (passwordCheckList.haveUpperCase !== true) {
    message += authErrorMessage.noUpperCase + '\n'
  }

  if (passwordCheckList.atLeast1SpecialChar !== true) {
    message += authErrorMessage.noSpecialChar + '\n'
  }

  if (passwordCheckList.atLeast1Number !== true) {
    message += authErrorMessage.noNumber + '\n'
  }

  if(passwordCheckList.haveLowerCase && passwordCheckList.haveUpperCase &&
    passwordCheckList.atLeast8CharacterLong && passwordCheckList.atLeast1SpecialChar &&
    passwordCheckList.atLeast1Number
  ) {
    return true
  }

  return message
}

export {
  validInput,
  verifyEmailFormat,
  checkPasswordStrength
}