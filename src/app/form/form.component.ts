import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  styles: [`
        p{font-size:18px; font-family:Verdana; color:green;}
        :host{color:red}
    `]

})
export class FormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // name: string = "Yulya";
  @Input() name: string;
  age: number = 25;

  count: number = 0;
  increase(): any {
    this.count++;
  }


}
