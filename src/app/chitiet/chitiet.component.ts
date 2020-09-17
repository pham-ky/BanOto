import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from '../lib/base-component';
import { ApiService } from '../lib/api.service';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit, AfterViewInit {
  item: any;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private _api: ApiService) { super(); }
  tensp = '';
  ngOnInit(): void {
    this.item = {};
    this.route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/item/get-by-id/' + id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        console.log(this.item);

      });
    })
    // this.route.params.subscribe(params => {
    //   let id = Number.parseInt(params['id']);
    //   this.tensp = 'Tên sản phẩm ' + id;
    // });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.loadScripts();
      window.scroll(0, 0);
    });
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}
