import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xchild2',
  templateUrl: './xchild2.component.html',
  styleUrls: ['./xchild2.component.css']
})
export class Xchild2Component implements OnInit {

  @Input() recevdFromAppCom;

  // @Input() recevdFromAppCom: object = {id: '', Name: '', drpet: ''};
  @Input() status: boolean;

  @Input() PersonRecevdFromAppCom: object = {'Aadhar-id': '', Name: '', Location: ''};
  @Input() status1: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.recevdFromAppCom);
    
  }
}
