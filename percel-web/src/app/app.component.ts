import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Percel';

  constructor(public _router: Router) {}

  ngOnInit(): void {

    if(this._router.url == "") {
      localStorage.setItem('target', 'introduction');
    }

  }

}
