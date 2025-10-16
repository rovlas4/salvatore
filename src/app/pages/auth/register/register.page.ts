import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-page',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
  imports: [RouterLink]
})
export class RegisterPage {}
