import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ChipsMultiSelectComponent } from './chips-multi-select/chips-multi-select.component';
import { SubmitSnackComponent } from './submit-snack/submit-snack.component';
import { StartComponent } from './start/start.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { RandoSnackmojiComponent } from './rando-snackmoji/rando-snackmoji.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipsMultiSelectComponent,
    SubmitSnackComponent,
    StartComponent,
    DashboardComponent,
    RandoSnackmojiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
