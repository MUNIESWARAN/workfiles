import { Injectable } from '@angular/core';
import {Cake} from './cake';
import {CAKESCONST} from './list-cakes'
import {Observable, of, observable} from 'rxjs';
import {MessageService} from './message.service'
@Injectable({
  providedIn: 'root'
})


export class CakeService {

  constructor(private messageService: MessageService) { }
  
  getCakes():Observable<Cake[]>{
    return of(CAKESCONST)
  }
}
