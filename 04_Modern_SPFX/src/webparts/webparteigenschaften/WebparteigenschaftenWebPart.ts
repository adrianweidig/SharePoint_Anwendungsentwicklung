import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Webparteigenschaften from './components/Webparteigenschaften';
import { IWebparteigenschaftenProps } from './components/IWebparteigenschaftenProps';

// Interface für die Eigenschaften des Webparts
export interface IWebparteigenschaftenWebPartProps {
  title: string;  // Titel des Webparts
  subtitle: string;  // Untertitel des Webparts
  showSubtitle: boolean;  // Flag zum Anzeigen des Untertitels
}

// Hauptklasse des Webparts
export default class WebparteigenschaftenWebPart extends BaseClientSideWebPart<IWebparteigenschaftenWebPartProps> {
  // Render-Methode des Webparts
  public render(): void {
    // Erstellen des React-Elements, das die Webparteigenschaften-Komponente enthält
    const element: React.ReactElement<IWebparteigenschaftenProps> = React.createElement(
      Webparteigenschaften,
      {
        title: this.properties.title,  // Titel aus den Webpart-Eigenschaften
        subtitle: this.properties.subtitle,  // Untertitel aus den Webpart-Eigenschaften
        showSubtitle: this.properties.showSubtitle  // Flag aus den Webpart-Eigenschaften
      }
    );

    // Rendern des React-Elements in das DOM-Element des Webparts
    ReactDom.render(element, this.domElement);
  }

  // Methode zum Abrufen der SharePoint Framework-Version
  protected get dataVersion(): Version {
    return Version.parse('1.0');  // Gibt die Version des Frameworks zurück
  }

  // Konfigurieren des Property Pane
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Konfiguration des Webparts'  // Beschreibung des Property Pane
          },
          groups: [
            {
              groupName: 'Webparteigenschaften',  // Name der Gruppe im Property Pane
              groupFields: [
                PropertyPaneTextField('title', {
                  label: 'Titel'  // Label für das Titel-Textfeld im Property Pane
                }),
                PropertyPaneTextField('subtitle', {
                  label: 'Untertitel'  // Label für das Untertitel-Textfeld im Property Pane
                }),
                PropertyPaneToggle('showSubtitle', {
                  label: 'Untertitel anzeigen'  // Label für das Toggle-Steuerelement im Property Pane
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
