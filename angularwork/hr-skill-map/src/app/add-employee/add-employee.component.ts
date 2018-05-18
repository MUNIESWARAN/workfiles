import { Component, OnInit } from '@angular/core';
import {LogService} from '../log.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  start = new Date;
  constructor(private logService : LogService) { 
      this.log(this.start.toUTCString());
  }

  ngOnInit() {
  }

  private log(message:string){
    this.logService.add('ADD EMPLOYEE Component '+ message);
  }

}
