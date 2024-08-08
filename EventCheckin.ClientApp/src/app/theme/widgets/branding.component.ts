import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="d-inline-block text-nowrap r-full text-reset" href="/">
      <img src="./assets/images/companylogo.png" style="padding-top: 4px;" class="brand-logo align-middle m-2 r-full" alt="logo" />
      <span class="align-middle f-s-16 f-w-500 m-x-8"><img src="./assets/images/companyname.png" class=" align-middle m-2" style="width: auto;height:35px;" alt="logo" /></span>
    </a>
  `,
  styles: [
    `
      .brand-logo {
        width: 30px;
        height: 35px;
      }
    `,
  ],
})
export class BrandingComponent {}
