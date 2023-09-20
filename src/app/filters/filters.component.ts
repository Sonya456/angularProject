import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  ngOnInit(): void {
    console.log("from filter: products", this.products);
  }
  @Input() products: any;
  @Output() filterUpdateEvent = new EventEmitter<any>;
  items: any[] = [];
  codeFilter: any;
  nameFilter: any;
  categoryFilter: any;
  quantityFilter: any;

  selectedItem: any;

  suggestions: any[] = [];

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

  onFilterChange(){
    this.filterUpdateEvent.emit({
      codeFilter: this.codeFilter,
      nameFilter: this.nameFilter,
      categoryFilter: this.categoryFilter,
      quantityFilter: this.quantityFilter
    })
  }
}
