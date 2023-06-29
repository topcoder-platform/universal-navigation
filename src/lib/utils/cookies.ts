export const getCookieValue = (name: string) => {
  const cookie = document.cookie.split(';').find((c) => c.trim().startsWith(name + '='));
  if (!cookie) {
    return;
  }

  try {
    return JSON.parse(cookie.split('=')[1]);
  } catch {}
}

export const checkCookie = (cookieName: string, value?: any) => {
  const cookie = value ? `${cookieName}=${JSON.stringify(value)}` : cookieName;
  if (document.cookie.indexOf(cookie) > -1) {
    return true;
  }
}

export const setCookie = (cookieName: string, value: any, duration: number, unit = 24 * 60 * 60 * 1000) => {
  const d = new Date(Date.now() + (duration * unit));
  d.setHours(0, 0, 0, 0);

  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cookieName}=${JSON.stringify(value)};${expires};path=/`;
}
