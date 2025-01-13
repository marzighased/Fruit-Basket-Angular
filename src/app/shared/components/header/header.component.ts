import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <header>   
  <div>
      <img src="./../../assets/img/31800109_lop2.svg" alt="" srcset="">
      <p>DA</p>
      <p>fruits</p>
  </div>
</header>`,
  styles: [`
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 32px; 
      background-color: #09212A;
      height: 100px;
      >div{
          display: flex;
          flex-direction: row;
          align-items: center;
          >img{
              height: 50px;
              width: 50px;
          }
          >p{
              font-size: 32px;
              font-weight: bold;
          }
          >p:nth-child(2){
              color: #FD5B4F !important;
              font-size: 38px;
              margin-left: -10px;
          }
      }
    }`
  ]
})
export class HeaderComponent {}
