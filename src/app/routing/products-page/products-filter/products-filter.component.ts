import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { FilterColor } from '../../../common/interfaces/colors';
import { FilterCategory } from '../../../common/interfaces/categories';
import { FilterMaterial } from '../../../common/interfaces/materials';
import { FilterSeason } from '../../../common/interfaces/seasons';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss'],
})
export class ProductsFilterComponent implements OnInit {
  filterForm: FormGroup;
  colors: FilterColor[];
  categories: FilterCategory[];
  materials: FilterMaterial[];
  seasons: FilterSeason[];
  isError = false;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private filterService: FilterService,
  ) {
    this.filterForm = this.fb.group({
      page: [1],
      limit: [9],
      minPrice: ['', Validators.pattern('^[0-9]+$')],
      maxPrice: ['', Validators.pattern('^[0-9]+$')],
      categoryId: [this.filterService.params$.value.categoryId],
      colorIds: this.fb.array([]),
      materialIds: this.fb.array([]),
      seasonIds: this.fb.array([]),
    });
  }

  get minPrice(): FormControl {
    return this.filterForm.get('minPrice') as FormControl;
  }

  get maxPrice(): FormControl {
    return this.filterForm.get('maxPrice') as FormControl;
  }

  get colorsArray(): FormArray {
    return this.filterForm.get('colorIds') as FormArray;
  }

  get materialsArray(): FormArray {
    return this.filterForm.get('materialIds') as FormArray;
  }

  get seasonsArray(): FormArray {
    return this.filterForm.get('seasonIds') as FormArray;
  }

  ngOnInit(): void {
    this.getFilterData();
  }

  getFilterData() {
    this.productsService.getAllColors().subscribe((colors) => {
      colors.forEach(() => {
        this.colorsArray.push(this.fb.control(false));
      });
      this.colors = colors;
    });

    this.productsService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.productsService.getAllMaterials().subscribe((materials) => {
      materials.forEach(() => {
        this.materialsArray.push(this.fb.control(false));
      });
      this.materials = materials;
    });

    this.productsService.getAllSeasons().subscribe((seasons) => {
      seasons.forEach(() => {
        this.seasonsArray.push(this.fb.control(false));
      });
      this.seasons = seasons;
    });
  }

  submit() {
    if (this.minPrice.value && this.maxPrice.value && this.minPrice.value > this.maxPrice.value) {
      this.isError = true;
      return;
    }

    this.isError = false;

    this.filterForm.value.colorIds = this.filterForm.value.colorIds
      .map((checked: boolean, i: number) => (checked ? this.colors[i].id : null))
      .filter((id: number | null) => id !== null);

    this.filterForm.value.materialIds = this.filterForm.value.materialIds
      .map((checked: boolean, i: number) => (checked ? this.materials[i].id : null))
      .filter((id: number | null) => id !== null);

    this.filterForm.value.seasonIds = this.filterForm.value.seasonIds
      .map((checked: boolean, i: number) => (checked ? this.seasons[i].id : null))
      .filter((id: number | null) => id !== null);

    this.filterService.setParams(this.filterForm.value);
  }

  clearForm() {
    this.isError = false;
    this.filterService.resetParams();
    this.filterForm.reset();
    this.filterForm.patchValue(this.filterService.params$.value);
  }
}
