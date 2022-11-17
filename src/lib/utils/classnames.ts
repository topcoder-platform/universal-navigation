export const classnames = (...args) => (
  [].concat(...args.filter(Boolean).map(d => d.split(' ').map(e => e.trim()))).filter(Boolean).join(' ')
);
