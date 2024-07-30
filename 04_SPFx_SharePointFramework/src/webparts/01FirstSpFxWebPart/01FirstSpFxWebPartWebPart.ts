import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from '01FirstSpFxWebPartWebPartStrings';
import 01FirstSpFxWebPart from './components/01FirstSpFxWebPart';
import { I01FirstSpFxWebPartProps } from './components/I01FirstSpFxWebPartProps';

export interface I01FirstSpFxWebPartWebPartProps {
  description: string;
}

export default class 01FirstSpFxWebPartWebPart extends BaseClientSideWebPart<I01FirstSpFxWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<I01FirstSpFxWebPartProps > = React.createElement(
      01FirstSpFxWebPart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
