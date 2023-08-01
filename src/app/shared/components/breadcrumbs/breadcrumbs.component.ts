import { Component, Input, OnChanges } from '@angular/core';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() categoryID: number;
  @Input() categoryTitle: string;
  @Input() productTitle: string;
  @Input() cart: boolean;
  @Input() order: boolean;

  constructor(private filterService: FilterService) {}

  setCategory() {
    this.filterService.setCategory(this.categoryID);
  }
}
