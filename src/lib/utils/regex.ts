/**
 * Escape string for building a RegExp
 * @param str 
 * @returns 
 */
export function escapeRegExp(str: string): string {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
