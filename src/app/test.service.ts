import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  header: string = "Header";
  footer: string = "Footer";




  constructor() {
  }
}

