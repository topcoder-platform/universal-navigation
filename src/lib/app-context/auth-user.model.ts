export interface AuthUser {
  photoUrl?: string
  userId: string | number
  handle: string

  // needed strictly for the support modal
  // first & last names used to compose & render
  // the user avatar when the user has no avatar
  firstName: string
  lastName: string
  email: string
}
