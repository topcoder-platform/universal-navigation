export const sprigInit(email, regDate, sprig) {
  var diff = Math.round((Date.now() - regDate) / 86400000);
  if (diff <= 30) {
    sprig('track', 'onNewUserUseUniNav');
  }
}
