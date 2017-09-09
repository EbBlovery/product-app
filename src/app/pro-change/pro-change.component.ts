import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pro-change',
  templateUrl: './pro-change.component.html',
  styleUrls: ['./pro-change.component.css']
})
export class ProChangeComponent implements OnInit {
  @Input()
  product:any;

  @Output()
  eventChange:EventEmitter<boolean> = new EventEmitter();

  private isshow:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  handleClose(){
    this.eventChange.emit(this.isshow)
  }
  handleSave(){
  	this.eventChange.emit(this.isshow)
  }
}
