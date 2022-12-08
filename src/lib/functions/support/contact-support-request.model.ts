export interface ContactSupportRequest {
  challengeId?: string
  isSelfService?: boolean
  email: string
  firstName: string
  lastName: string
  question: string
}
