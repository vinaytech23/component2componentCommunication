import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallApiService } from './call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor() {
   }








  //  =========================================================

   vindata = {
    firstName: 'Sonoo',
    lastName: 'Jaiswal',
    age: 27,
    address : {
        streetAddress: 'Plot-6, Mohan Nagar',
        city: 'Ghaziabad',
        state: 'UP',
        postalCode: '201007'
    }
};


vinArr = {
                Emp: [
                        {
                          firstName: 'Jayam',
                          lastName: 'pandit',
                          age: 18,
                          address : {
                              streetAddress: 'Plot-1, Mohan Nagar',
                              city: 'asdGhaziabad',
                              state: 'aP',
                              postalCode: '20102'
                          }
                        },
                        {
                          firstName: 'Sonoo',
                          lastName: 'Jaiswal',
                          age: 27,
                          address : {
                              streetAddress: 'Plot-6, Mohan Nagar',
                              city: 'Ghaziabad',
                              state: 'UP',
                              postalCode: '201007'
                          }
                        },
                        {
                          firstName: 'Sonoo',
                          lastName: 'Jaiswal',
                          age: 27,
                          address : {
                              streetAddress: 'Plot-6, Mohan Nagar',
                              city: 'Ghaziabad',
                              state: 'UP',
                              postalCode: '201007'
                          }
                        },
                        {
                          firstName: 'Sonoo',
                          lastName: 'Jaiswal',
                          age: 27,
                          address : {
                              streetAddress: 'Plot-6, Mohan Nagar',
                              city: 'Ghaziabad',
                              state: 'UP',
                              postalCode: '201007'
                          }
                        }
                      ],

                  Persons: [
                    {
                      'Aadhar-id': 1236554,
                      Name: 'Vinay',
                      Location: 'Warangal'
                    },
                    {
                      'Aadhar-id': 1123654,
                      Name: 'Prashanth',
                      Location: 'karimnagar'
                    },
                    {
                      'Aadhar-id': 1123651,
                      Name: 'Sharmila',
                      Location: 'Chennai'
                    },
                    {
                      'Aadhar-id': 1123652,
                      Name: 'Manogna',
                      Location: 'Warangal'
                    },
                    {
                      'Aadhar-id': 1123653,
                      Name: 'Manaswini',
                      Location: 'Delhi'
                    }


                ]
            };

           mydataa = { Emp:
              {
                firstName: 'Sonoo',
                lastName: 'Jaiswal',
                age: 27,
                address : {
                    streetAddress: 'Plot-6, Mohan Nagar',
                    city: 'Ghaziabad',
                    state: 'UP',
                    postalCode: '201007'
                }
              }
            };

  title = 'parent2child';
   selectedEmployee = {id: '', Name: '', dept: ''};
   statusFromApp = false;
   selectedPerson = {id: '', Name: '', dept: ''};
   statusFromApp1 = false;


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
  }
  addItem(recvdItemFromChild1) {
    this.selectedEmployee = recvdItemFromChild1;
    console.log(this.selectedEmployee);
    this.statusFromApp = true;


  }
  addItem1(recvdpersonFromChild1) {
    this.selectedPerson = recvdpersonFromChild1;
    console.log(this.selectedPerson);
    this.statusFromApp1 = true;

  }
}
