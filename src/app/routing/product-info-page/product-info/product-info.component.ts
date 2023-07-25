import { Component } from '@angular/core';

export enum Tabs {
  INFO = 'productInfo',
  DELIVERY = 'productDelivery',
}

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  activeTab: Tabs = Tabs.INFO;

  setActiveTab(value: string) {
    switch (value) {
      case Tabs.INFO:
        return (this.activeTab = Tabs.INFO);
      case Tabs.DELIVERY:
        return (this.activeTab = Tabs.DELIVERY);
      default:
        return (this.activeTab = Tabs.INFO);
    }
  }
}
