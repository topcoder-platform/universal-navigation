// if there's no value for the specified config key, throw an error;
// otherwise, return the value for the specified key.
export function getEnvValue<T>(viteKey: string, defaultValue?: string): T {
  if (!Object.prototype.hasOwnProperty.call(import.meta.env, viteKey) && defaultValue === undefined) {
      throw new Error(`Config variable '${viteKey}' is missing from your .env file!`)
  }

  const viteValue: string = import.meta.env[viteKey] ?? defaultValue
  return viteValue as unknown as T
}
