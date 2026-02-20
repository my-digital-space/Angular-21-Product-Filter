import { CommonModule } from '@angular/common';
import { Component, EventEmitter, 
  Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters implements OnInit {
  @Input() filterType!: 'gender' | 'category' | string;
  @Input() filterValues: string[] = [];

  @Output() filterSelected = new EventEmitter<string | null>();

  selectedValue: string | null = null;

  ngOnInit(): void {
    // debug — parent often binds correctly; keep console log for dev
    // console.log('FiltersComponent init', this.filterType, this.filterValues);
  }

  onFilterClick(value: string) {
    // toggle logic: second click deselects
    if (this.selectedValue === value) {
      this.selectedValue = null;
    } else {
      this.selectedValue = value;
    }
    // emit raw value (parent will normalize 'all' -> null)
    this.filterSelected.emit(this.selectedValue);
  }

  // helper for display (titlecase)
  displayLabel(value: string) {
    return value === 'all' ? 'All' : value.charAt(0).toUpperCase() + value.slice(1);
  }
}
