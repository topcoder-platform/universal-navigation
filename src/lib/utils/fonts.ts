import { delay } from "./delay";

/**
 * Bare minimum fonts list to check
 */
const fontsList = [
  {
    query: '400 16px Barlow\ Condensed',
    family: 'Barlow+Condensed',
    weight: 400
  },
  {
    query: '500 16px Barlow\ Condensed',
    family: 'Barlow+Condensed',
    weight: 500
  },
  {
    query: '700 16px Roboto',
    family: 'Roboto',
    weight: 700,
  },
  {
    query: '400 16px Roboto',
    family: 'Roboto',
    weight: 400,
  },
];

let previousLoadPromise;

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
    !document.fonts.check(font.query)
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
      link.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500&family=Roboto:wght@400;500;700&display=swap';

      // append it before the first <link" we foind in the document
      const firstLink = document.getElementsByTagName('link')[0];
      firstLink.parentNode.insertBefore(link, firstLink);
    });
  }
}
