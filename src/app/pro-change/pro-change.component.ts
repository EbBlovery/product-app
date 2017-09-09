import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pro-change',
  templateUrl: './pro-change.component.html',
  styleUrls: ['./pro-change.component.css']
})
export class ProChangeComponent implements OnInit {
  @Input()
  product:any;
  constructor() { }

  ngOnInit() {
  }


  handleClose(){

  }

}
