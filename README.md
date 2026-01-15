# Autenticación JWT con localStorage

Este es el código base de la clase de autenticación usando localStorage para almacenar el token JWT.

## Estructura del Proyecto

```
autenticacion-cookies/
├── backend/
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── PrivateRoute.jsx
    │   │   └── Register.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── services/
    │   │   └── authService.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Instalación

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Características

- Registro de usuarios
- Inicio de sesión con JWT
- Almacenamiento del token en localStorage
- Rutas protegidas
- Contexto de autenticación

> ⚠️ **Nota**: Este código usa localStorage. Para la versión segura con cookies HTTP-only, consulta la migración en el segundo commit.

