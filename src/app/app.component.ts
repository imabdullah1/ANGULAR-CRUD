import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formValue!: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  registerationForm() {
    this.authService.postData(this.formValue.value).subscribe(
      (res: any) => {
        alert('Registerd Successfully');
        console.log('Successfully');
      },
      (err: any) => {
        alert('Registerd Failed');
        console.log('Error');
      }
    );
  }
}

export interface DataType {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
