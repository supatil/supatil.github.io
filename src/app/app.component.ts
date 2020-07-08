import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed: boolean;
  constructor(){
    this.isCollapsed = false;
  }

  collapse(){
    this.isCollapsed = !this.isCollapsed;
  }
}
