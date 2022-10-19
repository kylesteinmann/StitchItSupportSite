import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  machineTypeButton = [
    {
      type: "Embroidery Machine",
      brandRoute: "/embroideryBrands",
      brand: "SWF",
      modelsRoute: "/swfModels",
      model: "a series",
      modelInfoRoute: ""
    },
    {
      type: "White Toner/Sublimation Printer",
      brandRoute: "/printerBrands",
      brand: "OKI",
      modelsRoute: "/printerModels",
      model: "Pro9541WT",
      modelInfoRoute: ""
    }, {
      type: "White Toner/Sublimation Printer",
      brandRoute: "/printerBrands",
      brand: "OKI",
      modelsRoute: "/printerModels",
      model: "8432",
      modelInfoRoute: ""
    }
  ];
  //
  uniqueKeys = new Set();
  uniqueButtons: any;
  brandArray: any = []


  uniqueTypeButtons() {
    return this.uniqueButtons = this.machineTypeButton.filter(element => {
      const isDuplicate = this.uniqueKeys.has(element.type);
      this.uniqueKeys.add(element.type);
      if (!isDuplicate) {
        return true;
      }
      return false;
    })
  }
  uniqueBrandButtons(selector: string) {

    const uniqueBrandsArray = this.machineTypeButton.filter(element => element.type === selector)

    return this.uniqueButtons = uniqueBrandsArray.filter(element => {
      const isDuplicate = this.uniqueKeys.has(element.brand);
      this.uniqueKeys.add(element.brand);
      if (!isDuplicate) {
        return true;
      }
      return false;
    })
  }

  uniqueModelButtons(selector: string) {

    const uniqueBrandsArray = this.machineTypeButton.filter(element => element.brand === selector)

    return this.uniqueButtons = uniqueBrandsArray.filter(element => {
      const isDuplicate = this.uniqueKeys.has(element.model);
      this.uniqueKeys.add(element.model);
      if (!isDuplicate) {
        return true;
      }
      return false;
    })
  }

  }






