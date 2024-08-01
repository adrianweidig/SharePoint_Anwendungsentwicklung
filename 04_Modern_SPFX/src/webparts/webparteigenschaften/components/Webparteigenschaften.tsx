import * as React from 'react';
import { IWebparteigenschaftenProps } from './IWebparteigenschaftenProps';
import styles from './Webparteigenschaften.module.scss';

// Webparteigenschaften-Komponente
export default class Webparteigenschaften extends React.Component<IWebparteigenschaftenProps, {}> {
  public render(): React.ReactElement<IWebparteigenschaftenProps> {
    return (
      <div className={styles.webparteigenschaften}>
        {/* Titel anzeigen */}
        <div className={styles.title}>
          {this.props.title}
        </div>

        {/* Untertitel nur anzeigen, wenn showSubtitle true ist */}
        {this.props.showSubtitle && (
          <div className={styles.subtitle}>
            {this.props.subtitle}
          </div>
        )}
      </div>
    );
  }
}
