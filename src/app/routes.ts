import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

//為應用程式定義兩個路由
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id', //:id是動態的，並且會根據程式碼請求路由的方式而變化。
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
