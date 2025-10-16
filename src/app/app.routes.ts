import { Routes } from '@angular/router';
import { HomePage, MenuPage, LoginPage, RegisterPage, CartPage, CheckoutPage, OrdersPage, ProfilePage, AdminDashboardPage, AdminProductsPage, AdminOrdersPage, AdminUsersPage } from './pages';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'menu', component: MenuPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'cart', component: CartPage },
  { path: 'checkout', component: CheckoutPage },
  { path: 'orders', component: OrdersPage },
  { path: 'profile', component: ProfilePage },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminDashboardPage },
      { path: 'products', component: AdminProductsPage },
      { path: 'orders', component: AdminOrdersPage },
      { path: 'users', component: AdminUsersPage },
    ],
  },
  { path: '**', redirectTo: '' },
];
