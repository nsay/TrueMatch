import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{
  private http = inject(HttpClient);
  protected title = 'client';
  protected users = signal<any>([]);

  async ngOnInit() {
    this.users.set(await this.getUsers());
  }

  async getUsers() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5000/api/users'));
    } catch (error) {
      throw error;
    }
  }
}
