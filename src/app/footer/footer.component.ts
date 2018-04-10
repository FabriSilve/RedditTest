import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class FooterComponent implements OnInit {

  private isWorking : boolean = false;
  public showToTop : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private onScroll(event : any ) {
    if(!this.isWorking)  
    { 
      this.isWorking=true;
      if (window.pageYOffset > 600) {
        this.showToTop = true;
      } else if(window.pageYOffset < 600) {
        this.showToTop = false;
      }
      var that = this;
      setTimeout(function(){that.isWorking=false},1000);
    }
  }

  public onClick() {
    window.scrollTo(0,0);
  }

}
