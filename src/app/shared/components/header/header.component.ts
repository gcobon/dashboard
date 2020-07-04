import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()  isClosed:EventEmitter<Event> = new EventEmitter<Event>(); 
   
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu():void{
    this.isClosed.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
