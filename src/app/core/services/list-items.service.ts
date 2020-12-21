import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {TableItem} from '../models/TableItem';

const ELEMENTS: TableItem[] = [
  {id: 1, title: 'Something', author: 'Something', price: 124},
  {id: 2, title: 'Something', author: 'Something', price: 124.12},
  {id: 3, title: 'Something', author: 'Something', price: 124.12},
  {id: 4, title: 'Something', author: 'Something', price: 124.12},
  {id: 5, title: 'Something', author: 'Something', price: 124.12},
  {id: 6, title: 'Something', author: 'Something', price: 124.12},
  {id: 7, title: 'Something', author: 'Something', price: 124.12},
];

@Injectable({providedIn: 'root'})
export class ListItemsService {

  // WE WILL DO IT VIA BACKEND

  public getData() {
    return of(ELEMENTS);
  }

  public getItemById(id: number) {
    const element = ELEMENTS.find(el => el.id === id);
    return of(element);
  }

  public addItem(item: TableItem) {
    item.id = ELEMENTS.length + 1;
    ELEMENTS.push(item);
  }

  public saveItem(id: number, item: TableItem) {
    const index = ELEMENTS.findIndex(el => el.id === id);
    ELEMENTS.splice(index, 1, item);
  }

  public deleteItem(id: number) {
    const index = ELEMENTS.findIndex(el => el.id === id);
    ELEMENTS.splice(index, 1);
  }
}
