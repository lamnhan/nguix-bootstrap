import { NgModule } from '@angular/core';

import { HeaderComponentModule } from './components/header/header.module';
import { FooterComponentModule } from './components/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    HeaderComponentModule,
    FooterComponentModule,
  ],
  exports: [
    HeaderComponentModule,
    FooterComponentModule,
  ]
})
export class NguixBootstrapModule { }
