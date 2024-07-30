import * as React from 'react';
import styles from './01FirstSpFxWebPart.module.scss';
import { I01FirstSpFxWebPartProps } from './I01FirstSpFxWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class 01FirstSpFxWebPart extends React.Component < I01FirstSpFxWebPartProps, {} > {
  public render(): React.ReactElement<I01FirstSpFxWebPartProps> {
    return(
      <div className = { styles.01FirstSpFxWebPart } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
