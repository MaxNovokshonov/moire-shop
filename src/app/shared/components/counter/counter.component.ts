import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() counter = 1;
  @Output() amount = new EventEmitter<number>();

  constructor() {}

  decrement() {
    if (this.counter === 1) {
      return;
    } else {
      this.counter = this.counter - 1;
      this.amount.emit(this.counter);
    }
  }

  increment() {
    this.counter = this.counter + 1;
    this.amount.emit(this.counter);
  }
}
