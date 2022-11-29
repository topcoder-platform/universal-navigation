# Topcoder Universal Navigation
Universal Nav for the entire TCO Websphere

## Clients

The following clients use the uni-nav for the MVP:

- [Platform UI](https://github.com/topcoder-platform/platform-ui)
- [PACTS](https://github.com/topcoder-platform/tc-website)
- [Forums](https://github.com/topcoder-platform/forums)
- [Online Review](https://github.com/topcoder-platform/tc-online-review)
- [TopCrowd](https://github.com/topcoder-platform/private-talent-cloud)
- [Customer Marketing](https://www.topcoder.com) - Wordpress
- [Member Marketing](https://github.com/topcoder-platform/community-app)

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
  }(window,document,"script","//uni-nav.topcoder.com/v1/tc-universal-nav.js","tcUniNav");
</script>
```

Once included the above script, you can immediately call `tcUniNav()` to initialize the navigation.

There are 2 sample integrations in the "demo" folder: `tc-app.html` and `tc-tool-app.html`.

>**NOTE** Each application will need to determine which version of the nav it uses by setting the URL for the script. See [Versioning](#versioning) for more info.

## API for tcUniNav
`tcUniNav(method, targetId, config)`

| Parameter               | Type                                 | Required                  | Description                                                                | Default value |
|-------------------------|--------------------------------------|---------------------------|----------------------------------------------------------------------------|---------------|
| method                  | Enum: 'init' \| 'update'             | yes                       | The method to be called                                                    |               |
| targetId                | string(html element id)              | yes                       | target element for the navigation to be rendered on                        | none          |
| config                  | object                               | no                        | The config object for the specific navigation type                         | {}            |
| config.type             | Enum: 'marketing' \| 'tool' \| 'footer'  | yes                   | The type of navigation to render                                           |               |
| config.onReady          | () => void                           | no                        | Callback function called when the navigation was rendered                  | none          |
| config.signIn           | () => void                           | no                        | Called when the user clicks the Log in button                              | none          |
| config.signOut          | () => void                           | no                        | Called when the user clicks the Log out button                             | none          |
| config.signUp           | () => void                           | no                        | Called when the user clicks sign up/register                               | none          |
| config.toolName         | string                               | yes (for tool nav update) | The name of the tool as it should appear in the header                     | none          |
| config.toolRoute        | string                               | yes (for tool nav update) | The route to the tool as it should appear in the header                    | none          |
| config.user             | {photoURL, userId, initials, handle} | no                        | The logged in user                                                         | {}            |
| config.handleNavigation | (route: {path, label}) => void       | no                        | Allow for external handling of route navigation (eg. via react-router-dom) | none          |

## Methods

###### `init`
The `init` method can be called one single time for the same `targetId`. If the init method is called more than one time, the navigation will throw an error and won't do anything.

###### `update`
The `update` needs to be called only after `init` was already called. If it's called before the navigation will throw an error mentioning that init needs to be called first.
After `init` was called, you should call only `update` for further updates.

>**NOTE** Both methods accept the same config object as mentioned in the previous section [API for tcUniNav](#api-for-tcuninav).

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
  tcUniNav('update', 'navigation-el', {toolName: 'Self-service Challenges', toolRoot: '/work'})
```

## Footer Navigation
The component renders the footer for the page
```
  tcUniNav('init', 'footer-navigation-el', {...config, type: 'footer'})
```

## Recommended IDE Setup   
[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).


## Versioning

There are currently prod and dev versions of the library located at:

https://uni-nav.topcoder.com/v#/tc-universal-nav.js

https://uni-nav.topcoder-dev.com/v#/tc-universal-nav.js

Each application will need to determine which version of the nav it uses by setting the URL for the script.

For example, non-production environments will probably want to point to the script hosted on  `//uni-nav.topcoder-dev.com`

### Minor Version upgrades

Minor version updates will be rolled out silently to all clients.

### Major Version upgrades

Major changes will be versioned for incremental rollout using the script path (e.g. `/v2/tc-universal-nav.js`).

Information regarding the changes will be disseminated to all clients, and each client will be responsible for migrating to the new version before the prior version is deprecated.

## Development
### `npm run dev`
Run `npm run dev` to start a local development server. This will build the application and will serve `index.html`'s contents.
At the moment of writing, `index.html` will instantiate all 3 types of navigation: marketing, tool, footer, and will pass the user data to them after 3 seconds.

### `npm run build`
Run `npm run build` to build the files for production. The output is to be found in the `dist` folder.

### Using the demo files
The `demo` files are just basic (bare minimum) example of how to integrate the navigation in a simple html file.

Run `npm run demo`. This will spin up 3 `http-server`s:
- localhost:8080 will serve the dist files
- localhost:8081 will serve the marketing navigation demo file
- localhost:8082 will serve the tool navigation demo file
>**NOTE** you need to run `npm run build` to build the navigation files before running the demo files.

