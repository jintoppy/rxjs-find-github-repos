import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = new FormControl('');
  constructor(private http: HttpClient) {}
  addUser() {}
}
