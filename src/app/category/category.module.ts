import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryShowComponent } from './category-show.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryShowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryShowComponent,
      },
    ]),
  ],
})
export class CategoryModule {}
