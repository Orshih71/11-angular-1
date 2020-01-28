import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter (counterEmitter)="showOutputData($event)"></app-counter>' +"={{outputData}}<br><br>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public outputData;

  showOutputData(data) {
    this.outputData = data;
  }
}
