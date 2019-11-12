import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
imagelink : string = "assets/img/20191102_193550.jpg";  
@Input() namespace;
}
