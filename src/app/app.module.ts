import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoadInfoService} from "./load-info.service";
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import { GrigliaComponent } from './griglia/griglia.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    GrigliaComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatPaginator
  ],
  providers: [LoadInfoService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
