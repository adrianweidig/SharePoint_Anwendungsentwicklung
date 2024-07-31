import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Steuerelemente from './components/Steuerelemente';
import { ISteuerelementeProps } from './components/ISteuerelementeProps';

// Interface für die Eigenschaften des Webparts
export interface ISteuerelementeWebPartProps {
  description: string;
}

// Interface für den Zustand des Webparts
export interface ISteuerelementeWebPartState {
  textValue: string;  // Wert des Textfelds
  checkboxValue: boolean;  // Status des Kontrollkästchens
  selectedOption: string;  // Ausgewählte Option im Auswahlfeld
}

// Hauptklasse des Webparts
export default class SteuerelementeWebPart extends BaseClientSideWebPart<ISteuerelementeWebPartProps> {
  private state: ISteuerelementeWebPartState;

  // Methode zum Initialisieren des Zustands
  protected onInit(): Promise<void> {
    // Initialisieren des Zustands mit Standardwerten
    this.state = {
      textValue: '',  // Initialer Wert des Textfelds
      checkboxValue: false,  // Initialer Status des Kontrollkästchens
      selectedOption: 'Option 1'  // Initiale Auswahl im Auswahlfeld
    };
    return super.onInit();
  }

  // Render-Methode des Webparts
  public render(): void {
    // Erstellen des React-Elements, das die Steuerelemente-Komponente enthält
    const element: React.ReactElement<ISteuerelementeProps> = React.createElement(
      Steuerelemente,
      {
        description: this.properties.description,  // Beschreibung aus den Webpart-Eigenschaften
        textValue: this.state.textValue,  // Wert des Textfelds aus dem Zustand
        checkboxValue: this.state.checkboxValue,  // Status des Kontrollkästchens aus dem Zustand
        selectedOption: this.state.selectedOption,  // Ausgewählte Option aus dem Zustand
        onTextChange: this.onTextChange.bind(this),  // Methode zum Handhaben von Textänderungen
        onCheckboxChange: this.onCheckboxChange.bind(this),  // Methode zum Handhaben von Kontrollkästchenänderungen
        onSelectChange: this.onSelectChange.bind(this),  // Methode zum Handhaben von Auswahländerungen
        onButtonClick: this.onButtonClick.bind(this)  // Methode zum Handhaben von Button-Klicks
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
            description: 'Webpart Konfiguration'  // Beschreibung des Property Pane
          },
          groups: [
            {
              groupName: 'Einstellungen',  // Name der Gruppe im Property Pane
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Beschreibung'  // Label für das Textfeld im Property Pane
                })
              ]
            }
          ]
        }
      ]
    };
  }

  // Methode zur Verarbeitung von Textänderungen
  private onTextChange(newValue: string): void {
    this.setState({ textValue: newValue });  // Aktualisieren des Textfeldwerts im Zustand
  }

  // Methode zur Verarbeitung von Kontrollkästchenänderungen
  private onCheckboxChange(checked: boolean): void {
    this.setState({ checkboxValue: checked });  // Aktualisieren des Kontrollkästchenstatus im Zustand
  }

  // Methode zur Verarbeitung von Auswahländerungen
  private onSelectChange(selected: string): void {
    this.setState({ selectedOption: selected });  // Aktualisieren der ausgewählten Option im Zustand
  }

  // Methode zur Verarbeitung von Button-Klicks
  private onButtonClick(): void {
    // Anzeige eines Alerts mit den aktuellen Werten der Steuerelemente
    alert(`Text: ${this.state.textValue}, Checkbox: ${this.state.checkboxValue}, Auswahl: ${this.state.selectedOption}`);
  }

  // Methode zum Aktualisieren des Zustands
  private setState(newState: Partial<ISteuerelementeWebPartState>): void {
    this.state = { ...this.state, ...newState };  // Zusammenführen des aktuellen Zustands mit den neuen Werten
    this.render();  // Neurendern des Webparts mit dem aktualisierten Zustand
  }
}
