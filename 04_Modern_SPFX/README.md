# 04-modern-spfx

Dieses Projekt verwendet [React](https://reactjs.org).

## Überblick über die Dateien eines SPFx Webparts am Beispiel von src/webparts/steuerelemente

Bei der Entwicklung eines SharePoint Framework (SPFx) Webparts sind die verschiedenen Dateien für unterschiedliche Aspekte der Implementierung und Funktionalität des Webparts verantwortlich. Hier ist eine Erklärung zur Verwendung und dem Inhalt jeder Datei:

**ISteuerelementeProps.ts:**
Beschreibung: Diese Datei definiert die Eigenschaften (Props), die an die React-Komponente übergeben werden. Sie enthält die Schnittstellendefinition für die Eigenschaften, die das Webpart benötigt.
Inhalt: Schnittstelle mit den erforderlichen Eigenschaften für die Komponente.
Beispiel:

```typescript
export interface ISteuerelementeProps {
  description: string;
  // Weitere Eigenschaften, die das Webpart benötigt
}
```

**Steuerelemente.module.scss:**
Beschreibung: Diese Datei enthält die SCSS-Stylesheets für das Webpart. Es wird verwendet, um die CSS-Stile zu definieren, die auf das Webpart angewendet werden.
Inhalt: SCSS-Code für das Styling des Webparts.
Beispiel:

```scss
.steuerelemente {
  font-size: 16px;
  color: #333;
  // Weitere Styles
}
```

**Steuerelemente.tsx:**
Beschreibung: Dies ist die Haupt-React-Komponente des Webparts. Sie implementiert die Benutzeroberfläche und verwendet die in der ISteuerelementeProps.ts definierten Eigenschaften.
Inhalt: React-Komponenten-Code.
Beispiel:

```typescript
import * as React from 'react';
import { ISteuerelementeProps } from './ISteuerelementeProps';
import styles from './Steuerelemente.module.scss';

const Steuerelemente: React.FC<ISteuerelementeProps> = (props) => {
  return (
    <div className={styles.steuerelemente}>
      <p>{props.description}</p>
      {/* Weitere UI-Elemente */}
    </div>
  );
};

export default Steuerelemente;
```

**SteuerelementeWebPart.manifest.json:**
Beschreibung: Diese Datei enthält die Manifestinformationen für das Webpart, wie z.B. den Namen, die Beschreibung, die Standardwerte und andere Metadaten. Diese Informationen werden verwendet, um das Webpart in SharePoint zu registrieren.
Inhalt: JSON-Daten mit Metadaten und Konfigurationsinformationen.
Beispiel:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json",
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "alias": "SteuerelementeWebPart",
  "componentType": "WebPart",
  "version": "1.0.0",
  "manifestVersion": 2,
  "preconfiguredEntries": [{
    "groupId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "group": { "default": "Under Development" },
    "title": { "default": "Steuerelemente" },
    "description": { "default": "Beschreibung des Steuerelemente WebParts" },
    "officeFabricIconFontName": "Page",
    "properties": {
      "description": "Steuerelemente"
    }
  }]
}
```

**SteuerelementeWebPart.ts:**
Beschreibung: Diese Datei ist der Einstiegspunkt für das Webpart. Sie verbindet die SharePoint-Plattform mit der React-Komponente und enthält die Logik zum Initialisieren und Rendern des Webparts. Hier werden auch die Webpart-Eigenschaften definiert und die React-Komponente wird gerendert.
Inhalt: TypeScript-Code zur Initialisierung und Verwaltung des Webparts.
Beispiel:

```typescript
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Steuerelemente from './components/Steuerelemente';
import { ISteuerelementeProps } from './components/ISteuerelementeProps';

export interface ISteuerelementeWebPartProps {
  description: string;
}

export default class SteuerelementeWebPart extends BaseClientSideWebPart<ISteuerelementeWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISteuerelementeProps> = React.createElement(
      Steuerelemente,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Webpart-Konfiguration"
          },
          groups: [
            {
              groupName: "Einstellungen",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Beschreibung"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
```

Diese Dateien arbeiten zusammen, um das Webpart zu definieren, zu stylen und auf einer SharePoint-Seite anzuzeigen. Hier ist eine kurze Zusammenfassung, was in jede Datei gehört:

- **ISteuerelementeProps.ts**: Definition der Eigenschaften, die an die React-Komponente übergeben werden.
- **Steuerelemente.module.scss**: SCSS-Stile für die Komponente.
- **Steuerelemente.tsx**: Implementierung der React-Komponente.
- **SteuerelementeWebPart.manifest.json**: Manifestinformationen für das Webpart.
- **SteuerelementeWebPart.ts**: Logik zum Initialisieren und Rendern des Webparts sowie Konfiguration des Eigenschaftsbereichs.

Diese Struktur und Dateien ermöglichen es Ihnen, ein gut organisiertes und modularisiertes SPFx-Webpart zu entwickeln.

## Globale Abhängigkeiten

Erfordert global installiertes Gulp:

```shell
npm install --global gulp
```

## Code bauen

Laden Sie alle Abhängigkeiten herunter und installieren Sie sie, bauen Sie das Projekt, bündeln und verpacken Sie es

```shell
# Abhängigkeiten herunterladen und installieren
npm install

# Übersetze alle TypeScript & SCSS => JavaScript & CSS
gulp build

# Erstelle Komponentensbundle & Manifest
gulp bundle

# Erstelle SharePoint-Paket
gulp package-solution
```

Diese Befehle erzeugen Folgendes:

- **./lib**: Build-Artefakte im Zwischenstadium im CommonJS-Format
- **./dist**: Gebündeltes Skript sowie andere Ressourcen
- **./temp/deploy**: Alle Ressourcen, die von der/den Komponente(n) benötigt werden, um zu einem CDN zu deployen (wenn das Argument `--ship` vorhanden ist)

## Build-Optionen

- `gulp clean`: Löscht alle Build-Ausgaben (**/dist**, **/lib**, **/temp** usw.).
- `gulp build`: Transpiliert alle TypeScript- und SCSS-Dateien in JavaScript und CSS, erstellt Quellkarten-Dateien und TypeScript-Typdeklarationsdateien
- `gulp bundle [--ship|-p|--production]`: Führt die gulp-Aufgabe **build** aus, verwendet dann webpack, um die JavaScript-Bündel und Komponentendefinitionen gemäß **./config/config.json** zu erstellen. Das Argument `--ship`, `-p` oder `--production` gibt einen Produktions-Build an, der minimierte Bundles erzeugt.
- `gulp serve [--ship|-p|--production]`: Führt die gulp-Aufgaben **build**, **bundle** aus und startet den lokalen Webserver. Je nach Projekttyp öffnet es den Browser und navigiert zum lokalen Workbench oder zur angegebenen URL (im Fall von Erweiterungskomponenten). Das Argument `--ship`, `-p` oder `--production` gibt einen Produktions-Build an, der das resultierende Paket für die Produktionsbereitstellung anpasst, anstatt für die lokale Bereitstellung von Assets.
- `gulp package-solution`: Erstellt die SharePoint-Paketdatei (**.sppkg**).
- `gulp dist`: Erstellt eine produktionsbereite SharePoint-Paketdatei (**.sppkg**). Die folgende gulp-Aufgabe wird in dieser spezifischen Reihenfolge ausgeführt: `gulp clean`, `gulp bundle`, `gulp package-solution.`
- `gulp dev`: Erstellt eine entwicklungsbereite SharePoint-Paketdatei (**.sppkg**). Die folgende gulp-Aufgabe wird in dieser spezifischen Reihenfolge ausgeführt: `gulp clean`, `gulp bundle`, `gulp package-solution.`

> Zeigen Sie alle verfügbaren gulp-Aufgaben an, indem Sie `gulp --tasks` ausführen

Weitere Informationen zum [SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)

Erstellt mit [pnp/spfx](https://github.com/pnp/generator-spfx/).
