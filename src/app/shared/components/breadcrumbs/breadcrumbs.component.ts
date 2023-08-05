import { Component, Input } from '@angular/core';
import { FilterService } from '../../../services/filter.service';
import { PageType } from '../../../common/enums/pageType';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() pageType: PageType;
  @Input() categoryID: number;
  @Input() categoryTitle: string;
  @Input() productTitle: string;

  constructor(private filterService: FilterService) {}

  setCategory() {
    this.filterService.setCategory(this.categoryID);
  }
}
