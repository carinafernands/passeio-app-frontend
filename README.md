# Passeio App

Aplicação Angular + API JSON Server.  
Frontend hospedado no **GitHub Pages**.  
Backend + Frontend Dockerizados e hospedados no **Render**.

---

## 🚀 Tecnologias

- Angular 19
- TailwindCSS
- JSON Server
- Docker & Docker Compose
- Nginx
- GitHub Pages
- Render

---

## 📦 Como rodar localmente

# 1. Instale dependências
npm install

shell
Copiar código

# 2. Suba o frontend
npm start

shell
Copiar código

# 3. Suba a API
npm run server

yaml
Copiar código

---

## 🐳 Rodar tudo com Docker

### Build das imagens
docker build -t passeio-app .
docker build -t passeio-api ./api

shell
Copiar código

### Executar containers
docker run -p 4200:80 passeio-app
docker run -p 4000:4000 passeio-api

yaml
Copiar código

---

## 🌍 Deploys

# 🔹 Frontend (Angular)
Hospedado em **GitHub Pages**

# 🔹 Backend (API)
Hospedado no **Render** usando Docker

---
