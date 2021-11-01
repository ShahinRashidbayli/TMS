import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //componentin adi
  templateUrl: './app.component.html', //coponentin view terefi
  styleUrls: ['./app.component.scss'] // sadece bu componentde calisan style dosyasini gosterir
})
export class AppComponent {
  title = 'todoList';

  patientList =[

  ];
}
