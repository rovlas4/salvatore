import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
  imports: [RouterLink]
})
export class LoginPage {}
