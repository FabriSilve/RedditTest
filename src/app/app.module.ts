import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { DataService } from './service/data.service';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NoResultComponent } from './no-result/no-result.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import { AppService } from './service/app.service';
import { CommentsService } from './service/comments.service';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    HeaderComponent,
    SearchBarComponent,
    NoResultComponent,
    FooterComponent,
    SearchComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    AppService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
