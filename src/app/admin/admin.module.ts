import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports: [
    LayoutModule
  ]

})
export class AdminModule { }

// eğer ki bir modül başka bir modülü kendi içerisinde benimseyecekse
// o modülü imports kısmına eklemeliyiz