import * as React from 'react';
import { sp, ItemAddResult, ItemUpdateResult } from 'sp-pnp-js';
import { IListItem } from './IListItem';
import { ICrudPnpSPProps } from './ICrudPnpSpProps';
import { ICrudPnpSPState } from './ICrudPnpSPState';
import styles from './CrudPnpSP.module.scss';

export class CrudPnpSP extends React.Component<ICrudPnpSPProps, ICrudPnpSPState> {
  constructor(props: ICrudPnpSPProps) {
    super(props);
    this.state = {
      status: ''
    };
  }

  private updateStatus(message: string): void {
    this.setState({ status: message });
  }

  private createItem(): void {
    this.updateStatus('Creating item…');
    sp.web.lists.getByTitle(this.props.listName).items.add({
      Title: `Item ${new Date()}`
    }).then((result: ItemAddResult) => {
      const item: IListItem = {
        Id: result.data.Id,
        Title: result.data.Title
      };
      this.updateStatus(`Item '${item.Title}' (ID: ${item.Id}) successfully created`);
    }).catch(error => {
      this.updateStatus(`Error while creating the item: ${error}`);
    });
  }

  private readItem(): void {
    this.updateStatus('Reading latest items…');
    this.getLatestItemId()
      .then((itemId: number) => {
        if (itemId === -1) throw new Error('No items found in the list');
        this.updateStatus(`Loading information about item ID: ${itemId}…`);
        return sp.web.lists.getByTitle(this.props.listName).items.getById(itemId).select('Title', 'Id').get();
      }).then((item: any) => {
      const listItem: IListItem = {
        Id: item.Id,
        Title: item.Title
      };
      this.updateStatus(`Item ID: ${listItem.Id}, Title: ${listItem.Title}`);
    }).catch(error => {
      this.updateStatus(`Loading latest item failed with error: ${error}`);
    });
  }

  private updateItem(): void {
    this.updateStatus('Loading latest items…');
    let latestItemId: number = undefined;
    let etag: string = undefined;
    this.getLatestItemId()
      .then((itemId: number) => {
        if (itemId === -1) throw new Error('No items found in the list');
        latestItemId = itemId;
        this.updateStatus(`Loading information about item ID: ${itemId}…`);
        return sp.web.lists.getByTitle(this.props.listName).items.getById(itemId).get();
      }).then((item: any) => {
      etag = item["odata.etag"];
      const listItem: IListItem = {
        Id: item.Id,
        Title: item.Title
      };
      return sp.web.lists.getByTitle(this.props.listName).items.getById(listItem.Id).update({
        Title: `Updated Item ${new Date()}`
      }, etag);
    }).then((result: ItemUpdateResult) => {
      this.updateStatus(`Item with ID: ${latestItemId} successfully updated`);
    }).catch(error => {
      this.updateStatus(`Loading latest item failed with error: ${error}`);
    });
  }

  private deleteItem(): void {
    if (!window.confirm('Are you sure you want to delete the latest item?')) {
      return;
    }
    this.updateStatus('Loading latest items…');
    let latestItemId: number = undefined;
    let etag: string = undefined;
    this.getLatestItemId()
      .then((itemId: number) => {
        if (itemId === -1) throw new Error('No items found in the list');
        latestItemId = itemId;
        this.updateStatus(`Loading information about item ID: ${latestItemId}…`);
        return sp.web.lists.getByTitle(this.props.listName).items.getById(latestItemId).select('Id').get();
      }).then((item: any) => {
      etag = item["odata.etag"];
      const listItem: IListItem = {
        Id: item.Id,
        Title: ''
      };
      this.updateStatus(`Deleting item with ID: ${latestItemId}…`);
      return sp.web.lists.getByTitle(this.props.listName).items.getById(listItem.Id).delete(etag);
    }).then(() => {
      this.updateStatus(`Item with ID: ${latestItemId} successfully deleted`);
    }).catch(error => {
      this.updateStatus(`Error deleting item: ${error}`);
    });
  }

  private getLatestItemId(): Promise<number> {
    return sp.web.lists.getByTitle(this.props.listName).items.orderBy('Id', false).top(1).select('Id').get()
      .then(items => {
        return items.length > 0 ? items[0].Id : -1;
      });
  }

  public render(): React.ReactElement<ICrudPnpSPProps> {
    return (
      <div className={styles.crudPnpSP}>
        <button onClick={() => this.createItem()}>Create Item</button>
        <button onClick={() => this.readItem()}>Read Item</button>
        <button onClick={() => this.updateItem()}>Update Item</button>
        <button onClick={() => this.deleteItem()}>Delete Item</button>
        <div>{this.state.status}</div>
      </div>
    );
  }
}
