import type { AuthUser } from "./auth-user.model"

export interface AuthConfig {
  user: AuthUser
  profileCompletedness?: number
  profileCompletednessData?: {showToast: string}
  autoFetchUser?: boolean
  ready: boolean
  signIn: () => void
  signOut: () => void
  signUp: () => void
}
