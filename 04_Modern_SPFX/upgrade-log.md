# Upgrade project 04_Modern_SPFX to v1.10.0

Date: 2024-11-6

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

In file [src\webparts\helloWorld\HelloWorldWebPart.ts](src\webparts\helloWorld\HelloWorldWebPart.ts) update the code as follows:

```ts
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

File: [src\webparts\helloWorld\HelloWorldWebPart.ts:4:1](src\webparts\helloWorld\HelloWorldWebPart.ts)

### FN016004 Property pane property import change to @microsoft/sp-property-pane | Required

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package

In file [src\webparts\steuerelemente\SteuerelementeWebPart.ts](src\webparts\steuerelemente\SteuerelementeWebPart.ts) update the code as follows:

```ts
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

File: [src\webparts\steuerelemente\SteuerelementeWebPart.ts:2:1](src\webparts\steuerelemente\SteuerelementeWebPart.ts)

### FN016004 Property pane property import change to @microsoft/sp-property-pane | Required

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package

In file [src\webparts\testWebpart\TestWebpartWebPart.ts](src\webparts\testWebpart\TestWebpartWebPart.ts) update the code as follows:

```ts
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

File: [src\webparts\testWebpart\TestWebpartWebPart.ts:4:1](src\webparts\testWebpart\TestWebpartWebPart.ts)

### FN016004 Property pane property import change to @microsoft/sp-property-pane | Required

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package

In file [src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.ts](src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.ts) update the code as follows:

```ts
import { IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneToggle } from "@microsoft/sp-property-pane";
```

File: [src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.ts:2:1](src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.ts)

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

In file [src\webparts\helloWorld\components\HelloWorld.module.scss](src\webparts\helloWorld\components\HelloWorld.module.scss) update the code as follows:

```scss
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss'
```

File: [src\webparts\helloWorld\components\HelloWorld.module.scss](src\webparts\helloWorld\components\HelloWorld.module.scss)

### FN022001 Scss file import | Required

Remove scss file import

In file [src\webparts\testWebpart\components\TestWebpart.module.scss](src\webparts\testWebpart\components\TestWebpart.module.scss) update the code as follows:

```scss
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss'
```

File: [src\webparts\testWebpart\components\TestWebpart.module.scss](src\webparts\testWebpart\components\TestWebpart.module.scss)

### FN022002 Scss file import | Optional

Add scss file import

In file [src\webparts\helloWorld\components\HelloWorld.module.scss](src\webparts\helloWorld\components\HelloWorld.module.scss) update the code as follows:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src\webparts\helloWorld\components\HelloWorld.module.scss](src\webparts\helloWorld\components\HelloWorld.module.scss)

### FN022002 Scss file import | Optional

Add scss file import

In file [src\webparts\testWebpart\components\TestWebpart.module.scss](src\webparts\testWebpart\components\TestWebpart.module.scss) update the code as follows:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src\webparts\testWebpart\components\TestWebpart.module.scss](src\webparts\testWebpart\components\TestWebpart.module.scss)

### FN011011 Web part manifest supportedHosts | Required

Update the supportedHosts property in the manifest

In file [src\webparts\crudPnpSp\CrudPnpSpWebPart.manifest.json](src\webparts\crudPnpSp\CrudPnpSpWebPart.manifest.json) update the code as follows:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

File: [src\webparts\crudPnpSp\CrudPnpSpWebPart.manifest.json](src\webparts\crudPnpSp\CrudPnpSpWebPart.manifest.json)

### FN011011 Web part manifest supportedHosts | Required

Update the supportedHosts property in the manifest

In file [src\webparts\helloWorld\HelloWorldWebPart.manifest.json](src\webparts\helloWorld\HelloWorldWebPart.manifest.json) update the code as follows:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

File: [src\webparts\helloWorld\HelloWorldWebPart.manifest.json](src\webparts\helloWorld\HelloWorldWebPart.manifest.json)

### FN011011 Web part manifest supportedHosts | Required

Update the supportedHosts property in the manifest

In file [src\webparts\steuerelemente\SteuerelementeWebPart.manifest.json](src\webparts\steuerelemente\SteuerelementeWebPart.manifest.json) update the code as follows:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

File: [src\webparts\steuerelemente\SteuerelementeWebPart.manifest.json](src\webparts\steuerelemente\SteuerelementeWebPart.manifest.json)

### FN011011 Web part manifest supportedHosts | Required

Update the supportedHosts property in the manifest

In file [src\webparts\testWebpart\TestWebpartWebPart.manifest.json](src\webparts\testWebpart\TestWebpartWebPart.manifest.json) update the code as follows:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

File: [src\webparts\testWebpart\TestWebpartWebPart.manifest.json](src\webparts\testWebpart\TestWebpartWebPart.manifest.json)

### FN011011 Web part manifest supportedHosts | Required

Update the supportedHosts property in the manifest

In file [src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.manifest.json](src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.manifest.json) update the code as follows:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

File: [src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.manifest.json](src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.manifest.json)

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
mkdir C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX/teams
```

File: [teams](teams)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\7362bab8-93c0-4b96-a346-80a8cd167f39_outline.png
```

File: [teams\7362bab8-93c0-4b96-a346-80a8cd167f39_outline.png](teams\7362bab8-93c0-4b96-a346-80a8cd167f39_outline.png)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_outline.png
```

File: [teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_outline.png](teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_outline.png)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\9fe74b73-8573-4c49-b623-97e7408b4364_outline.png
```

File: [teams\9fe74b73-8573-4c49-b623-97e7408b4364_outline.png](teams\9fe74b73-8573-4c49-b623-97e7408b4364_outline.png)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\c315b194-f38e-493f-885e-b03d718e15b1_outline.png
```

File: [teams\c315b194-f38e-493f-885e-b03d718e15b1_outline.png](teams\c315b194-f38e-493f-885e-b03d718e15b1_outline.png)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_outline.png
```

File: [teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_outline.png](teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_outline.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\7362bab8-93c0-4b96-a346-80a8cd167f39_color.png
```

File: [teams\7362bab8-93c0-4b96-a346-80a8cd167f39_color.png](teams\7362bab8-93c0-4b96-a346-80a8cd167f39_color.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_color.png
```

File: [teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_color.png](teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_color.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\9fe74b73-8573-4c49-b623-97e7408b4364_color.png
```

File: [teams\9fe74b73-8573-4c49-b623-97e7408b4364_color.png](teams\9fe74b73-8573-4c49-b623-97e7408b4364_color.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\c315b194-f38e-493f-885e-b03d718e15b1_color.png
```

File: [teams\c315b194-f38e-493f-885e-b03d718e15b1_color.png](teams\c315b194-f38e-493f-885e-b03d718e15b1_color.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_color.png
```

File: [teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_color.png](teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_color.png)

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

### FN010002 .yo-rc.json isCreatingSolution | Recommended

Update isCreatingSolution in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "isCreatingSolution": true
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

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
mkdir C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX/teams
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\7362bab8-93c0-4b96-a346-80a8cd167f39_outline.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_outline.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\9fe74b73-8573-4c49-b623-97e7408b4364_outline.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\c315b194-f38e-493f-885e-b03d718e15b1_outline.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_outline.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\7362bab8-93c0-4b96-a346-80a8cd167f39_color.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\fb5fbc15-1e55-489e-b32d-ab2436c3a332_color.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\9fe74b73-8573-4c49-b623-97e7408b4364_color.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\c315b194-f38e-493f-885e-b03d718e15b1_color.png
cp C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Users\adrian.TOP\Desktop\ProgrammierungAllgemein\GitHub Repos\SharePoint_Anwendungsentwicklung\04_Modern_SPFX\teams\92752db3-bbde-42fc-b435-4f2429bf4ab4_color.png
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

#### [src\webparts\helloWorld\HelloWorldWebPart.ts](src\webparts\helloWorld\HelloWorldWebPart.ts)

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package:

```ts
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

#### [src\webparts\steuerelemente\SteuerelementeWebPart.ts](src\webparts\steuerelemente\SteuerelementeWebPart.ts)

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package:

```ts
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

#### [src\webparts\testWebpart\TestWebpartWebPart.ts](src\webparts\testWebpart\TestWebpartWebPart.ts)

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package:

```ts
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
```

#### [src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.ts](src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.ts)

Refactor the code to import property pane property from the @microsoft/sp-property-pane npm package instead of the @microsoft/sp-webpart-base package:

```ts
import { IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneToggle } from "@microsoft/sp-property-pane";
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

Update isCreatingSolution in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "isCreatingSolution": true
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

#### [src\webparts\helloWorld\components\HelloWorld.module.scss](src\webparts\helloWorld\components\HelloWorld.module.scss)

Remove scss file import:

```scss
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss'
```

Add scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

#### [src\webparts\testWebpart\components\TestWebpart.module.scss](src\webparts\testWebpart\components\TestWebpart.module.scss)

Remove scss file import:

```scss
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss'
```

Add scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

#### [src\webparts\crudPnpSp\CrudPnpSpWebPart.manifest.json](src\webparts\crudPnpSp\CrudPnpSpWebPart.manifest.json)

Update the supportedHosts property in the manifest:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

#### [src\webparts\helloWorld\HelloWorldWebPart.manifest.json](src\webparts\helloWorld\HelloWorldWebPart.manifest.json)

Update the supportedHosts property in the manifest:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

#### [src\webparts\steuerelemente\SteuerelementeWebPart.manifest.json](src\webparts\steuerelemente\SteuerelementeWebPart.manifest.json)

Update the supportedHosts property in the manifest:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

#### [src\webparts\testWebpart\TestWebpartWebPart.manifest.json](src\webparts\testWebpart\TestWebpartWebPart.manifest.json)

Update the supportedHosts property in the manifest:

```json
{
  "supportedHosts": ["SharePointWebPart"]
}
```

#### [src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.manifest.json](src\webparts\webparteigenschaften\WebparteigenschaftenWebPart.manifest.json)

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