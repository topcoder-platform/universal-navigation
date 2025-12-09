import type { AuthUser } from "./auth-user.model"
import type { ProfileCompletionData } from "./profile-completion.model"

export interface AuthConfig {
  user?: AuthUser
  profileCompletionData?: ProfileCompletionData
  autoFetchUser?: boolean
  ready: boolean
  signIn: () => void
  signOut: () => void
  signUp: () => void
}
