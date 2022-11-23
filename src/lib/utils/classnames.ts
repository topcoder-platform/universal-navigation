export const classnames = (...args: string[]) => (
  [].concat(...args.filter(Boolean).map(d => d.split(' ').map(e => e.trim()))).filter(Boolean).join(' ')
);
