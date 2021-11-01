import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer:string;

  constructor(private testFooterAndHeader: TestService) { }

  ngOnInit(): void {
    this.footer = this.testFooterAndHeader.footer
  }
}
