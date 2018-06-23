import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../components/about/about.component';
import { HttpService } from '../services/http/http.service';

import { HttpRequestRoutingModule } from './http-request-routing.module';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpRequestRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRadioModule
],
  declarations: [AboutComponent],
  providers: [HttpService]
})
export class HttpRequestModule {

}
