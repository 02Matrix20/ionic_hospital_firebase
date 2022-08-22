import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  textData: string;

  constructor() { }

  getTextData() {
    return this.textData;
  }

  setTextData(text: string) {
    this.textData = text;
  }
}
