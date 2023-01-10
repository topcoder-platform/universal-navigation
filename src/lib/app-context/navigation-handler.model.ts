// The argument for this function should be a NavMenuItem,
// but we removed the path property from the model and
// made the url property required. So for backwards compatibility
// we need to leave the property named path.
export type NavigationHandler = (route: { label: string, path: string }) => void
