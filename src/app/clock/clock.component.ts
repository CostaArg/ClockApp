import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  public time: Date = new Date(0, 0, 0, 0, 0, 0);
  public inputSeconds: number;
  public turnOn: boolean = false;
  public ticking: any;
  public stateText: string = "▶ Start";

  constructor() {}

  ngOnInit(): void {}

  startStopTime() {
    if (this.turnOn) {
      this.ticking = setInterval(() => {
        this.updateTime();
      }, 1000);
      this.stateText = "⏸ Pause";
    } else {
      clearInterval(this.ticking);
      this.stateText = "▶ Start";
    }
  }

  updateTime() {
    if (this.time <= new Date(0, 0, 0, 0, 0, 0)) {
      this.turnOn = false;
      clearInterval(this.ticking);
      this.stateText = "▶ Start";
    } else {
      this.time.setSeconds(this.time.getSeconds() - 1);
      this.stateText = "⏸ Pause";
    }
  }

  resetTime() {
    this.turnOn = false;
    clearInterval(this.ticking);
    this.stateText = "▶ Start";
    this.time = new Date(0, 0, 0, 0, 0, 0);
    this.time.setSeconds(this.inputSeconds >= 0 ? this.inputSeconds : 0);
  }
}
