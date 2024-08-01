import * as React from 'react';
import * as ReactDOM from 'react-dom';
import pnp from 'sp-pnp-js';
import { CrudPnpSP } from './components/CrudPnpSP';
import { ICrudPnpSPProps } from './components/ICrudPnpSpProps';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

// Die Webpart-Definition
export default class CrudPnpSPWebPart extends BaseClientSideWebPart<ICrudPnpSPProps> {
  public render(): void {
    const element: React.ReactElement<ICrudPnpSPProps> = React.createElement(
      CrudPnpSP,
      {
        listName: this.properties.listName,
      }
    );

    ReactDOM.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      // Setup sp-pnp-js
      pnp.setup({
        spfxContext: this.context
      });
    });
  }
}
