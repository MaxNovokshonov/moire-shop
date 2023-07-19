import { Component, Input } from '@angular/core';
import { Pagination } from '../../../common/interfaces/products';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-products-pagination',
  templateUrl: './products-pagination.component.html',
  styleUrls: ['./products-pagination.component.scss'],
})
export class ProductsPaginationComponent {
  constructor(private filterService: FilterService) {}

  @Input() pagination: Pagination;

  prevPage() {
    if (!this.pagination) {
      return;
    }
    if (this.pagination.page === 1) {
      return;
    } else {
      this.filterService.updateParams(this.pagination.page - 1);
    }
  }

  nextPage() {
    if (!this.pagination) {
      return;
    }
    if (this.pagination.page === this.pagination.pages) {
      return;
    } else {
      this.filterService.updateParams(this.pagination.page + 1);
    }
  }
}
