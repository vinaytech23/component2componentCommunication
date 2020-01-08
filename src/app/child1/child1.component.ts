import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() sendItemEvent = new EventEmitter();
  employeeData;
  @Output() sendPersonEvent = new EventEmitter();
  personData;
  // tslint:disable-next-line: ban-types
  MyTotalData: any = 0;
  constructor(private serV: CallApiService) { }

  ngOnInit() {


    this.serV.getMydata().subscribe(
      (resr) => {
        this.MyTotalData = resr;
          console.log(this.MyTotalData);
          // console.log(this.MyTotalData.author[0].rights);
      }
    );

  }

  sendItem(selectedEmp) {
    this.sendItemEvent.emit(selectedEmp);
  }

  sendPersons(selectedPersons) {
    this.sendPersonEvent.emit(selectedPersons);
  }

}
