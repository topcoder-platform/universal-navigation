import { delay } from "./delay";

/**
 * Bare minimum fonts list to check
 */
const fontsList = [
  {
    query: '700 16px Roboto',
    family: 'Roboto',
    weight: 700,
    q: 'family=Roboto:wght@400;500;700&display=swap'
  },
  {
    query: '400 16px Roboto',
    family: 'Roboto',
    weight: 400,
    q: 'family=Roboto:wght@400;500;700&display=swap'
  },
  {
    query: '400 16px Nunito\ Sans',
    family: 'Nunito+Sans',
    weight: 400,
    q: 'family=Nunito+Sans:opsz,wght@6..12,400'
  },
  {
    query: '700 16px Nunito\ Sans',
    family: 'Nunito+Sans',
    weight: 700,
    q: 'family=Nunito+Sans:opsz,wght@6..12,700'
  },
];

let previousLoadPromise: Promise<void> | undefined;

/**
 * Checks if font is loaded by checking the differences in width
 * before and after setting the font family & weight on an element
 *
 * @param query CSS font rules for the font
 * @param fontWeight font weight to test on
 * @returns True if font is loaded
 */
function checkFont(query: string, fontWeight: number): boolean {
  // create a test div element and position it outside of visible area
  const testEl = document.createElement('div');
  testEl.innerText = 'Sample Text!';
  Object.assign(testEl.style, {
    position: 'absolute',
    top: '-500px',
    left: '-500px',
    fontWeight,
    fontFamily: 'serif',
  });
  document.body.appendChild(testEl);

  // take it's initial width
  const initWidth = testEl.offsetWidth;

  // assign the specified font family & weight and
  // take it's width after applying the new styling
  Object.assign(testEl.style, {font: query});
  const afterWidth = testEl.offsetWidth;

  // remove from dom
  testEl.remove();

  // check if the before & after widths are different
  // if they're different it means it's more than probable for the font to be loaded
  return initWidth !== afterWidth;
}

// Check if all the fonts in the above list were loaded after the fontsSet is ready
// if not all fonts are loaded, simply add the stylesheet from google fonts with all necessary fonts
// even if we did a mistake, this will not enforce the client to re-load all fonts,
// it will simply make the fonts "available" for download when needed
export const checkAndLoadFonts = async () => {
  await document.fonts.ready

  if (previousLoadPromise) {
    return previousLoadPromise;
  }

  const notLoaded = fontsList.filter((font) => (
    !checkFont(font.query, font.weight)
  ));

  if (notLoaded.length) {
    return previousLoadPromise = new Promise((resolve) => {
      // create the stylesheet link element
      const link = document.createElement('link');
      link.addEventListener('load', async () => {
        await delay(30);
        await document.fonts.ready;
        resolve(void 0);
      });
      link.rel = 'stylesheet';
      const queries = [...new Set(notLoaded.map(d => d.q))].join('&');
      link.href = `https://fonts.googleapis.com/css2?${queries}&display=swap`;

      // append it before the first <link" we foind in the document
      const firstLink = document.getElementsByTagName('link')[0];
      const parent = firstLink?.parentNode ?? document.head;
      parent.insertBefore(link, firstLink ?? null);
    });
  }
}
