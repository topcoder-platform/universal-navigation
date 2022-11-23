export const hasOwnProperty = (obj: any, key: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}