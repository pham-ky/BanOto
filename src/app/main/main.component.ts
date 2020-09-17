import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../lib/api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.loadScripts();
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
