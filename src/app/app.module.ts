import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app-component/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MoviesComponent,
        MovieItemComponent,
        ChannelsComponent,
        FooterComponent,
        ChannelItemComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
