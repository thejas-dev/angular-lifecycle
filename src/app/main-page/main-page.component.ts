import { Component } from '@angular/core';
import { CounterPageComponent } from '../counter-page/counter-page.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CounterPageComponent,NgIf],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  showCounter: boolean = false;
  count: number = 0;

  toggleShowCounter(): void{
    this.showCounter = !this.showCounter;
  };
}
