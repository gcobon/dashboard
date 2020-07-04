import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public opened = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeMenu():void{
    this.opened = !this.opened
  }

}
