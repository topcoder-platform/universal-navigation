# Topcoder Universal Navigation
Universal Nav for the entire TCO Websphere

## Architecture Diagram

![Basic Architecture Diagram](docs/Universal%20Nav%20Diagram.png?raw=true "Universal Nav Architecture Drawing")

## Hosting

The UniNav JS is stored in S3 with the CloudFront CDN. 

README TBD

## Getting started
Include the main script in your application's main html:

```
<script>
  !function(n,t,e,a,c,i,o){n['TcUnivNavConfig']=c,n[c]=n[c]||function(){
  (n[c].q=n[c].q??[]).push(arguments)},n[c].l=1*new Date();i=t.createElement(e),
  o=t.getElementsByTagName(e)[0];i.async=1;i.type="module";i.src=a;o.parentNode.insertBefore(i,o)
  }(window,document,"script","//uni-nav.topcoder.com/tc-universal-nav.js","tcUniNav");
</script>
```

Once included the above script, you can immediately call `tcUniNav()` to initialize the navigation.

There are 2 sample integrations in the "demo" folder: `tc-app.html` and `tc-tool-app.html`.

>**NOTE** Each application will need to determine which version of the nav it uses by setting the URL for the script. For example, non-production environments will probably want to point to `//uni-nav.topcoder-dev.com/tc-universal-nav.js`

## API for tcUniNav
`tcUniNav(method, targetId, config)`

| Parameter       | Type                                 | Required            | Description                                               | Default value |
|-----------------|--------------------------------------|---------------------|-----------------------------------------------------------|---------------|
| method          | Enum: 'init'\|'update'               | yes                 | The method to be called                                   |               |
| targetId        | string(html element id)              | yes                 | target element for the navigation to be rendered on       | none          |
| config          | object                               | no                  | The config object for the specific navigation type        | {}            |
| config.type     | Enum: 'marketing'\|'tool'\|'footer'  | yes                 | The type of navigation to render                          |               |
| config.onReady  | () => void                           | no                  | Callback function called when the navigation was rendered | none          |
| config.user     | {photoURL, userId, initials, handle} | no                  | The logged in user                                        | {}            |
| config.signIn   | () => void                           | no                  | Called when the user clicks the Log in button             | none          |
| config.singOut  | () => void                           | no                  | Called when the user clicks the Log out button            | none          |
| config.signUp   | () => void                           | no                  | Called when the user clicks sign up/register              | none          |
| config.toolName | string                               | yes (for  tool nav) | Called when the user clicks sign up/register              | none          |

## Marketing Navigation
Component rendered on the marketing part of topcoder (eg. topcoder.com/business. topcoder.com/community)
```
  tcUniNav('init', 'navigation-el', {...config, type: 'marketing'})
  tcUniNav('update', 'navigation-el', {user})
```

## Tool Navigation
Component rendered on any tool part of topcoder (eg. platform-ui.topcoder.com/learn)
```
  tcUniNav('init', 'navigation-el', {...config, type: 'tool', toolName: 'Topcoder Academy'})
  tcUniNav('update', 'navigation-el', {user})
  tcUniNav('update', 'navigation-el', {toolName: 'Work Manager, tool})
```

>**NOTE** In order to prevent flashing, the user info can only be set using the update method.

## Footer Navigation
The component renders the footer for the page
```
  tcUniNav('init', 'footer-navigation-el', {...config, type: 'footer'})
```

## Recommended IDE Setup   
[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
