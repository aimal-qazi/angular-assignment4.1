import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'category/:cat',
        loadChildren: () =>
          import('./category/category.module').then(
            (mod) => mod.CategoryModule
          ),
      },
      {
        path: 'vehicle',
        loadChildren: () =>
          import('./vehicle/vehicle.module').then((a) => a.VehicleModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
