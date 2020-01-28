import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: "" +
    "<button (click)='emitCounter(0)'>-</button>" +
    "{{counterValue}}" +
    "<button (click)='emitCounter(1)'>+</button>",
  styles: ['']
})
export class CounterComponent implements OnInit {
  @Input() private counterValue;
  @Output() counterEmitter = new EventEmitter();

  emitCounter(v) {
    if(v===1) this.counterEmitter.emit(++this.counterValue);
    else this.counterEmitter.emit(--this.counterValue);
  }
  constructor() {
  }

  ngOnInit() {
    this.counterValue = 0;
  }
}
