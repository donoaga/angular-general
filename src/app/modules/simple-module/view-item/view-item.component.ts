import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListItemsService} from '../../../core/services/list-items.service';
import {TableItem} from '../../../core/models/TableItem';

@Component({
  selector: 'app-main-table',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  element: TableItem;

  constructor(private listItemsService: ListItemsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listItemsService.getItemById(+id).subscribe(val => {
        this.element = val;
      }
    );
  }
}
