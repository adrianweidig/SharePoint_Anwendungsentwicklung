import * as React from 'react';
import { ISteuerelementeProps } from './ISteuerelementeProps';
import styles from './Steuerelemente.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

// Steuerelemente-Komponente
export default class Steuerelemente extends React.Component<ISteuerelementeProps, {}> {
  public render(): React.ReactElement<ISteuerelementeProps> {
    return (
      <div className={styles.steuerelemente}>
        {/* Anzeige der Beschreibung */}
        <div className={styles.description}>
          {escape(this.props.description)}
        </div>

        {/* Textfeld */}
        <div className={styles.label}>Beispiel-Textfeld:</div>
        <input
          className={styles.input}
          type="text"
          value={this.props.textValue}  // Zeigt den aktuellen Wert des Textfelds an
          onChange={(event) => this.props.onTextChange(event.target.value)}  // Aktualisiert den Wert bei Änderung
        />

        {/* Kontrollkästchen */}
        <div className={styles.label}>Beispiel-Kontrollkästchen:</div>
        <input
          className={styles.input}
          type="checkbox"
          checked={this.props.checkboxValue}  // Zeigt den aktuellen Status des Kontrollkästchens an
          onChange={(event) => this.props.onCheckboxChange(event.target.checked)}  // Aktualisiert den Status bei Änderung
        />

        {/* Auswahlfeld */}
        <div className={styles.label}>Beispiel-Auswahlfeld:</div>
        <select
          className={styles.input}
          value={this.props.selectedOption}  // Zeigt die aktuell ausgewählte Option an
          onChange={(event) => this.props.onSelectChange(event.target.value)}  // Aktualisiert die Auswahl bei Änderung
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>

        {/* Button */}
        <div className={styles.label}>Beispiel-Button:</div>
        <button
          className={styles.button}
          onClick={this.props.onButtonClick}  // Ruft die Methode bei einem Klick auf den Button auf
        >
          Klicken Sie hier
        </button>
      </div>
    );
  }
}
