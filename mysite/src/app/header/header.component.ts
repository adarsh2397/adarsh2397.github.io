import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function(){
      if($(window).scrollTop() > 10) {
        $('#navbar-head').fadeOut('slow');
      }else {
        $('#navbar-head').fadeIn('slow');
      }
    });
  }

}
