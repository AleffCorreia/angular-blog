import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover: string = '';
  now : Date = new Date;
  cardDate: string = `${this.now.getDate()}/${this.now.getMonth()}/${this.now.getFullYear()}`
  @Input()
  cardTitle: string = '';
  @Input()
  id: string = '0';
}
