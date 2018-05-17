import { Component, OnInit, Input } from '@angular/core';
import {Cake} from '../cake'
@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {

  @Input() selectedCake: Cake;
  
  constructor() { }

  ngOnInit() {
  }

}
