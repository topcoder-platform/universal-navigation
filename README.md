# Topcoder Universal Navigation

Universal Navigation (UniNav) for the entire Topcoder websphere.

In order to create a unified user experience for all Topcoder properties, common navigation components are integrated into all of them.

The following README offers instructions for integrating the UniNav into a web property.

For information on how to develop/maintain the UniNav component itself, please see the [UniNav README](./src/README.md).

- [Introduction](#introduction)
    - [Web Properties Using UniNav](#web-properties-using-uninav)
    - [Navigation Types](#navigation-types)
- [CORS](#cors)
    - [Development CORS](#development-cors)
    - [Production CORS](#production-cors)
- [Instructions](#instructions)
    - [1. Include tcUniNav JS Snippet](#1-include-tcuninav-js-snippet)
    - [2. Initialize tcUniNav](#2-initialize-tcuninav)
    - [3. Update tcUniNav](#3-update-tcuninav)
- [Futher Reading](#further-reading)
    - [Environment Files](#environment-files)
    - [Versioning](#versioning)
    - [API for tcUniNav](#api-for-tcuninav)
    - [tcUniNav Methods](#tcuninav-methods)
    - [Typescript Support](#typescript-support)

## Introduction

### Web Properties using UniNav

The following properties use the UniNav for the MVP:

- [Platform UI](https://github.com/topcoder-platform/platform-ui)
- [PACTS](https://github.com/topcoder-platform/tc-website)
- [Forums](https://github.com/topcoder-platform/forums)
- [Online Review](https://github.com/topcoder-platform/tc-online-review)
- [TopCrowd](https://github.com/topcoder-platform/private-talent-cloud)
- [Customer Marketing](https://www.topcoder.com) - Wordpress
- [Member Marketing](https://github.com/topcoder-platform/community-app)

### Navigation Types

The UniNav comprises 3 parts, `'marketing' | 'tool' | 'footer'`, which are described here.

#### Marketing Navigation

This navigation is rendered only on the marketing part of topcoder (eg. https://www.topcoder.com/how-it-works/, https://www.topcoder.com/the-community/).

The configuration is static and is defined in [marketing-nav-items.ts](./src/lib/config/nav-menu/marketing-nav-items.ts).

#### Tool Navigation

This navigation is rendered for all non-marketing web properites (e.g https://platform-ui.topcoder.com/learn, https://platform-ui.topcoder.com/work).

The navigation configuration is supplied upon initialization by the tool itself. See [2. Initialize tcUnNav](#2-initialize-tcuninav) for more info.

#### Footer Navigation

This navigation is rendered for all web properties, regardless if they're marketing sites or tools.

The navigation is static and is defined in [footer-nav-items.ts](./src/lib/config/nav-menu/footer-nav-items.ts).

## CORS

CORS will need to be set up for the origin that's using the UniNav script.

The allowed origins for the dev instance of the script are different from the prod instance.

CORS origins are configured in the IAC deployment config [../iac/uni-nav.deploy.yml](../iac/uni-nav.deploy.yml).

See the [IAC README](../iac/README.md) for instructions for deploying the stack.

### Development CORS

The dev version of the UniNav script allows the following origins.

Customer & Member Mktg
- https://topcoder.com
- https://www.topcoder.com
- https://topcoder-dev.com
- https://www.topcoder-dev.com

Forum
- https://discussions.topcoder-dev.com
- https://vanilla.topcoder-dev.com

Member Marketing
- https://community-app.topcoder-dev.com
- https://test-community-app.topcoder-dev.com
- https://qa-community-app.topcoder-dev.com

Online Review
- https://software.topcoder-dev.com
- http://local.topcoder-dev.com:8080

PACTS
- https://community.topcoder-dev.com
- https://local.topcoder-dev.com
- http://local.tc.cloud.topcoder.com

Platform UI
- https://platform-ui.topcoder-dev.com
- https://local.topcoder-dev.com

TopCrowd
- http://127.0.0.1:3000
- http://localhost:3000
- https://topcrowd.dev.topcoder.com
- https://qa.dev.privatetalent.cloud

### Production CORS

The dev version of the UniNav script allows the following origins.

Customer & Member Mktg
- https://topcoder.com
- https://www.topcoder.com

Forum
- https://discussions.topcoder.com
- https://vanilla.topcoder.com

Member Marketing Prod, Beta, & Staging
- https://community-app.topcoder.com
- https://beta-community-app.topcoder.com
- https://staging-community-app.topcoder.com

Online Review
- https://software.topcoder.com

PACTS
- https://community.topcoder.com

Platform UI
- https://platform-ui.topcoder.com

TopCrowd
- https://topcoder.privatetalent.cloud
- https://topcrowd.topcoder.com

## Instructions

### 1. Include tcUniNav JS Snippet

Include the main script in your application's main html:

```
<script>
  !function(n,t,e,a,c,i,o){n['TcUnivNavConfig']=c,n[c]=n[c]||function(){
  (n[c].q=n[c].q??[]).push(arguments)},n[c].l=1*new Date();i=t.createElement(e),
  o=t.getElementsByTagName(e)[0];i.async=1;i.type="module";i.src=a;o.parentNode.insertBefore(i,o)
  }(window,document,"script","//uni-nav.topcoder.com/v1/tc-universal-nav.js","tcUniNav");
</script>
```

>**NOTE** Each application will need to determine which version of the nav it uses by setting the URL for the script. See [Versioning](#versioning) for more info.

### 2. Initialize tcUniNav

Once the above script is included, you can immediately call `tcUniNav()` to initialize the navigation.

#### Init Marketing Nav
```
tcUniNav(
    'init',
    'ui-nav',
    {
        handleNavigation({ route: {label: string, path: string} }){ ... },
        onReady() {...},
        signIn() {...},
        signUp() {...},
        signOut() {...},
        type: 'marketing',
        user: {...},
    },
);

```

#### Init Tool Nav
```
tcUniNav(
    'init',
    'ui-nav',
    {
        handleNavigation({ route: {label: string, path: string} }){ ... },
        onReady() {...},
        signIn() {...},
        signUp() {...},
        signOut() {...},
        toolName: 'Tc Tool App',
        toolRoot: '/',
        type: 'tool',
        user: {...},
    },
);

```

#### Init Footer Nav
```
tcUniNav(
    'init',
    'ui-nav',
    {
        type: 'footer',
    },

    supportMeta: {
      challengeId: '<challenge-uuid>',
      isSelfService: false,
    },
);

```

### 3. Update tcUniNav

If your application supports multiple tools or retrieves the user info after the page is rendered, you can use the `update` method to reconfigure the UniNav dynamically.

```
tcUniNav(
    'update',
    'ui-nav',
    {
        toolName: 'Tc Tool App',
        toolRoot: '/',
    }
)

tcUniNav(
    'update',
    'ui-nav',
    {
        user: {
            photoURL: 'https://topcoder-prod-media.s3.amazonaws.com/member/profile/vasilica.olariu-1616487120406.png',
            userId: 11111111,
            handle: 'john.doe',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@topcoder.com'
        }
    }
)
```

## Further Reading

### Environment files
You need to have an environment file in order to correctly build and pass the right variables to the build.
Easiest way to create your local environment file is to copy one of the uni-nav.env.* (dev or prod) file to a `.env.local` file.
`.env.local` files will be ignored by git and so you don't need to worry about versioning.

`uni-nav.env.dev` and `uni-nav.env.prod` are used on the CI/CD process and copied to `S3: tc-uninav-[dev|prod]/securitymanage`.

### Versioning

There are currently prod and dev instances of the library located at:

https://uni-nav.topcoder.com/v1/tc-universal-nav.js

https://uni-nav.topcoder-dev.com/v1/tc-universal-nav.js

Each application will need to determine which instance of the nav it uses by setting the URL for the script.

For example, non-production environments will probably want to point to the script hosted on  `//uni-nav.topcoder-dev.com`

#### Minor Version upgrades

Minor versions are tested in the dev environment for affected properties (i.e. changes to the marketing nav don't need to be tested in the tools) then rolled out silently to all clients in production.

#### Major Version upgrades

Major changes are versioned for incremental rollout using the script path (e.g. `/v2/tc-universal-nav.js`).

Information regarding the changes will be disseminated to the owners of all properties, and each owner will be responsible for migrating to the new version before the prior version is deprecated.

### API for tcUniNav
`tcUniNav(method, targetId, config)`

| Parameter               | Type                                         | Required                | Description                                                                              | Default value |
|-------------------------|----------------------------------------------|-------------------------|------------------------------------------------------------------------------------------|---------------|
| method                  | Enum: 'init' \| 'update' \| 'triggerFlow'    | yes                     | The method to be called                                                                  |               |
| targetId                | string(html element id)                      | yes                     | target element for the navigation to be rendered on                                      | none          |
| config                  | object                                       | no                      | The config object for the specific navigation type                                       | {}            |
| config.handleNavigation | (route: {path, label}) => void               | no                      | Allow for external handling of route navigation (eg. via react-router-dom)               | none          |
| config.onReady          | () => void                                   | no                      | Callback function called when the navigation was rendered                                | none          |
| config.signIn           | () => void                                   | yes (except for footer) | Called when the user clicks the Log in button                                            | none          |
| config.signOut          | () => void                                   | yes (except for footer) | Called when the user clicks the Log out button                                           | none          |
| config.signUp           | () => void                                   | yes (except for footer) | Called when the user clicks sign up/register                                             | none          |
| config.toolName         | string                                       | yes (tool nav only)     | The name of the tool as it should appear in the header                                   | none          |
| config.toolRoot         | string                                       | yes (tool nav only)     | The route to the tool as it should appear in the header                                  | none          |
| config.fullFooter       | boolean                                      | no                      | Shows the full footer navigation when it is true                                         | false         |
| config.type             | Enum: 'marketing' \| 'tool' \| 'footer'      | yes                     | The type of navigation to render                                                         |               |
| config.user             | 'auto'                                       | no                      | Instruct the uni-nav to auto-fetch user profile info based on the `tcjwt` cookie value   | {}            |
| config.user             | {photoURL, userId, initials, handle}         | no                      | The logged in user                                                                       | {}            |
| config.supportMeta      | {challengeId, isSelfService}                 | no                      | Additional meta data to be sent along with any support ticket created by the user        |               |

### User Model
You can either pass user's details as described by the `AuthUser` interface, or pass a value of `auto` and uni-nav will automatically fetch user's details from the api based on the tcjwt auth cookie.

```
export interface AuthUser {
  photoUrl?: string
  userId: string | number
  handle: string

  // first & last names used to compose & render
  // the user avatar when the user has no avatar
  firstName: string
  lastName: string
  email: string
}
```


### tcUniNav Methods

The `init` method can only be called one single time for the same `targetId`. If the init method is called more than one time, the navigation will throw an error and won't do anything.

The `update` needs to be called only after `init` was already called. If it's called before initialization, the navigation will throw an error mentioning that init needs to be called first.

After `init` is called, you should call only `update` for further updates.

>**NOTE** Both methods accept the same config object as mentioned in the previous section [API for tcUniNav](#api-for-tcuninav).

### Typescript Support

Typescript type declarations (i.e. `*.d.ts`) can be sourced from the Github repo in the devDependencies of your package.json:

`        "universal-navigation": "https://github.com/topcoder-platform/universal-navigation", `

This package acts the same as any other npm package re updates/upgrades. You can update to pull the latest version (i.e `npm run update` or `yarn upgrade`).
