import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation'; //未來使用新的介面
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- 迭代 housingLocationList 陣列中的每一項，可以取 let item of housingLocationList -->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
      <!-- [attribute] = "value"-->
      <!-- 將名為 "housingLocation" 的屬性值傳遞給名為 "app-housing-location" 的元件。  -->
      <!-- 左邊的 housingLocation 是 app-housing-location 元件的輸入屬性 -->
      <!-- 右邊的 housingLocation 是從 *ngFor 得到的當前項目，變更前是 HomeComponent 類別上的屬性  -->
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //建立新介面的單一實例項
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService); //透過 inject(HousingService) 方法手動注入了 HousingService 服務。

  constructor() {
    //頁面載入時，filteredLocationList應預設包含所有建築物位置值
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filteredLocationList: HousingLocation[] = []; //過濾結果屬性

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
