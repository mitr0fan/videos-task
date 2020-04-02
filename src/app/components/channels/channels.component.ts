import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/types/channel';
import { GetMoviesChannelsService } from 'src/app/services/get-movies-channels.service';

@Component({
    selector: 'app-channels',
    templateUrl: './channels.component.html',
    styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
    public channels: Channel[];
    constructor(private channelsService: GetMoviesChannelsService) {}

    ngOnInit() {
        this.channels = this.channelsService.getChannels();
    }
}
