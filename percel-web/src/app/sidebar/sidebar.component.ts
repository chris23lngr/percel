import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  hero = 'Windstorm';

  constructor(private router: Router) { }

  ngOnInit(): void {

    console.log(localStorage.getItem('target'));

    var id = localStorage.getItem('target');

    if(id != null) {

      var element = document.getElementById(id);

      if(element != null) {
        element.classList.add('active');
      }

    }

    /*
    var x = document.getElementById("demo");   // Get the element with id="demo"
    //x?.style.color = "red";                     // Change the color of the element
    if(document.getElementById(id) != null) {
      document.getElementById("demo")?.classList.add('active');
    }
    */
  }

  onClick(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target;

    /*
    this.router.navigate(['/' + target.textContent.toLowerCase()], { state: { item: target }});

    window.history.replaceState( {}, '', `/` + target.textContent.toLowerCase());

    target.classList.add('active');

    this.rou
    */

    localStorage.setItem('target', target.id);
  }

}
