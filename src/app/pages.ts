import { Component } from '@angular/core';

// Maquetado básico de páginas (standalone). Colores y estilos se aplicarán vía styles.css global.

@Component({
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <h1>Inicio</h1>
        <p class="muted">Presentación del restaurante y destacados.</p>
      </header>
      <div class="hero">
        <div class="hero-text">
          <h2>Comida deliciosa, pedidos fáciles</h2>
          <p>Explora el menú y realiza tu pedido en minutos.</p>
        </div>
        <div class="hero-cta">
          <a class="btn" href="/menu">Ver menú</a>
        </div>
      </div>
    </section>
  `,
})
export class HomePage {}

@Component({
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <h1>Men��</h1>
        <p class="muted">Listado de platillos con filtros por categoría.</p>
      </header>
      <div class="filters">
        <input class="input" type="search" placeholder="Buscar platillo" />
        <select class="input">
          <option>Categorías</option>
          <option>Entradas</option>
          <option>Platos fuertes</option>
          <option>Bebidas</option>
          <option>Postres</option>
        </select>
      </div>
      <div class="grid">
        <article class="card">
          <div class="card-media skel"></div>
          <div class="card-body">
            <h3 class="card-title">Platillo ejemplo</h3>
            <p class="muted">Descripción breve del platillo...</p>
            <div class="card-actions">
              <span class="price">$120.00</span>
              <button class="btn btn-outline">Agregar</button>
            </div>
          </div>
        </article>
        <article class="card">
          <div class="card-media skel"></div>
          <div class="card-body">
            <h3 class="card-title">Platillo ejemplo</h3>
            <p class="muted">Descripción breve del platillo...</p>
            <div class="card-actions">
              <span class="price">$95.00</span>
              <button class="btn btn-outline">Agregar</button>
            </div>
          </div>
        </article>
        <article class="card">
          <div class="card-media skel"></div>
          <div class="card-body">
            <h3 class="card-title">Platillo ejemplo</h3>
            <p class="muted">Descripción breve del platillo...</p>
            <div class="card-actions">
              <span class="price">$75.00</span>
              <button class="btn btn-outline">Agregar</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  `,
})
export class MenuPage {}

@Component({
  standalone: true,
  template: `
    <section class="page auth">
      <header class="page-header">
        <h1>Iniciar sesión</h1>
        <p class="muted">Accede para continuar con tu pedido.</p>
      </header>
      <form class="form">
        <div class="form-row">
          <label>Correo</label>
          <input class="input" type="email" placeholder="tu@correo.com" />
        </div>
        <div class="form-row">
          <label>Contraseña</label>
          <input class="input" type="password" placeholder="********" />
        </div>
        <div class="form-actions">
          <button class="btn" type="submit">Entrar</button>
          <a class="link" href="/register">Crear cuenta</a>
        </div>
      </form>
    </section>
  `,
})
export class LoginPage {}

@Component({
  standalone: true,
  template: `
    <section class="page auth">
      <header class="page-header">
        <h1>Crear cuenta</h1>
        <p class="muted">Regístrate para ordenar más rápido.</p>
      </header>
      <form class="form">
        <div class="form-row"><label>Nombre</label><input class="input" type="text" placeholder="Tu nombre" /></div>
        <div class="form-row"><label>Correo</label><input class="input" type="email" placeholder="tu@correo.com" /></div>
        <div class="form-row"><label>Contraseña</label><input class="input" type="password" placeholder="********" /></div>
        <div class="form-row"><label>Dirección</label><input class="input" type="text" placeholder="Calle, número, colonia" /></div>
        <div class="form-actions">
          <button class="btn" type="submit">Registrarme</button>
          <a class="link" href="/login">Ya tengo cuenta</a>
        </div>
      </form>
    </section>
  `,
})
export class RegisterPage {}

@Component({
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <h1>Carrito</h1>
        <p class="muted">Revisa y modifica tu pedido antes de confirmar.</p>
      </header>
      <div class="cart">
        <div class="cart-items">
          <div class="cart-item skel-line"></div>
          <div class="cart-item skel-line"></div>
          <div class="cart-item skel-line"></div>
        </div>
        <aside class="cart-summary">
          <div class="summary-row"><span>Subtotal</span><span>$0.00</span></div>
          <div class="summary-row"><span>Entrega</span><span>$0.00</span></div>
          <div class="summary-row total"><span>Total</span><span>$0.00</span></div>
          <a class="btn w-100" href="/checkout">Proceder al pago</a>
        </aside>
      </div>
    </section>
  `,
})
export class CartPage {}

@Component({
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <h1>Checkout</h1>
        <p class="muted">Confirma tu dirección y método de pago.</p>
      </header>
      <form class="form two-col">
        <div class="form-col">
          <div class="form-row"><label>Nombre</label><input class="input" type="text" placeholder="Tu nombre" /></div>
          <div class="form-row"><label>Dirección</label><input class="input" type="text" placeholder="Calle y número" /></div>
          <div class="form-row"><label>Ciudad</label><input class="input" type="text" placeholder="Ciudad" /></div>
          <div class="form-row"><label>Código Postal</label><input class="input" type="text" placeholder="CP" /></div>
        </div>
        <div class="form-col">
          <div class="card summary">
            <h3>Resumen</h3>
            <div class="summary-row"><span>Productos</span><span>$0.00</span></div>
            <div class="summary-row"><span>Entrega</span><span>$0.00</span></div>
            <div class="summary-row total"><span>Total</span><span>$0.00</span></div>
            <button class="btn w-100" type="submit">Confirmar pedido</button>
          </div>
        </div>
      </form>
    </section>
  `,
})
export class CheckoutPage {}

@Component({
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <h1>Historial de pedidos</h1>
        <p class="muted">Consulta tus pedidos anteriores.</p>
      </header>
      <div class="table">
        <div class="table-row table-head"><div>ID</div><div>Fecha</div><div>Estado</div><div>Total</div></div>
        <div class="table-row"><div>#0001</div><div>2025-01-01</div><div><span class="badge">Pendiente</span></div><div>$250.00</div></div>
        <div class="table-row"><div>#0002</div><div>2025-01-02</div><div><span class="badge">Entregado</span></div><div>$180.00</div></div>
      </div>
    </section>
  `,
})
export class OrdersPage {}

@Component({
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <h1>Perfil</h1>
        <p class="muted">Configura tus datos personales y dirección de entrega.</p>
      </header>
      <form class="form">
        <div class="form-row"><label>Nombre</label><input class="input" type="text" placeholder="Tu nombre" /></div>
        <div class="form-row"><label>Correo</label><input class="input" type="email" placeholder="tu@correo.com" /></div>
        <div class="form-row"><label>Dirección</label><input class="input" type="text" placeholder="Calle, número, colonia" /></div>
        <div class="form-actions"><button class="btn" type="submit">Guardar cambios</button></div>
      </form>
    </section>
  `,
})
export class ProfilePage {}

// Admin
@Component({
  standalone: true,
  template: `
    <section class="page admin">
      <header class="page-header">
        <h1>Panel de administración</h1>
        <p class="muted">Resumen general del sistema.</p>
      </header>
      <div class="grid stats">
        <div class="card center"><h3>Pedidos hoy</h3><p class="kpi">0</p></div>
        <div class="card center"><h3>Productos activos</h3><p class="kpi">0</p></div>
        <div class="card center"><h3>Usuarios</h3><p class="kpi">0</p></div>
      </div>
    </section>
  `,
})
export class AdminDashboardPage {}

@Component({
  standalone: true,
  template: `
    <section class="page admin">
      <header class="page-header">
        <h1>Productos</h1>
        <p class="muted">CRUD de platillos.</p>
      </header>
      <div class="actions"><button class="btn">Nuevo producto</button></div>
      <div class="table">
        <div class="table-row table-head"><div>Nombre</div><div>Categoría</div><div>Precio</div><div>Disponibilidad</div><div></div></div>
        <div class="table-row"><div>Ejemplo</div><div>Entradas</div><div>$100.00</div><div>Sí</div><div><button class="btn btn-small btn-outline">Editar</button></div></div>
      </div>
    </section>
  `,
})
export class AdminProductsPage {}

@Component({
  standalone: true,
  template: `
    <section class="page admin">
      <header class="page-header">
        <h1>Pedidos</h1>
        <p class="muted">Listado y actualización de estado.</p>
      </header>
      <div class="table">
        <div class="table-row table-head"><div>ID</div><div>Cliente</div><div>Fecha</div><div>Estado</div><div>Total</div><div></div></div>
        <div class="table-row"><div>#0001</div><div>Juan</div><div>2025-01-01</div><div><select class="input"><option>Pendiente</option><option>En preparación</option><option>Entregado</option></select></div><div>$250.00</div><div><button class="btn btn-small">Guardar</button></div></div>
      </div>
    </section>
  `,
})
export class AdminOrdersPage {}

@Component({
  standalone: true,
  template: `
    <section class="page admin">
      <header class="page-header">
        <h1>Usuarios</h1>
        <p class="muted">Administración de usuarios y roles.</p>
      </header>
      <div class="table">
        <div class="table-row table-head"><div>Nombre</div><div>Correo</div><div>Rol</div><div></div></div>
        <div class="table-row"><div>Admin</div><div>admin@demo.com</div><div>
          <select class="input"><option>ADMIN</option><option>CUSTOMER</option></select>
        </div><div><button class="btn btn-small">Actualizar</button></div></div>
      </div>
    </section>
  `,
})
export class AdminUsersPage {}
