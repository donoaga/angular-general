import {Component, OnInit} from '@angular/core';
import {ListItemsService} from '../../../core/services/list-items.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  tableItems;

  constructor(private listItemsService: ListItemsService) {
  }

  ngOnInit(): void {
    this.listItemsService.getData().subscribe(val => {
        this.tableItems = val;
      }
    );
  }

  onEditClicked(item) {
    item.editMode = true;
  }

  onSaveClicked(item) {
    item.editMode = false;
    this.listItemsService.saveItem(item.id, item);
  }
}
