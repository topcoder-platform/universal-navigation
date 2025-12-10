export type ClassValue = string | false | null | undefined;

export const classnames = (...args: ClassValue[]) => {
  const tokens: string[] = [];

  for (const arg of args) {
    if (typeof arg !== 'string' || !arg.trim()) {
      continue;
    }

    tokens.push(
      ...arg
        .split(' ')
        .map((d) => d.trim())
        .filter(Boolean)
    );
  }

  return tokens.join(' ');
};
