import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyService } from '../../services/pharmacy.service';

@Component({
  selector: 'app-pharmacy-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pharmacy-table.component.html',
  styleUrl: './pharmacy-table.component.css'
})
export class PharmacyTableComponent implements OnInit {

  orderItems: any[] = [];
  loading = false;

  constructor(private pharmacyService: PharmacyService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.pharmacyService.getItems().subscribe(data => {
      this.orderItems = data;
    });
  }
dispense(item: any) {
  this.pharmacyService.dispense(item.id, 1).subscribe({
    next: () => {
      item.dispensedQty += 1;
    },
    error: (err) => {
      console.error(err);
      alert('Failed to dispense medicine');
    }
  });
}




}
