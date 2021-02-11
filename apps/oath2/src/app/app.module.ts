import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationModule } from '../../../../libs/authentication/src/lib/authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
