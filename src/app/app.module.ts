import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./app.component";
import { MobPartsComponent } from "./mob-parts/mob-parts.component";
import { PageFooterComponent } from "./page-footer/page-footer.component";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { ProductComponent } from './product/product.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

@NgModule({
  declarations: [
    FirstComponent,
    MobPartsComponent,
    PageFooterComponent,
    PageHeaderComponent,
    ProductComponent,
    SlidebarComponent,
    CategoriesComponent,
    Section1Component,
    Section2Component
  ],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
