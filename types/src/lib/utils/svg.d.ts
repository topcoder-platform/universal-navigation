/**
 * Fetch the content of svg files as text
 * @note It will cache locally (in memory) the response for the same `src`
 * @param src Source path
 * @returns Svg file content
 */
export declare const fetchSvgContents: (src: string) => Promise<string>;
