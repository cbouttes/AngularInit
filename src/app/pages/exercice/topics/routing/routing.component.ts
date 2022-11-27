import { Component, OnInit } from '@angular/core';
import {routes_exercice} from "../../../../app-routing.module";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  routes = routes_exercice;

  constructor() { }

  ngOnInit(): void {
  }

}
