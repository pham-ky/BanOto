import { Component, OnInit } from '@angular/core';
import { ApiService } from '../lib/api.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from '../lib/base-component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  menus:any;
  constructor(private _api: ApiService) { 
    super();
  }
  ngOnInit(): void {
    this._api.get('/api/itemgroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
      console.log(res);
      
    }); 
  }

}