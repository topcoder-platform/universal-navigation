const localCache: {[key: string]: string} = {};

/**
 * Fetch the content of svg files as text
 * @note It will cache locally (in memory) the response for the same `src`
 * @param src Source path
 * @returns Svg file content
 */
export const fetchSvgContents = (src: string) => {
  if (localCache[src]) {
    return Promise.resolve(localCache[src]);
  }

  return fetch(src, {cache: 'force-cache'})
    .then(response => response.text())
    .then(svg => localCache[src] = svg);
}
