# UniNav Development Information

This README provides instructions on how to develop the UniNav itself. 

For information re how to integrate the UniNav into a web property, see the main [README](../README.md).

- [Architecture Diagram](#architecture-diagram)
- [Infrastructure](#infrastructure)
- [Local App Development](#local-app-development)
    - [Serve the local app](#serve-the-local-app)
    - [Demo Apps](#demo-apps)
        - [Instructions for using the Demo Apps](#instructions-for-using-the-demo-apps)
- [Production Distribution](#production-distribution)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Typescript Type Declaration Generation](#typescript-type-declaration-generation)

## Architecture Diagram

![Basic Architecture Diagram](../docs/UniNav_Diagram.png "Universal Nav Architecture Drawing")

## Infrastructure

The UniNav JS is stored in S3 with a CloudFront CDN, and the JS files are cached and compressed.

See [IAC README](../iac/README.md) for more details.

## Local App Development

### Serve the local app

[`../index.html`](../index.html) instantiates all 3 types of navigation (marketing, tool, footer) and will pass the user data to them after 3 seconds.

Run `% npm run dev` to view the app at http://localhost:5173/.

### Demo Apps

The `demo` files are just basic (bare minimum) example of how to integrate the navigation in a simple html file.

There are 2 sample integrations in the [/demo](./demo/) folder: 

[Marketing Navigation](../demo/marketing/index.html)

[Tool Navigation](../demo/tool/index.html)

#### Instructions for using the Demo Apps

1. Build the navigation files
    - `% npm run build`

2. Serve the demo app
    - `% npm run demo`
    - http://localhost:8083

3. Navigate to the specific nav:
    - Marketing Nav: http://localhost:8081
    - Tool Nav: http://localhost:8082

## Production Distribution

Run `npm run build` to build the files for production. The output is to be found in the `dist` folder.

The build reads the app version in `package.json` and automatically outputs the files in the correct directory.

## Recommended IDE Setup   

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Typescript Type Declaration Generation

Typescript type declarations (i.e. `*.d.ts`) are automatically generated for each branch as part of the Github build worklow.

After pushing changes to Github, Github builds the app and automatically runs the command to generate types. 

If there are any differences, Github automatically commits those into the branch.

If a PR exists for a branch that has out of date types, the PR will display an error until the types are generated and committed, but it will not pervent the merging of the PR.

>**NOTE** In order to disseminate updates to the types via npm, you must increment the version number in the [../package.json](../package.json).
