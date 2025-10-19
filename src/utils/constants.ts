enum appPath {
  dashboard = '/dashboard',
  preview = '/preview',
  create = '/create',
  edit = '/edit'
}

enum quizMode {
  preview = 'preview',
  create = 'create',
  edit = 'edit'
}

export type quizModeType = quizMode.preview | quizMode.create |quizMode.edit

interface OptionsITF {
  optionId: string
  description: string
  isAnswer: boolean
}

interface QuestionITF {
  questionId: string
  questionText: string
  options: OptionsITF[]
  order: number,
  timeLimit: number
}

export interface QuizCollectionITF {
  quizId: string
  quizName: string
  quizDescription: string
  quizMode: 'open' | 'closed' | 'completed'
  questions: QuestionITF[]
}

enum firebaseAuthCode {
  invalidEmail = 'auth/invalid-email',
}

enum authErrorMessage {
  invalidEmail = 'Invalid email',
  invalidEmailFormat = 'Invalid email format',
  existingEmail = 'This email is already registered. Please try logging in or using a different email.',
  notMatchConfirmPassword = 'Password not same with confirm password, please check again.',
  noUpperCase = 'Need at least 1 uppercase character.',
  noLowerCase = 'Need at least 1 lowercase character.',
  noNumber = 'Need at least 1 number.',
  noSpecialChar = 'Need at least 1 special character like !@#$, etc.',
  notEnoughLength = 'Need at least 8 characters long.',
}

const authErrorMessageMap = new Map([
  [firebaseAuthCode.invalidEmail, authErrorMessage.invalidEmail],
])

export {
  appPath,
  quizMode,
  firebaseAuthCode,
  authErrorMessageMap,
  authErrorMessage
}