
const isLoaded = () => {
  return !!window['chmln']
}

const load = () => {
  if (isLoaded()) {
    return window['chmln'];
  }

  /* Chameleon script. See trychameleon.com */
  eval(
    `!function(d,w){var t="SAcpvabiB6Vsb9yZm32REVpDemzhOjyY6iznnOufjNlqyk-1DPhtq-A61ZuE9U5MrO1WGx",c="chmln",m="identify alias track clear set show on off custom help _data".split(" "),i=d.createElement("script");if(w[c]||(w[c]={}),!w[c].root){w[c].accountToken=t,w[c].location=w.location.href.toString(),w[c].now=new Date;for(var s=0;s<m.length;s++){!function(){var t=w[c][m[s]+"_a"]=[];w[c][m[s]]=function(){t.push(arguments);};}();}i.src="https://fast.trychameleon.com/messo/"+t+"/messo.min.js",i.async=!0,d.head.appendChild(i);}}(document,window);`
  )
  /* trychameleon.com user identification and data */

  return window['chmln'];
}

export {
  load,
}
