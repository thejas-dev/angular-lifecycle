import { Component, ContentChild, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnChanges {
  @ViewChild('Template',{static : false}) Template! : ElementRef

  @ContentChild('ContentProjection',{static : false}) ContentProjection! : ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("From Child ngOnChanges : Counter Component Changed - ", changes);
  }

  ngOnInit() {
    console.log("From Child ngOnInit");
  }

  ngDoCheck(): void {
    console.log('From Child ngDoCheck : Counter Page change check - Count', this.count);
  }

  ngAfterContentInit(): void {
    console.log('From Child ngAfterContentInit - View: ',
    this.Template, // Refer to -> Element Ref -> some object
    ' - Content: ',this.ContentProjection); 
  }

  ngAfterContentChecked(): void {
    console.log('From Child ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('From Child ngAfterViewInit - View: ',
    this.Template, // Refer to -> Element Ref -> some object
    ' - Content: ',this.ContentProjection); // Refer to -> Element Ref -> some object
  }

  ngAfterViewChecked(): void {
    console.log('From Child ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log("From Child ngOnDestroy");
  }

  @Input() count:number = 0;

}
