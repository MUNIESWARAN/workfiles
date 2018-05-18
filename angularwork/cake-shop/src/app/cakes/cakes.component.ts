import { Component, OnInit } from '@angular/core';
import { Cake} from '../cake';
import { CAKESCONST} from '../list-cakes';
import {CakeService} from '../cake.service';
@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

   cakeObject : Cake = { 
     cakeName:'Venila', cakePrice:500, cakeDesc:'Venila-Freshcream-Cake'  };

     
    cakeConst = CAKESCONST;
    
    selectedCake:Cake;

    cakes:Cake[];

    onSelect(cake: Cake):void{
      this.selectedCake = cake;
    
    }

    getCakes():void{
      this.cakeService.getCakes().subscribe(cakes=>this.cakes = cakes);
    }
       
    
    
  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.getCakes();
  }


}
