export interface AuthUser {
  createdAt: string

  photoUrl?: string
  userId: string | number
  handle: string

  // first & last names used to compose & render
  // the user avatar when the user has no avatar
  firstName: string
  lastName: string
  email: string
}
