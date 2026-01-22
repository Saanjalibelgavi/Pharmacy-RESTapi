import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PharmacyItem } from '../models/pharmacy-item.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private baseUrl = '/api/pharmacy';

  constructor(private http: HttpClient) {}

  getItems(): Observable<PharmacyItem[]> {
    return this.http.get<PharmacyItem[]>(`${this.baseUrl}/items`);
  }

dispense(orderItemId: number, qty: number) {
  return this.http.post(
    `${this.baseUrl}/dispense`,
    {
      orderItemId,
      dispenseQty: qty
    },
    { responseType: 'text' } // 🔥 IMPORTANT
  );
}

}
