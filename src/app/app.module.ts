import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersModule} from './users/users.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
