import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MiddleComponent } from './middle/middle.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { BottomComponent } from './bottom/bottom.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './productservice';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MiddleComponent,
    ListitemsComponent,
    BottomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
