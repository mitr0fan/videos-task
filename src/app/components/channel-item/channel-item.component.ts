import { Component, OnInit, Input } from '@angular/core';
import { Channel } from 'src/app/types/channel';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent implements OnInit {
  @Input() public channel: Channel;

  constructor() { }

  ngOnInit() {
  }

}
