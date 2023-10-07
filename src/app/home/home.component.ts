import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation'; //未來使用新的介面

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location> <!-- [attribute] = "value"-->
      <!-- 將名為 "housingLocation" 的屬性值傳遞給名為 "app-housing-location" 的元件。  -->
      <!-- 左邊的 housingLocation 是 HousingLocationComponent 的接收屬性名稱 -->
      <!-- 右邊的 housingLocation 是 HomeComponent 中你想傳遞給 HousingLocationComponent 的資料名稱 -->
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent { //建立新介面的單一實例項
  housingLocation: HousingLocation = { //HousingLocation 是 housingLocation 屬性的型別。
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'assets/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
