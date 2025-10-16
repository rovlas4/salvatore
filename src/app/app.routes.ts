import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';
import { LoginPage } from './pages/auth/login/login.page';
import { RegisterPage } from './pages/auth/register/register.page';
import { CartPage } from './pages/cart/cart.page';
import { CheckoutPage } from './pages/checkout/checkout.page';
import { OrdersPage } from './pages/orders/orders.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminDashboardPage } from './pages/admin/dashboard/admin-dashboard.page';
import { AdminProductsPage } from './pages/admin/products/admin-products.page';
import { AdminOrdersPage } from './pages/admin/orders/admin-orders.page';
import { AdminUsersPage } from './pages/admin/users/admin-users.page';

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
