import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ListItemsService} from '../../../core/services/list-items.service';

@Component({
  selector: 'app-actions-elements',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  @Input() item;

  @Output() onEditClicked = new EventEmitter<any>();
  @Output() onSaveClicked = new EventEmitter<any>();

  constructor(private listItemsService: ListItemsService,
              private router: Router) {
  }

  editSaveBtnClicked() {
    if (!this.item.editMode) {
      this.onEditClicked.emit();
    } else {
      this.onSaveClicked.emit();
    }
  }

  deleteBtnClicked() {
    delete this.item.editMode;
    this.listItemsService.deleteItem(this.item.id);
  }

  viewBtnClicked() {
    this.router.navigate(['view', this.item.id]);
  }
}
