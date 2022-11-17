# Topcoder Universal Navigation
This repo contains all the components specific to the universal navigation for topcoder.com

## Gettings started
Include the main script in your application's main html:

```
<script>
  !function(n,t,e,a,c,i,o){n['TcUnivNavConfig']=c,n[c]=n[c]||function(){
  (n[c].q=n[c].q??[]).push(arguments)},n[c].l=1*new Date();i=t.createElement(e),
  o=t.getElementsByTagName(e)[0];i.async=1;i.type="module";i.src=a;o.parentNode.insertBefore(i,o)
  }(window,document,"script","//uni-nav.topcoder-dev.com/tc-universal-nav.js","tcUniNav");
</script>
```

Once included the above script, you can immediately call `tcUniNav()` to initialize the navigation.

There are 2 sample integrations in the "demo" folder: `tc-app.html` and `tc-tool-app.html`.

## API for tcUniNav
`tcUniNav(navigationType, target, config)`

| Parameter      | Type                                 | Required       | Description                                               | Default value |
|----------------|--------------------------------------|----------------|-----------------------------------------------------------|---------------|
| navigationType | Enum: 'marketing'\|'tool'\|'footer'  | yes            | The type of navigation to render.                         | none          |
| target         | string(html element id)\|HtmlElement | yes            | target element for the navigation to be rendered on       | none          |
| config         | object                               | no             | The config object for the specific navigation type        | {}            |
| config.onReady | () => void                           | no             | Callback function called when the navigation was rendered | none          |
| config.user    | {photoURL, userId, initials, handle} | no             | The logged in user                                        | {}            |
| config.signIn  | () => void                           | no             | Called when the user clicks the Log in button             | none          |
| config.singOut | () => void                           | no             | Called when the user clicks the Log out button            | none          |
| config.signUp  | () => void                           | no             | Called when the user clicks sign up/register              | none          |
| config.toolName| string                               | yes (tool nav) | Called when the user clicks sign up/register              | none          |

## Marketing Navigation
Component rendered on the marketing part of topcoder (eg. topcoder.com/business. topcoder.com/community)
```
  tcUniNav('marketing', 'navigation-el', config)
```

## Tool Navigation
Component rendered on any tool part of topcoder (eg. platform-ui.topcoder.com/learn)
```
  tcUniNav('tool', 'navigation-el', {...config, toolName: 'Topcoder Academy'})
```

## Footer Navigation
The component renders the footer for the page
```
  tcUniNav('footer', 'footer-navigation-el', config)
```

## Recommended IDE Setup   
[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
