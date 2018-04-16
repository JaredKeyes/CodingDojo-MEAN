import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteDashboardComponent } from './quote-dashboard/quote-dashboard.component';
import { QuoteNewComponent } from './quote-dashboard/quote-new/quote-new.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteDashboardComponent,
    QuoteNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
