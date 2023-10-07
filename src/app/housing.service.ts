import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({//這個裝飾器，它標記這個類別可以被注入到其他的 Angular 元件或服務中。
  providedIn: 'root',
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  //找到了符合條件的物件，則返回該物件； 如果未找到符合條件的物件，則返回undefined。
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() {}
}
