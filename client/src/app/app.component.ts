import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient);
  title = 'client';
  users: any;

  ngOnInit() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => { this.users = response },
      error: error => { console.log(error) },
      complete: () => console.log('Completed!'),
    })
  }
}
