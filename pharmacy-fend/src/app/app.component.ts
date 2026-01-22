import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PharmacyTableComponent } from './components/pharmacy-table/pharmacy-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PatientInfoComponent,
    PharmacyTableComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
