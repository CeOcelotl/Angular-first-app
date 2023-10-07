import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router'; //導入 RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule], //新增RouterModule到元資料導入@Component
  template: `
    <main>
      <a [routerLink]="['/']"> <!--導到主頁-->
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
      <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
