import { of as observableOf, fromEvent, Subject } from 'rxjs';
export class BaseComponent {
   public unsubscribe = new Subject();
   constructor() {  
      } 
}