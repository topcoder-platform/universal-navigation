import type { AuthUser } from "./auth-user.model"

export interface AuthConfig {
  user: AuthUser
  ready: boolean
  signIn: () => void
  signOut: () => void
  signUp: () => void
}