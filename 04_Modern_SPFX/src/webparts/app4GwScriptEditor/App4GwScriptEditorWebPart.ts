import { SPComponentLoader } from "@microsoft/sp-loader";
import { SPPermission } from "@microsoft/sp-page-context";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneToggle,
} from "@microsoft/sp-webpart-base";
import { sp } from 'sp-pnp-js';
import pnp from 'sp-pnp-js';
import {
  PropertyFieldCodeEditor,
  PropertyFieldCodeEditorLanguages,
} from "@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor";
import { PropertyPaneWebPartInformation } from "@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation";
import { IApp4GwScriptEditorWebPartProps } from "./IApp4GwScriptEditorWebPartProps";

export default class ScriptEditorWebPart extends BaseClientSideWebPart<IApp4GwScriptEditorWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then((_) => {
      pnp.setup({
        spfxContext: this.context,
      });
    });
  }

  public save: (script: string) => void = (script: string) => {
    this.properties.script = script;
    this.render();
  };

  // This script was inspired by https://github.com/pnp/sp-dev-fx-webparts/tree/main/samples/react-script-editor-onprem

  public async render(): Promise<void> {
    this.domElement.innerHTML = this.properties.script;
    this.executeScript(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupFields: [
                // Using of PnP_PropertyFieldCodeEditor for smaller code
                this._isApprover() &&
                  PropertyFieldCodeEditor("script", {
                    label: "Code Bearbeiten",
                    panelTitle: "Code Bearbeiten",
                    initialValue: this.properties.script,
                    onPropertyChange: this.onPropertyPaneFieldChanged,
                    properties: this.properties,
                    key: "codeEditorFieldId",
                    language: PropertyFieldCodeEditorLanguages.HTML,
                  }),
                this._isApprover() &&
                  PropertyPaneToggle("spPageContextInfo", {
                    label: "Aktiviere Klassische _spPageContextInfo",
                    checked: this.properties.spPageContextInfo,
                    onText: "Aktiviert",
                    offText: "Deaktiviert",
                  })
              ],
            },
            {
              groupFields: [
                PropertyPaneWebPartInformation({
                  description: "Version: " + this.manifest.version,
                  key: "webPartInfoId",
                }),
              ],
            },
          ],
        },
      ],
    };
  }

  protected _isApprover(): boolean {
    return this.context.pageContext.web.permissions.hasPermission(
      SPPermission.approveItems
    );
  }

  private evalScript(elem) {
    const data = elem.text || elem.textContent || elem.innerHTML || "";
    const headTag =
      document.getElementsByTagName("head")[0] || document.documentElement;
    const scriptTag = document.createElement("script");

    scriptTag.type = "text/javascript";
    if (elem.src && elem.src.length > 0) {
      return;
    }
    if (elem.onload && elem.onload.length > 0) {
      scriptTag.onload = elem.onload;
    }

    try {
      // doesn't work on ie...
      scriptTag.appendChild(document.createTextNode(data));
    } catch (e) {
      // IE has funky script nodes
      scriptTag.text = data;
    }

    headTag.insertBefore(scriptTag, headTag.firstChild);
    headTag.removeChild(scriptTag);
  }

  private nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
  }

  // Finds and executes scripts in a newly added element's body.
  // Needed since innerHTML does not run scripts.
  //
  // Argument element is an element in the dom.
  private async executeScript(element: HTMLElement) {
    // Define global name to tack scripts on in case script to be loaded is not AMD/UMD

    if (this.properties.spPageContextInfo && !window["_spPageContextInfo"]) {
      window["_spPageContextInfo"] = this.context.pageContext.legacyPageContext;
    }

    (<any>window).ScriptGlobal = {};

    // main section of function
    const scripts = [];
    const children_nodes = element.getElementsByTagName("script");

    for (let i = 0; children_nodes[i]; i++) {
      const child: any = children_nodes[i];
      if (!child.type || child.type.toLowerCase() === "text/javascript") {
        scripts.push(child);
      }
    }

    const urls = [];
    const onLoads = [];
    for (let i = 0; scripts[i]; i++) {
      const scriptTag = scripts[i];
      if (scriptTag.src && scriptTag.src.length > 0) {
        urls.push(scriptTag.src);
      }
      if (scriptTag.onload && scriptTag.onload.length > 0) {
        onLoads.push(scriptTag.onload);
      }
    }

    let oldamd = null;
    if (window["define"] && window["define"].amd) {
      oldamd = window["define"].amd;
      window["define"].amd = null;
    }

    for (let i = 0; i < urls.length; i++) {
      try {
        let scriptUrl = urls[i];
        const prefix = scriptUrl.indexOf("?") === -1 ? "?" : "&";
        scriptUrl += prefix + "cow=" + new Date().getTime();
        await SPComponentLoader.loadScript(scriptUrl, {
          globalExportsName: "ScriptGlobal",
        });
      } catch (error) {
        if (console.error) {
          console.error(error);
        }
      }
    }
    if (oldamd) {
      window["define"].amd = oldamd;
    }

    for (let i = 0; scripts[i]; i++) {
      const scriptTag = scripts[i];
      if (scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
      this.evalScript(scripts[i]);
    }
    // execute any onload people have added
    for (let i = 0; onLoads[i]; i++) {
      onLoads[i]();
    }
  }
}
