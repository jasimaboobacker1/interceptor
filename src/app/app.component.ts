import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'interceptor';

  details: any;
  username: string = '';
  email: string = '';
  isLoggingIn = false;

  constructor(private dataService: DataService) {}

  GetAllDetail(): void {
    this.dataService.getDetails().subscribe(
      (data: any) => {
        this.details = data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  Login(username: string, email: string): void {
    if (!username || !email) {
      alert('Username and email are required.');
      return;
    }
    this.isLoggingIn = true;
    this.dataService.login(username, email)
      .subscribe((response: any) => {
       
          const token = uuidv4();
          this.isLoggingIn = false;
          alert('Login Successfull and token created')
          localStorage.setItem('token', token);
          console.log('Login successful:', response,'Token:',token);
          this.username = '';
          this.email = ''; 
        },
        (error: any) => {
          console.error('Error:', error);
          this.isLoggingIn = false;
        });
  }

  ngOnInit(): void {}

}
