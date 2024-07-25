import { Component, OnInit, input } from '@angular/core';
import { Slot } from '../types';
import { SlicePipe } from '@angular/common';
import { JackpotComponent } from '../jackpot/jackpot.component';
type Navigate = 'previous' | 'next';
const MAX_SLOTS_AMOUNT = 4 as const;

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlicePipe, JackpotComponent],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
})
export class SlotsComponent implements OnInit {
  public slots = input.required<Slot[]>();
  public position = 0;

  get getPages() {
    return Math.ceil(this.slots()!.length / MAX_SLOTS_AMOUNT);
  }

  get start() {
    return this.position * MAX_SLOTS_AMOUNT;
  }

  get end() {
    return this.position * MAX_SLOTS_AMOUNT + MAX_SLOTS_AMOUNT;
  }

  ngOnInit() {
    this.slots()?.sort((a, b) => (a.order > b.order ? 1 : -1));
  }

  public navigate(navigate: Navigate) {
    if (navigate === 'previous') {
      if (this.position === 0) this.position = this.getPages - 1;
      else this.position--;
    } else if (navigate === 'next') {
      if (this.position === this.getPages - 1) this.position = 0;
      else this.position++;
    }
  }
}
