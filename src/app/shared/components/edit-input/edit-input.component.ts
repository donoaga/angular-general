import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css']
})
export class EditInputComponent implements OnInit {
  @Input() editMode = false;
  @Input() value: string | number;

  @Output() valueChange: EventEmitter<string | number> = new EventEmitter<string | number>();

  inputType = 'text';

  ngOnInit() {
    // Set the type of input by received value from table
    this.inputType = typeof this.value === 'number' ? 'number' : 'text';
  }

  onValueChanged() {
    this.valueChange.emit(this.value);
  }
}
