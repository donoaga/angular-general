import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorValidator} from '../../validators/author.validator';
import {ListItemsService} from '../../../core/services/list-items.service';
import {TableItem} from '../../../core/models/TableItem';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {

  formGroup: FormGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required, AuthorValidator.isCamelCase]),
      price: new FormControl('', [Validators.required]),
    }
  );

  constructor(private listItemsServ: ListItemsService) {
  }

  submitForm() {
    if (!this.formGroup.invalid) {
      const newListItem: TableItem = {
        title: this.formGroup.get('title').value,
        author: this.formGroup.get('author').value,
        price: this.formGroup.get('price').value
      };
      this.listItemsServ.addItem(newListItem);
    } else {
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key).markAsDirty();
      });
    }
  }

  hasError(groupName) {
    return this.formGroup.get(groupName).invalid && this.formGroup.get(groupName).dirty;
  }
}
