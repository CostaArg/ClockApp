import { Component, OnInit } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-clock-container',
  templateUrl: './clock-container.component.html',
  styleUrls: ['./clock-container.component.css']
})
export class ClockContainerComponent implements OnInit {

clocks: Array<ClockComponent> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addClock() {
    this.clocks.push(new ClockComponent());
  }
}
