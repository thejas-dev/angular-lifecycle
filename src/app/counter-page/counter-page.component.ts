import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss'
})
export class CounterPageComponent implements OnInit, OnChanges, OnDestroy {

  @Input() count!:number;
  
  constructor(){
    console.log('Counter Page Constructor - Initializing');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('From ngOnChanges : Counter Page changes - ', changes);
  }

  ngOnInit(): void {
    console.log('From ngOnInit');
  }

  ngDoCheck(): void {
    console.log('From ngDoCheck : Counter Page change check - Count', this.count);
  }
  
  ngAfterContentInit(): void {
    console.log('From ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('From ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('From ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('From ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('From ngOnDestroy');
  }

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

}
