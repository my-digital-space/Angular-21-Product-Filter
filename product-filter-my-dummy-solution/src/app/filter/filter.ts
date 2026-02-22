import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() categoryHeaderString: string = '';
  @Input() categoriesList: string[] = [];
  @Output() categoryChanged = new EventEmitter<string>();

  selectedFilter: string = '';

  toggleFilter(categoryValue: string): void {
    if (this.selectedFilter === categoryValue) {
      this.selectedFilter = '';
    } else {
      this.selectedFilter = categoryValue;
    }
    // Notify parent on both select and deselect
    this.categoryChanged.emit(this.selectedFilter);
  }
}
