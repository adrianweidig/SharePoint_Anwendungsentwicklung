# Upgrade project 04_Modern_SPFX to v1.10.0

Date: 2024-7-31

## Findings

Following is the list of steps required to upgrade your project to SharePoint Framework version 1.10.0. [Summary](#Summary) of the modifications is included at the end of the report.

### FN001001 @microsoft/sp-core-library | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-core-library

Execute the following command:

```sh
npm i -SE @microsoft/sp-core-library@1.10.0
```

File: [./package.json](./package.json)

### FN001002 @microsoft/sp-lodash-subset | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-lodash-subset

Execute the following command:

```sh
npm i -SE @microsoft/sp-lodash-subset@1.10.0
```

File: [./package.json](./package.json)

### FN001003 @microsoft/sp-office-ui-fabric-core | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-office-ui-fabric-core

Execute the following command:

```sh
npm i -SE @microsoft/sp-office-ui-fabric-core@1.10.0
```

File: [./package.json](./package.json)

### FN001004 @microsoft/sp-webpart-base | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-webpart-base

Execute the following command:

```sh
npm i -SE @microsoft/sp-webpart-base@1.10.0
```

File: [./package.json](./package.json)

### FN001021 @microsoft/sp-property-pane | Required

Install SharePoint Framework dependency package @microsoft/sp-property-pane

Execute the following command:

```sh
npm i -SE @microsoft/sp-property-pane@1.10.0
```

File: [./package.json](./package.json)

### FN002001 @microsoft/sp-build-web | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-build-web

Execute the following command:

```sh
npm i -DE @microsoft/sp-build-web@1.10.0
```

File: [./package.json](./package.json)

### FN002002 @microsoft/sp-module-interfaces | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-module-interfaces

Execute the following command:

```sh
npm i -DE @microsoft/sp-module-interfaces@1.10.0
```

File: [./package.json](./package.json)

### FN002003 @microsoft/sp-webpart-workbench | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-webpart-workbench

Execute the following command:

```sh
npm i -DE @microsoft/sp-webpart-workbench@1.10.0
```

File: [./package.json](./package.json)

### FN002009 @microsoft/sp-tslint-rules | Required

Install SharePoint Framework dev dependency package @microsoft/sp-tslint-rules

Execute the following command:

```sh
npm i -DE @microsoft/sp-tslint-rules@1.10.0
```

File: [./package.json](./package.json)

### FN002012 @microsoft/rush-stack-compiler-3.3 | Required

Install SharePoint Framework dev dependency package @microsoft/rush-stack-compiler-3.3

Execute the following command:

```sh
npm i -DE @microsoft/rush-stack-compiler-3.3@0.3.5
```

File: [./package.json](./package.json)

### FN012017 tsconfig.json extends property | Required

Update tsconfig.json extends property

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.3/includes/tsconfig-web.json"
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN016004 Property pane property import change to @microsoft/sp-property-pane | Required

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package

In file [src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.ts](src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.ts) update the code as follows:

```ts
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

File: [src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.ts:4:1](src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.ts)

### FN001005 @types/react | Required

Upgrade SharePoint Framework dependency package @types/react

Execute the following command:

```sh
npm i -SE @types/react@16.8.8
```

File: [./package.json](./package.json)

### FN001006 @types/react-dom | Required

Upgrade SharePoint Framework dependency package @types/react-dom

Execute the following command:

```sh
npm i -SE @types/react-dom@16.8.3
```

File: [./package.json](./package.json)

### FN001022 office-ui-fabric-react | Required

Install SharePoint Framework dependency package office-ui-fabric-react

Execute the following command:

```sh
npm i -SE office-ui-fabric-react@6.189.2
```

File: [./package.json](./package.json)

### FN010001 .yo-rc.json version | Recommended

Update version in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.9.1"
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN020001 @types/react | Required

Add resolution for package @types/react

In file [./package.json](./package.json) update the code as follows:

```json
{
  "resolutions": {
    "@types/react": "16.8.8"
  }
}
```

File: [./package.json](./package.json)

### FN001008 react | Required

Upgrade SharePoint Framework dependency package react

Execute the following command:

```sh
npm i -SE react@16.8.5
```

File: [./package.json](./package.json)

### FN001009 react-dom | Required

Upgrade SharePoint Framework dependency package react-dom

Execute the following command:

```sh
npm i -SE react-dom@16.8.5
```

File: [./package.json](./package.json)

### FN022001 Scss file import | Required

Remove scss file import

In file [src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss](src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss) update the code as follows:

```scss
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss'
```

File: [src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss](src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss)

### FN022002 Scss file import | Optional

Add scss file import

In file [src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss](src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss) update the code as follows:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss](src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss)

### FN011011 Web part manifest supportedHosts | Required

Update the supportedHosts property in the manifest

In file [src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.manifest.json](src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.manifest.json) update the code as follows:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

File: [src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.manifest.json](src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.manifest.json)

### FN012014 tsconfig.json compiler options inlineSources | Required

Update tsconfig.json inlineSources value

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "inlineSources": false
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012015 tsconfig.json compiler options strictNullChecks | Required

Update tsconfig.json strictNullChecks value

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012016 tsconfig.json compiler options noUnusedLocals | Required

Update tsconfig.json noUnusedLocals value

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "noUnusedLocals": false
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN018001 Web part Microsoft Teams tab resources folder | Optional

Create folder for Microsoft Teams tab resources

Execute the following command:

```sh
mkdir E:\Programmierung\SharePoint\SharePoint_Anwendungsentwicklung\04_Modern_SPFX/teams
```

File: [teams](teams)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Program Files\NVM\v8.17.0\node_modules\@pnp\generator-spfx\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png E:\Programmierung\SharePoint\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\b961ace2-d01c-4fbf-b7df-76faf3083278_outline.png
```

File: [teams\b961ace2-d01c-4fbf-b7df-76faf3083278_outline.png](teams\b961ace2-d01c-4fbf-b7df-76faf3083278_outline.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Program Files\NVM\v8.17.0\node_modules\@pnp\generator-spfx\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png E:\Programmierung\SharePoint\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\b961ace2-d01c-4fbf-b7df-76faf3083278_color.png
```

File: [teams\b961ace2-d01c-4fbf-b7df-76faf3083278_color.png](teams\b961ace2-d01c-4fbf-b7df-76faf3083278_color.png)

### FN006003 package-solution.json isDomainIsolated | Required

Update package-solution.json isDomainIsolated

In file [./config/package-solution.json](./config/package-solution.json) update the code as follows:

```json
{
  "solution": {
    "isDomainIsolated": false
  }
}
```

File: [./config/package-solution.json](./config/package-solution.json)

### FN010007 .yo-rc.json isDomainIsolated | Recommended

Update isDomainIsolated in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "isDomainIsolated": false
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN002008 tslint-microsoft-contrib | Required

Install SharePoint Framework dev dependency package tslint-microsoft-contrib

Execute the following command:

```sh
npm i -DE tslint-microsoft-contrib@5.0.0
```

File: [./package.json](./package.json)

### FN012011 tsconfig.json compiler options outDir | Required

Update tsconfig.json outDir value

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "outDir": "lib"
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012012 tsconfig.json include property | Required

Update tsconfig.json include property

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "include": [
    "src/**/*.ts"
  ]
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012013 tsconfig.json exclude property | Required

Update tsconfig.json exclude property

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "exclude": [
    "node_modules",
    "lib"
  ]
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN017001 Run npm dedupe | Optional

If, after upgrading npm packages, when building the project you have errors similar to: "error TS2345: Argument of type 'SPHttpClientConfiguration' is not assignable to parameter of type 'SPHttpClientConfiguration'", try running 'npm dedupe' to cleanup npm packages.

Execute the following command:

```sh
npm dedupe
```

File: [./package.json](./package.json)

## Summary

### Execute script

```sh
npm i -SE @microsoft/sp-core-library@1.10.0 @microsoft/sp-lodash-subset@1.10.0 @microsoft/sp-office-ui-fabric-core@1.10.0 @microsoft/sp-webpart-base@1.10.0 @microsoft/sp-property-pane@1.10.0 @types/react@16.8.8 @types/react-dom@16.8.3 office-ui-fabric-react@6.189.2 react@16.8.5 react-dom@16.8.5
npm i -DE @microsoft/sp-build-web@1.10.0 @microsoft/sp-module-interfaces@1.10.0 @microsoft/sp-webpart-workbench@1.10.0 @microsoft/sp-tslint-rules@1.10.0 @microsoft/rush-stack-compiler-3.3@0.3.5 tslint-microsoft-contrib@5.0.0
npm dedupe
mkdir E:\Programmierung\SharePoint\SharePoint_Anwendungsentwicklung\04_Modern_SPFX/teams
cp C:\Program Files\NVM\v8.17.0\node_modules\@pnp\generator-spfx\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png E:\Programmierung\SharePoint\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\b961ace2-d01c-4fbf-b7df-76faf3083278_outline.png
cp C:\Program Files\NVM\v8.17.0\node_modules\@pnp\generator-spfx\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png E:\Programmierung\SharePoint\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\b961ace2-d01c-4fbf-b7df-76faf3083278_color.png
```

### Modify files

#### [./tsconfig.json](./tsconfig.json)

Update tsconfig.json extends property:

```json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.3/includes/tsconfig-web.json"
}
```

Update tsconfig.json inlineSources value:

```json
{
  "compilerOptions": {
    "inlineSources": false
  }
}
```

Update tsconfig.json strictNullChecks value:

```json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

Update tsconfig.json noUnusedLocals value:

```json
{
  "compilerOptions": {
    "noUnusedLocals": false
  }
}
```

Update tsconfig.json outDir value:

```json
{
  "compilerOptions": {
    "outDir": "lib"
  }
}
```

Update tsconfig.json include property:

```json
{
  "include": [
    "src/**/*.ts"
  ]
}
```

Update tsconfig.json exclude property:

```json
{
  "exclude": [
    "node_modules",
    "lib"
  ]
}
```

#### [src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.ts](src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.ts)

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package:

```ts
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

#### [./.yo-rc.json](./.yo-rc.json)

Update version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.9.1"
  }
}
```

Update isDomainIsolated in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "isDomainIsolated": false
  }
}
```

#### [./package.json](./package.json)

Add resolution for package @types/react:

```json
{
  "resolutions": {
    "@types/react": "16.8.8"
  }
}
```

#### [src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss](src\webparts\erstesSpfxWebpart\components\ErstesSpfxWebpart.module.scss)

Remove scss file import:

```scss
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss'
```

Add scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

#### [src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.manifest.json](src\webparts\erstesSpfxWebpart\ErstesSpfxWebpartWebPart.manifest.json)

Update the supportedHosts property in the manifest:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

#### [./config/package-solution.json](./config/package-solution.json)

Update package-solution.json isDomainIsolated:

```json
{
  "solution": {
    "isDomainIsolated": false
  }
}
```