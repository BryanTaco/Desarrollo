# Autenticación JWT con Cookies HTTP-only

Este proyecto demuestra la migración de autenticación JWT desde localStorage hacia cookies HTTP-only para mejorar la seguridad.

## Historia de Commits

### Commit 1: Código Base (localStorage)
Contiene la implementación original que usa localStorage para almacenar el token JWT.

### Commit 2: Migración a Cookies
Contiene la migración completa a cookies HTTP-only con:
- Backend configurado con cookie-parser
- CORS con credentials habilitado
- Endpoints de login/register que establecen cookies
- Endpoint de logout que limpia cookies
- Frontend con credentials: 'include' en fetch
- AuthContext que verifica con el servidor

## Estructura del Proyecto

```
autenticacion-cookies/
├── backend/
│   ├── routes/
│   │   └── auth.js          # Rutas con cookies
│   ├── server.js            # CORS + cookie-parser
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
└── RESPUESTAS.md            # Respuestas a preguntas
```

## Cambios Realizados

### Backend

1. **Instalado cookie-parser**
2. **Configurado CORS:**
   ```javascript
   app.use(cors({
     origin: 'http://localhost:5173',
     credentials: true
   }));
   ```
3. **Agregado middleware cookie-parser:**
   ```javascript
   app.use(cookieParser());
   ```
4. **Actualizado endpoint register/login:**
   - Ahora establecen cookie con `res.cookie()`
   - Ya no envían token en el response body
   - Atributos: httpOnly, secure, sameSite: 'strict'
5. **Agregado endpoint logout:**
   ```javascript
   router.post('/logout', (req, res) => {
     res.clearCookie('token');
     res.json({ message: 'Sesión cerrada' });
   });
   ```
6. **Actualizado middleware authenticateToken:**
   - Lee token desde `req.cookies.token` en lugar de headers

### Frontend

1. **Actualizado authService.js:**
   - Agregado `credentials: 'include'` a todas las peticiones
   - Eliminado localStorage (setItem/getItem/removeItem)
   - Agregado endpoint logout asíncrono

2. **Actualizado AuthContext.jsx:**
   - Verifica autenticación con el servidor al cargar
   - Logout ahora es asíncrono

3. **Actualizado Navbar.jsx:**
   - handleLogout ahora es async/await

## Instalación y Ejecución

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

## Características de Seguridad

- **httpOnly:** El token no puede ser accedido por JavaScript (protección XSS)
- **sameSite: 'strict':** Previene ataques CSRF
- **secure:** Cookies solo se envían por HTTPS en producción
- **credentials: true:** Permite envío de cookies en cross-origin

## Respuestas a Preguntas

Todas las respuestas a las 12 preguntas de reflexión están en el archivo [RESPUESTAS.md](./RESPUESTAS.md).

---

> **Nota:** Este proyecto es para fines educativos. En producción, considera implementar refresh tokens y otras medidas de seguridad adicionales.

